import "./App.css";
import React, { useEffect, useState } from "react";
import LandingPage from "./Pages/LandingPage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Collection from "./Pages/Collection";
import Wishlist from "./Components/wishlistComponent/Wishlist";
import Navbar from "./Components/shared/Navbar";
import Footer from "./Components/shared/Footer";


function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <Router>
        <Navbar isSmallScreen={isSmallScreen}/>
        <Routes>
          <Route path="/" element={<LandingPage isSmallScreen={isSmallScreen}/>} />
          <Route path="/collection/:collectionId" element={<Collection />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
