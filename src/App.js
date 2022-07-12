import { Route, Routes } from "react-router-dom";
import './App.css';
import Skill from './pages/skill';
import Footer from './pages/footer';
import Home from "./pages/home";
import About from "./pages/aboutus";
import Contact from "./pages/contact";
//import NavbarFun from "./pages/navbar";
import Education from "./pages/education";
import Pro from "./pages/pro";
import Certificate from "./pages/certificate";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarFun from "./pages/navbar";
//import OutlinedTimeline from "./pages/education";


function App() {
  return (
    <>
    <div className="App">
      <NavbarFun/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/skills" element={<Skill/>} />
        <Route path="/education" element={<Education/>} />
        <Route path="/certificate" element={<Certificate/>} />
        <Route path="/projects" element={<Pro/>} />

      </Routes>
      <Footer/>
    </div>

    
    </>
  )
}

export default App;