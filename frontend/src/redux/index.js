import { configureStore } from '@reduxjs/toolkit';
import userSilceReducer from './userSilce';
import productSliceReducer from './productSlice';
export const store = configureStore({
  reducer: {
    user: userSilceReducer,
    productSliceReducer: productSliceReducer

  }
});