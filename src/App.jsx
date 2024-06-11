import { BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Portfolio from "./components/Portfolio"
import Cv from "./components/Cv"
import About from "./components/About"
import Home from "./components/Home"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"

function App() {
 

  return (
    <>
     <div>
      <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/portfolio" element={<Portfolio/>}></Route>
      <Route path="/cv" element={<Cv/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
    </Routes>
    </Router>
    </div>

    </>

  )
}

export default App
