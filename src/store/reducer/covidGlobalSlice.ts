import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

import {RootState} from "@/store/index"
import dataJson from '@/utils/data.json'
import dataJsonDaily from '@/utils/dataDaily.json'

type ApiData = typeof dataJson
type ApiDataDaily = typeof dataJsonDaily
type covidState = {
  data: ApiData
  country: string
  dailyData: ApiDataDaily
}

const apiUrl = `https://covid19.mathdro.id/api`
const initialState: covidState = {
  data: {
    "confirmed": {
      "value": 23298505,
      "detail": "https://covid19.mathdro.id/api/confirmed"
    },
    "recovered": {
      "value": 14991600,
      "detail": "https://covid19.mathdro.id/api/recovered"
    },
    "deaths": {
      "value": 806404,
      "detail": "https://covid19.mathdro.id/api/deaths"
    },
    "dailySummary": "https://covid19.mathdro.id/api/daily",
    "dailyTimeSeries": {
      "pattern": "https://covid19.mathdro.id/api/daily/[dateString]",
      "example": "https://covid19.mathdro.id/api/daily/2-14-2020"
    },
    "image": "https://covid19.mathdro.id/api/og",
    "source": "https://github.com/mathdroid/covid19",
    "countries": "https://covid19.mathdro.id/api/countries",
    "countryDetail": {
      "pattern": "https://covid19.mathdro.id/api/countries/[country]",
      "example": "https://covid19.mathdro.id/api/countries/USA"
    },
    "lastUpdate": "2020-08-23T21:27:59.000Z"
  },
  country: "",
  dailyData: [
    {
      "totalConfirmed": 555,
      "mainlandChina": 548,
      "otherLocations": 7,
      "deltaConfirmed": 0,
      "totalRecovered": 0,
      "confirmed": {
        "total": 555,
        "china": 548,
        "outsideChina": 7
      },
      "deltaConfirmedDetail": {
        "total": 0,
        "china": 0,
        "outsideChina": 0
      },
      "deaths": {
        "total": 17,
        "china": 17,
        "outsideChina": 0
      },
      "recovered": {
        "total": 0,
        "china": 0,
        "outsideChina": 0
      },
      "active": 0,
      "deltaRecovered": 0,
      "incidentRate": 0.44821646978651847,
      "peopleTested": 0,
      "reportDate": "2020-01-22"
    }
  ]
}

export const fetchAsyncGet = createAsyncThunk("covid/get", async() => {
  const {data} = await axios.get<ApiData>(apiUrl)
  return data
})

export const fetchAsyncGetDaily = createAsyncThunk(
  "covid/getDaily",
  async () => {
    const {data} = await axios.get<ApiDataDaily>(`${apiUrl}/daily`)
    return data
  }
)

export const fetchAsyncGetCountry = createAsyncThunk(
  "covid/getCountry",
  async (country: string) => {
    let dynamicUrl = apiUrl
    if (country) {
      dynamicUrl = `${apiUrl}/countries/${country}`
    }
    const {data} = await axios.get<ApiData>(dynamicUrl)
    return {
      data: data,
      country: country
    }
  }
)

const covidGlobalSlice = createSlice({
  name: "covidGlobal",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncGet.fulfilled, (state, action) => {
      return {
        ...state,
        data: action.payload
      }
    })
    builder.addCase(fetchAsyncGetDaily.fulfilled, (state, action)  => {
      return {
        ...state,
        dailyData: action.payload
      }
    })
    builder.addCase(fetchAsyncGetCountry.fulfilled, (state, action) => {
      return {
        ...state,
        data: action.payload.data,
        country: action.payload.country
      }
    })
  }
})

export const selectData = (state: RootState) => state.covidGlobal.data
export const selectDailyData = (state: RootState) => state.covidGlobal.dailyData
export const selectCountry = (state: RootState) => state.covidGlobal.country

export default covidGlobalSlice.reducer
