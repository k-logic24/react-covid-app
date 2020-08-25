import {combineReducers} from 'redux'
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import covidReducer from '../features/covid/covidSlice'

const reducer = combineReducers({
  covid: covidReducer
})

export const store = configureStore({reducer});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
