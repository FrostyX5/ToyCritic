import { useState } from 'react'
import './App.css'
import SearchBar from "./Components/SearchBar/SearchBar"
import TitleBar from "./Components/TitleBar/TitleBar"

function App() {
  //const [count, setCount] = useState(0)

  return (
      <div className="main">
        <TitleBar/>
        <SearchBar/>
      </div>
  )
}

export default App
