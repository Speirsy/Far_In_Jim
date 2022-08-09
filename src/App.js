import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Pricing from "./components/Pricing";
import NavBar from "./components/NavBar";
import FarInJim from "./components/FarInJim";

const App = ()=> {
  const initialPricing = [
    { level: "Hobby", cost: 0},
    
    
  ]

  return (
    <BrowserRouter>
    WTF? I can just write here?

      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/farinjim" element={<FarInJim />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
