import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import productSlice from './features/productSlice';

export const store = configureStore({
    reducer: {
      product:productSlice
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({})
  })
  
  setupListeners(store.dispatch);


  // Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch