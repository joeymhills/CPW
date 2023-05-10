import Navbar from "./NavBar.js"
import Services from "./pages/Services.js"
import Home from "./pages/Home.js"
import About from "./pages/About.js"
import { Route, Routes } from "react-router-dom"
import './Styles.css'

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  )
}

export default App