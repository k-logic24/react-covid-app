import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import covidReducer from '../features/covid/covidSlice'
import counterReducer from '../features/counter/counterSlice'

export const store = configureStore({
  reducer: {
    covid: covidReducer,
    counter: counterReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
