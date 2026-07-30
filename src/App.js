import React from "react";
import './App.css';
import Navbar from './components/inc/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Features from './components/pages/Features';
import HowITWorks from './components/pages/HowITWorks';
import Benefits from './components/pages/Benefits';
import { BrowserRouter as Router, Routes,Route} from "react-router-dom";

function App() {
  return (
    <Router> 
      <div>
    <Navbar />
    <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/features" element={<Features />} />
  <Route path="/how-it-works" element={<HowITWorks />} />
  <Route path="/benefits" element={<Benefits />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
   </div>


    </Router>
  
  );
}

export default App;
