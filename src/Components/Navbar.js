import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from "react-router-dom";
import { BsCartCheck } from 'react-icons/bs';
import { useSelector } from "react-redux";


const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const [scrolled, setScrolled] = useState(false);

  const wishlist = useSelector((state) => state.wishlist.items);

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
            <Link to="/">
              <div className="logo">
                <img src="/risidio_logo.svg" alt="" style={{height: '50px'}} />
              </div>
              </Link>
              <div
                className={`menu-icon my-auto ${
                  isMobileMenuOpen ? "open" : ""
                }`}
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? (<AiOutlineClose size={32}/>) : (<AiOutlineMenu size={32}/>)}
              </div>
            </div>

            <div className={`nav-list ${isMobileMenuOpen ? "open" : ""} ${isSmallScreen ? 'h-screen' : ''}`}>
              <a href="#">Account</a>
              <a href="#">Help</a>
              <a href="#">Contact</a>
              <Link to="/wishlist" className={`relative ${isSmallScreen ? 'flex justify-center' : ''}`}>
                <BsCartCheck className="" size={32}/>
                <small className={`absolute top-[-0.5rem] bg-orange-500 px-2 rounded-full ${isSmallScreen ? 'right-[10rem]' : 'right-[-0.4rem]'}`}>{wishlist.length}</small>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
