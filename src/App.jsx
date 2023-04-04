import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassCounter from './ClassCounter'
import FunctionCounter from './FunctionCounter'

function App() {

  return (
     <div>

      <ClassCounter />
      <hr></hr>
      <FunctionCounter />

    </div>
  )
}

export default App
