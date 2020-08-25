import React from 'react'
import Typography from '@material-ui/core/Typography'
import {Doughnut} from 'react-chartjs-2'
import {useSelector} from "react-redux"
import {selectDaily} from "../covidCountrySlide"

const PieChart: React.FC = () => {
  const daily = useSelector(selectDaily)
  const latestData = daily[daily.length - 1]
  const motality =
    (100 * latestData.Deaths) / latestData.Confirmed

  const pieChart = daily.length && (
    <Doughnut
      data={{
        labels: [`Infected`, `Recovered`, `Deaths`],
        datasets: [
          {
            data: [
              latestData.Confirmed,
              latestData.Recovered,
              latestData.Deaths
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
      <Typography align="center" color="textSecondary" gutterBottom>
        Mortarity {motality.toFixed(2)} [%]
      </Typography>
      {pieChart}
    </>
  )
}

export default PieChart
