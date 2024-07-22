import { useApi } from '@/apiController'
import { AxiosError } from 'axios'
import {
  FetchItemsResponse,
  InitialState,
  SearchArgs,
  FetchItemsError,
  SearchSelectType
} from '@/types'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '.'

const initialState: InitialState = {
  items: [],
  query: '',
  error: null,
  perPage: 30,
  hasMore: false,
  entity: 'users',
  isLoading: false,
  isFetchingMore: false
}

export const fetchItems = createAsyncThunk(
  'github/fetchItems',
  async (args: SearchArgs, { rejectWithValue, getState }) => {
    const { github } = getState() as RootState

    const { perPage: per_page, query: stateQuery, entity: stateEntity } = github

    const { query = stateQuery, entity = stateEntity, page } = args

    const params = { q: query, page, per_page }

    try {
      const { data } = await useApi().get(`/${entity}`, { params })
      return data
    } catch (err: unknown) {
      const axiosError = err as AxiosError<FetchItemsError>
      return rejectWithValue(axiosError.response?.data?.message || 'An error occurred')
    }
  }
)

export const githubSlice = createSlice({
  name: 'github',
  initialState,
  reducers: {
    setIsFetchingMore: (state, action: PayloadAction<boolean>) => {
      state.isFetchingMore = action.payload
    },
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload
    },
    setEntity: (state, action: PayloadAction<SearchSelectType>) => {
      state.entity = action.payload
    },
    resetItems: (state) => {
      state.items = []
      state.error = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.error = null
        state.isLoading = true
      })
      .addCase(fetchItems.fulfilled, (state, action: PayloadAction<FetchItemsResponse>) => {
        const { payload } = action

        state.isLoading = false

        state.items = state.isFetchingMore ? [...state.items, ...payload.items] : payload.items

        state.hasMore = state.items.length !== payload.total_count && !!payload.items.length

        state.isFetchingMore = false
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.items = []
        state.hasMore = false
        state.isLoading = false
        state.error = (action.payload as string) || 'Something went wrong'
      })
  }
})

export const { setQuery, setEntity, resetItems, setIsFetchingMore } = githubSlice.actions

export default githubSlice.reducer
