import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BsCartCheck } from "react-icons/bs";
import { useSelector } from "react-redux";

const Navbar = ({isSmallScreen}) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const [scrolled, setScrolled] = useState(false);

  const wishlist = useSelector((state) => state.wishlist.items);
  const totalQuantity = wishlist.reduce(
    (total, item) => total + item.quantity,
    0
  );


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
              <div className="flex ">
                <div
                  className={`menu-icon my-auto ${
                    isMobileMenuOpen ? "open" : ""
                  }`}
                  onClick={toggleMobileMenu}
                >
                  {isMobileMenuOpen ? (
                    <AiOutlineClose size={32} />
                  ) : (
                    <AiOutlineMenu size={32} />
                  )}
                </div>
                <Link to="/" onClick={closeMobileMenu}>
                  <div className="logo">
                    <img
                      src="/risidio_logo.svg"
                      alt=""
                      style={{ height: isSmallScreen ? "35px" : "50px" }}
                    />
                  </div>
                </Link>
              </div>

              <Link
                to="/wishlist"
                onClick={closeMobileMenu}
                className={`relative my-auto ${
                  isSmallScreen ? "flex justify-center right-[1rem]" : "hidden"
                }`}
              >
                <BsCartCheck className="" size={32} />
                <small
                  className={`absolute top-[-0.5rem] bg-orange-500 px-2 rounded-full ${
                    isSmallScreen ? "right-[-1rem]" : "right-[-0.4rem]"
                  }`}
                >
                  {totalQuantity}
                </small>
              </Link>
            </div>

            <div
              className={`nav-list ${isMobileMenuOpen ? "open" : ""} ${
                isSmallScreen ? "h-screen" : ""
              }`}
            >
              <Link
                className="mt-6 lg:unset md:my-auto"
                to="/"
                onClick={closeMobileMenu}
              >
                Account
              </Link>
              <Link
                className="lg:my-auto md:my-auto"
                to="/"
                onClick={closeMobileMenu}
              >
                Help
              </Link>
              <Link
                className="lg:my-auto md:my-auto"
                to="/"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
              <Link
                to="/wishlist"
                onClick={closeMobileMenu}
                className={`relative ${
                  isSmallScreen ? "hidden" : ""
                }`}
              >
                <BsCartCheck className="" size={32} />
                <small
                  className={`absolute top-[-0.5rem] bg-orange-500 px-2 rounded-full ${
                    isSmallScreen ? "right-[10rem]" : "right-[-0.4rem]"
                  }`}
                >
                  {totalQuantity}
                </small>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
