import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomePage from "./Pages/Home/HomePage";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import MissionPage from "./Pages/Mission/MissionPage";
import ServicePage from "./Pages/Services/ServicePage";
import StrategyPage from "./Pages/Strategy/StrategyPage";
import OutsourcingPage from "./Pages/OutSourcing/OutsourcingPage";
import AboutPage from "./Pages/About/AboutPage";
import ContactPage from "./Pages/Contact/ContactPage";
import BreadCrumbs from "./Components/BreadCrumbs";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
import SideBarNav from "./Components/SideBarNav";
function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Navbar />
     
      <Routes>
        
        <Route path="/" element={<HomePage />} />
   
        <Route path="/mission" element={<MissionPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/our-strategy" element={<StrategyPage />} />
        <Route path="/outsourcing" element={<OutsourcingPage />} />
        <Route path="/aboutus" element={<AboutPage />} />
        <Route path="/contactus" element={<ContactPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
