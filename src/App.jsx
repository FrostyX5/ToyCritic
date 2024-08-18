import { useState } from 'react'
import './App.css'
import Navbar from "./Components/Navbar/Navbar"

function App() {
  //const [count, setCount] = useState(0)

  return (
      <div classNam="main">
        <div className="content">
          <h1>Toy Critic</h1>
        </div>
        <Navbar/>
      </div>
  )
}

export default App
