import React from 'react'

import Cards from "./features/covid/Cards/Cards";
import { Counter } from './features/counter/Counter'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Cards />
      </header>
    </div>
  )
}

export default App
