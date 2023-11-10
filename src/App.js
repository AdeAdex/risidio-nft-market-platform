import "./App.css";
import React from "react";
import LandingPage from "./Pages/LandingPage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Collection from "./Pages/Collection";
import Wishlist from "./Components/Wishlist";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/collection/:collectionId" element={<Collection />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
