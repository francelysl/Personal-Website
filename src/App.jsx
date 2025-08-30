import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Cursor from "./components/Cursor";
import FocusFrame from "./components/FocusFrame";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Cursor /> 
      <FocusFrame/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
