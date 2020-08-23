import React from 'react'
import './App.css'

import LinePlot from "./components/LinePlot"
import PiePlot from "./components/PiePlot"
import BarPlot from "./components/BarPlot"
import RadarPlot from "./components/RadarPlot";
import BubblePlot from "./components/BubblePlot";

const App = () => {
  return (
    <div className="App">
      <LinePlot />
      <PiePlot />
      <BarPlot />
      <RadarPlot />
      <BubblePlot />
    </div>
  )
}

export default App
