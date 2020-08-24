import React from 'react'

import Cards from "./features/covid/Cards/Cards"
import Chart from "./features/covid/Chart/Chart"
import PieChart from "./features/covid/PieChart/PieChart"
import SwitchCountry from "./features/covid/SwitchCountry/SwitchCountry"
import './App.css'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Cards />
        <Chart />
        <PieChart />
        <SwitchCountry />
      </header>
    </div>
  )
}

export default App
