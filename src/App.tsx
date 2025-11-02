import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar';
import Home from './pages/home/Home';
import ProgrammingProjects from './pages/Programming';
import CreativeProjects from './pages/Creative';
import Certificates from './pages/Certificates';
import ScrollToTop from './component/ScrollToTop';
import Popup from './component/Popup';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';


function App() {
  const [showPopup, setShowPopup] = useState(true);
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait">
        {showPopup && (
          <Popup
            key="welcome-popup" 
            message="I'm currently working on making my portfolio even better! I'm focusing on making it faster and more interactive so you can enjoy exploring it in the future. :D"
            onClose={() => setShowPopup(false)}
          />
        )}
      </AnimatePresence>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programming" element={<ProgrammingProjects />} />
        <Route path="/creative" element={<CreativeProjects />} />
        <Route path="/certificate-credentials" element={<Certificates />} />
      </Routes>
  </BrowserRouter>
  )
}

export default App
