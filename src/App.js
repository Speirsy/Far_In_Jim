import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Pricing from "./components/Pricing";
import NavBar from "./components/NavBar";
import FarInJim from "./components/FarInJim";
import ErrorPage from './components/ErrorPage';
import Choice from "./components/Choice";
import StyleSheet from "./components/StyleSheet";


const App = ()=> {
  const initialPricing = [
    { level: "Entry", cost: 0},
    { level: "Modest", cost: 10},
    { level: "Super", cost: 100}
  ];

  const [pricing, setPricing] = useState(initialPricing);
      


  return (
    <BrowserRouter>
    WTF? I can just write here?

      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing prices={pricing} />} />
        <Route path="/farinjim" element={<FarInJim />} />
        <Route path="/choices/:slug" element={<Choice />} />
        <Route path="/StyleSheet" element={<StyleSheet />} />
        <Route path="*" element={<ErrorPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
