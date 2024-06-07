import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
// import About from "./components/About";
import Services from "./components/Services";
// import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/FooterSection/Footer";
import Dieases from "./components/DieasesDetection/Dieases";
import Crop from "./components/CropPrediction/Crop";
import ABC from "./components/ABC"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar/>
      <Routes>
        {/* <Route path="/" element={<ABC/>}/> */}
        <Route path="/" element={<ABC component_name={"home"}/>}/>
        <Route path="/services" element={<ABC component_name={"services"}/>}/>
        <Route path="/contact" element={<ABC component_name={"contact"}/>}/>
        <Route path="/disease-detection" element={<Dieases/>} />
        <Route path="/crop-identification" element={<Crop/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
