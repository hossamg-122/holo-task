// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import counterReducer from '@/features/counter/counterSlice'

const persistConfig = {
  key: 'root',
  storage
}

const rootReducer = {
  counter: persistReducer(persistConfig, counterReducer)
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

export { store, persistor }
