import React from 'react'
import {Typography} from "@material-ui/core"
import {Doughnut} from "react-chartjs-2"
import {useSelector} from "react-redux"
import {selectData} from "../covidSlice"

const PieChart: React.FC = () => {
  const data = useSelector(selectData)
  const motality =
    data.confirmed && (100 * data.deaths.value) / data.confirmed.value
  const pieChart = data && (
    <Doughnut
      data={{
        labels: [`感染者`, `回復者`, `死亡者`],
        datasets: [
          {
            data: [
              data.confirmed.value,
              data.recovered.value,
              data.deaths.value
            ],
            backgroundColor: [
              `rgba(0,0,255,.5)`,
              `#008080`,
              `rgba(255,0,0,.5)`
            ],
            hoverBackgroundColor: [`#36a2eb`, `#3cb371`, `#ff6384`],
            borderColor: [`transparent`, `transparent`, `transparent`]
          }
        ]
      }}
      options={{
        legend: {
          position: `bottom`,
          labels: {
            boxWidth: 15
          }
        }
      }}
    />
  )

  return (
    <>
      {data.confirmed && (
        <Typography align="center" color="textSecondary" gutterBottom>
          死亡率 {data.confirmed && motality.toFixed(2)} [%]
        </Typography>
      )}
      {pieChart}
    </>
  )
}

export default PieChart
