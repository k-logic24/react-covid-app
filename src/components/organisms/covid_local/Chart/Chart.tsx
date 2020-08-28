import React from 'react'
import {Line} from 'react-chartjs-2'

import {useSelector} from "react-redux"
import {selectDaily} from "@/store/reducer/covidLocalSlide"

import styles from './Chart.module.css'

const Chart: React.FC = () => {
  const daily = useSelector(selectDaily)
  const dates = daily.map(({Date}) => Date)
  const lineChart = daily.length && (
    <Line
      data={{
        labels: dates.map((date) => new Date(date).toDateString()),
        datasets: [
          {
            data: daily.map((data) => data.Confirmed),
            label: `感染者`,
            borderColor: `#3333ff`,
            showLine: false
          },
          {
            data: daily.map((data) => data.Recovered),
            label: `回復者`,
            borderColor: `green`,
            showLine: false
          },
          {
            data: daily.map((data) => data.Deaths),
            label: `死亡者`,
            borderColor: `#ff3370`,
            showLine: false
          }
        ]
      }}
    />
  )

  return (
    <div className={styles.container}>
      {lineChart}
    </div>
  )
}

export default Chart
