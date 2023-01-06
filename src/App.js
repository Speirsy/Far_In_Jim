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
import $5000Songs from "./components/$5000Songs";
import Videos from "./components/Videos";


const App = ()=> {

  //  Right. This pricing business was inherited from a previos codeclan template and is irrelevant. 
  // I've tried taking it out but the whole thing breaks. So I've left it in for now. 
  const initialPricing = [
    { level: "Entry", cost: 0},
    { level: "Modest", cost: 10},
    { level: "Super", cost: 100}
  ];

  const [pricing, setPricing] = useState(initialPricing);
      


  return (

    <div className="App">
      <StyleSheet primary={true} />
    
    <BrowserRouter>

This Text from App.js under BrowserRouter

      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/$5000songs" element={<$5000Songs />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing prices={pricing} />} />
        <Route path="/farinjim" element={<FarInJim />} />
        <Route path="/choices/:slug" element={<Choice />} />
        <Route path="/StyleSheet" element={<StyleSheet />} />
        <Route path="*" element={<ErrorPage />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
