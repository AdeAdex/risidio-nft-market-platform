import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 80) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  return (
    <>
      <div className="App">
        <nav>
          <div
            className={`navbar px-4 lg:px-20 ${
              scrolled ? "fixed" : "absolute"
            }`}
          >
            <div className="flex justify-between w-full py-3 ">
              <div className="logo">
                <img src="/risidio_logo.svg" alt="" style={{height: '50px'}} />
              </div>
              <div
                className={`menu-icon my-auto ${
                  isMobileMenuOpen ? "open" : ""
                }`}
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? (<AiOutlineClose size={32}/>) : (<AiOutlineMenu size={32}/>)}
              </div>
            </div>

            <div className={`nav-list ${isMobileMenuOpen ? "open" : ""}`}>
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
