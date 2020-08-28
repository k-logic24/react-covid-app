import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

import {RootState} from '@/store'
import dataDaily from '@/utils/apiDataDaily.json'

const apiUrl = `https://api.covid19api.com/total/country`

type DataDaily = typeof dataDaily
type covidState = {
  daily: DataDaily
  country: string
}

const initialState: covidState = {
  daily: dataDaily,
  country: `Japan`
}

export const fetchAsyncGetDaily = createAsyncThunk(
  'covidContry/getDaily',
  async (country: string) => {
    const {data} = await axios.get<DataDaily>(`${apiUrl}/${country}`)
    return { data, country }
  }
)

const covidCountrySlice = createSlice({
  name: 'covidLocal',
  initialState,
  reducers: {},
  extraReducers: (builder => {
    builder.addCase(fetchAsyncGetDaily.fulfilled, (state, action) => {
      return {
        ...state,
        daily: action.payload.data,
        country: action.payload.country
      }
    })
  })
})

export const selectDaily = (state: RootState) => state.covidLocal.daily
export const selectCountry = (state: RootState) => state.covidLocal.country

export default covidCountrySlice.reducer
