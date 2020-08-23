import React from 'react'
import {Radar} from 'react-chartjs-2'

const data = {
  labels: [
    `React`,
    `Vue`,
    `Angular`,
    `JavaScript`,
    `TypeScript`,
    `Redux`,
    `REST API`
  ],
  datasets: [
    {
      labels: `person A`,
      backgroundColor: `rgba(179, 181, 198, .2)`,
      borderColor: `#008b8b`,
      pointBackgroundColor: `#008b8b`,
      pointBorderColor: `#fff`,
      data: [`100`, `50`, `30`, `70`, `100`, `80`, `80`]
    },
    {
      labels: `person B`,
      backgroundColor: `rgba(179, 181, 198, .2)`,
      borderColor: `#ff1493`,
      pointBackgroundColor: `#ff1493`,
      pointBorderColor: `#fff`,
      data: [`100`, `50`, `100`, `30`, `80`, `80`, `80`]
    }
  ]
}

const RadarPlot: React.FC = () => {
  return (
    <div>
      <Radar data={data} />
    </div>
  )
}

export default RadarPlot
