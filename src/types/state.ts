import { GithubItem } from './github'
import { SearchSelectType } from './general'

export interface InitialState {
  items: GithubItem[]
  perPage: number
  hasMore: boolean
  isLoading: boolean
  isFetchingMore: boolean
  error?: string | null
  query: string
  entity: SearchSelectType
}
