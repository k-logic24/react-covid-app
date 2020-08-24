import React from 'react'

import Cards from "./features/covid/Cards/Cards"
import Chart from "./features/covid/Chart/Chart"
import './App.css'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Cards />
        <Chart />
      </header>
    </div>
  )
}

export default App
