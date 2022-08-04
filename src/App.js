import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Pricing from "./components/Pricing";
import NavBar from "./components/NavBar";
import FarInJim from ".components/FarInJim";

const App = ()=> {

  return (
    <BrowserRouter>
      <Routes>
        <NavBar />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/farinjim" element={<FarInJim />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
