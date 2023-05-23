import Navbar from "./NavBar.js"
import Services from "./pages/Services.js"
import Home from "./pages/Home.js"
import About from "./pages/About.js"
import { Route, Routes } from "react-router-dom"
import './Styles.css'

function App() {
  return (
    <>
      <div className="container">
        <Home />
      </div>
    </>
  )
}

export default App