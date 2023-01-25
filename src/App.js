import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import FarInJim from "./components/farinjim/FarInJim";
import FIJVideos from "./components/farinjim/FIJVideos";
import FIJAudio from "./components/farinjim/FIJAudio";
import ErrorPage from './components/ErrorPage';
import Choice from "./components/Choice";
import StyleSheet from "./components/StyleSheet";
import $5000Songs from "./components/Songs5000/$5000Songs";
import JohnPaulSpeirs from "./components/JPS/JPS";
import JPSVids from "./components/JPS/JPSVideos";
import JPSBlog from "./components/JPS/JPSBlog";
import JPSDiscog from "./components/JPS/JPSDiscog";

const App = ()=> {

  return (

    // I need to go over what going on here with the StyleSheet

    <div className="App">
      <StyleSheet primary={true} />
    
    <BrowserRouter>

      {/* <NavBar /> */}
      {/* comment out line above to remove Navbar from home page */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/$5000songs" element={<$5000Songs />} />
        <Route path="/about" element={<About />} />
        <Route path="/farinjim" element={<FarInJim />} />
        <Route path="/farinjim/videos" element={<FIJVideos />} />
        <Route path="/farinjim/audio" element={<FIJAudio />} />
        <Route path="/choices/:slug" element={<Choice />} />
        <Route path="/StyleSheet" element={<StyleSheet />} />
        <Route path="/johnpaulspeirs" element={<JohnPaulSpeirs />} />
        <Route path="/johnpaulspeirs/JPSvids" element={<JPSVids />} />
        <Route path="/johnpaulspeirs/JPSBlog" element={<JPSBlog />} />
        <Route path="/johnpaulspeirs/JPSDiscog" element={<JPSDiscog />} />
        <Route path="*" element={<ErrorPage />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
