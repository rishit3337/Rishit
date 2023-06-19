import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navgationbar";
import { useRef, useState } from "react";

function App() {
  const open_navbar = () => {
    const width = window.innerWidth;
    let large = false;
    if (width >= 768) large = true;
    if (navbarRef.current) {
      if (!isOpen) {
        if (large) navbarRef.current.style.transform = `translateY(0%)`;
        else navbarRef.current.style.transform = `translateX(0%)`;
        setIsOpen(true);
      } else {
        if (large) navbarRef.current.style.transform = `translateY(-150%)`;
        else navbarRef.current.style.transform = `translateX(-101%)`;
        setIsOpen(false);
      }
    }
  };
  const navbarRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <BrowserRouter>
      <Navbar open_navbar={open_navbar} />
      <Routes>
        <Route path="/" element={<Home navbarRef={navbarRef} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
