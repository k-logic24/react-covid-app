import React from 'react'
import { Line, Bar } from 'react-chartjs-2'
import {useSelector} from "react-redux"
import {selectData, selectCountry, selectDailyData} from "../covidSlice";

import styles from './Chart.module.css'

const Chart: React.FC = () => {
  const data = useSelector(selectData)
  const country = useSelector(selectCountry)
  const dailyData = useSelector(selectDailyData)

  const barChart = data && (
    <Bar
      data={{
        labels: [`Infected`, `Recovered`, `Deaths`],
        datasets: [
          {
            label: `People`,
            backgroundColor: [
              `rgba(0,0,255,.5)`,
              `#008000`,
              `rgba(255,0,0,.5)`
            ],
            data: [
              data.confirmed.value,
              data.recovered.value,
              data.deaths.value
            ]
          }
        ]
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Latest status in ${country}` }
      }}
    />
  )

  const lineChart = dailyData.length && (
    <Line
      data={{
        labels: dailyData.map(({reportDate}) => reportDate),
        datasets: [
          {
            data: dailyData.map((data) => data.confirmed.total),
            label: `Infected`,
            borderColor: `#3333ff`,
            fill: true
          },
          {
            data: dailyData.map((data) => data.deaths.total),
            label: `Deaths`,
            borderColor: `#ff3370`,
            fill: true
          }
        ]
      }}
    />
  )

  return (
    <div className={styles.container}>
      {country.length ? barChart : lineChart}
    </div>
  )
}

export default Chart