import React from 'react';
import {Bar,  HorizontalBar} from 'react-chartjs-2'

const data= {
  labels: [`mon`, `Tue`, `Web`, `Thu`],
  datasets: [
    {
      label: `demo bar plot`,
      backgroundColor: `#20b2aa`,
      borderColor: `transparent`,
      hoverBackgroundColor: `#5f9ea0`,
      data: [50, 30, 75, 10]
    }
  ]
}

const BarPlot: React.FC = () => {
  return (
    <div>
      <Bar data={data}/>
      <HorizontalBar data={data}/>
    </div>
  );
};

export default BarPlot;
