import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../Feature/User/userRedsucer';

const store = configureStore({
  reducer: {
    userReducer

  }
});

export type AppDispatch = typeof store.dispatch;

export default store