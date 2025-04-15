import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar';
import Home from './pages/home/Home';
import ProgrammingProjects from './pages/Programming';
import CreativeProjects from './pages/Creative';
import Certificates from './pages/Certificates';
import ScrollToTop from './component/ScrollToTop';


function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
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
