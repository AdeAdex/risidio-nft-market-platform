import React, { useState } from "react";

const Navbar = () => {
        const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
    <div className="App">
      <nav>
        <div className="navbar px-4 lg:px-20">
        <div className="flex justify-between w-full py-3 ">
        <div className="logo">
                <img src="/risidio_logo.svg" alt="" />
        </div>
          <div
            className={`menu-icon my-auto ${isMobileMenuOpen ? 'open' : ''}`}
            onClick={toggleMobileMenu}
          >
            ☰
          </div>
        </div>
          
          <div className={`nav-list ${isMobileMenuOpen ? 'open' : ''}`}>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Portfolio</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </nav>
    </div>
    </>
  );
};

export default Navbar;
