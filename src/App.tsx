import React from 'react'
import './App.css'

import LinePlot from "./components/LinePlot"
import PiePlot from "./components/PiePlot"
import BarPlot from "./components/BarPlot"
import RadarPlot from "./components/RadarPlot"
import BubblePlot from "./components/BubblePlot"
import MaterialUI from "./components/MaterialUI"

const App = () => {
  return (
    <div className="App">
      {/*<LinePlot />*/}
      {/*<PiePlot />*/}
      {/*<BarPlot />*/}
      {/*<RadarPlot />*/}
      {/*<BubblePlot />*/}
      <MaterialUI />
    </div>
  )
}

export default App
