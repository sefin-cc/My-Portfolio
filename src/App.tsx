import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar';
import Home from './pages/home/Home';
import ProgrammingProjects from './pages/Programming';
import CreativeProjects from './pages/Creative';


function App() {

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/programming" element={<ProgrammingProjects />} />
      <Route path="/creative" element={<CreativeProjects />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
