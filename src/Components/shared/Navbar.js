import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import NavbarMenuIcon from "../navbar/NavbarMenuIcon";
import NavbarLogo from "../navbar/NavbarLogo";
import NavbarWishlistQuantityIcon from "../navbar/NavbarWishlistQuantityIcon";
import NavbarLinks from "../navbar/NavbarLinks";
import SearchBar from "../navbar/SearchBar";

const Navbar = ({ isSmallScreen }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // const [filteredCollection, setFilteredCollection] = useState(collection);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

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

  // const handleSearch = (filteredItems) => {
  //   setFilteredCollection(filteredItems);
  // };

  return (
    <>
      <div className="App">
        <nav>
          <div
            className={`navbar md:flex flex-col px-4 lg:px-20 pb-[10px] md:pb-[unset] ${
              scrolled ? "fixed" : "absolute"
            }`}
          >
            <div className="flex justify-between w-full py-3">
              <div className="flex">
                <NavbarMenuIcon
                  setMobileMenuOpen={setMobileMenuOpen}
                  isMobileMenuOpen={isMobileMenuOpen}
                />
                <NavbarLogo
                  closeMobileMenu={closeMobileMenu}
                  isSmallScreen={isSmallScreen}
                  Link={Link}
                />
              </div>
              <div className="hidden md:inline-flex w-[40%]">
                <SearchBar setMobileMenuOpen={setMobileMenuOpen} />
              </div>

              <NavbarWishlistQuantityIcon
                closeMobileMenu={closeMobileMenu}
                isSmallScreen={isSmallScreen}
              />
              <NavbarLinks
                isMobileMenuOpen={isMobileMenuOpen}
                isSmallScreen={isSmallScreen}
                Link={Link}
                closeMobileMenu={closeMobileMenu}
                totalQuantity={totalQuantity}
              />
            </div>
            <div className="md:hidden w-[100%]">
              <SearchBar setMobileMenuOpen={setMobileMenuOpen} />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
