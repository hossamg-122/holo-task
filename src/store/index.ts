import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import githubReducer from './githubSlice'

const persistConfig = {
  key: 'root',
  storage
}

const rootReducer = {
  github: persistReducer(persistConfig, githubReducer)
}

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
        ignoredActionPaths: ['register'],
        ignoredPaths: ['register']
      }
    })
})

const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type IDispatch = typeof store.dispatch

export { store, persistor }
