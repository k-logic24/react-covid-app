import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import covidReducer from '../features/covid/covidSlice'
import covidCountryReducer from '../features/covid_country/covidCountrySlide'

export const store = configureStore({
  reducer: {
    covid: covidReducer,
    covidCountry: covidCountryReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
