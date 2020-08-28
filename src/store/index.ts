import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import covidGlobalReducer from '@/store/reducer/covidGlobalSlice'
import covidLocalReducer from '@/store/reducer/covidLocalSlide'

export const store = configureStore({
  reducer: {
    covidGlobal: covidGlobalReducer,
    covidLocal: covidLocalReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
