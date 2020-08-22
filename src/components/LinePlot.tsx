import React from 'react'
import {Line} from 'react-chartjs-2'

const data = {
  labels: [`mon`, `Tue`, `Web`, `Thu`],
  datasets: [
    {
      label: `Demo line plot`,
      backgroundColor: `#008080`,
      borderColor: `#7fffd4`,
      pointBorderWidth: 10,
      data: [5,6,7,8]
    }
  ]
}

const LinePlot: React.FC = () => {
  return (
    <div>
      <Line data={data} />
    </div>
  )
}

export default LinePlot
