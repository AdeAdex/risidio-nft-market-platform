import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsCartCheck} from "react-icons/bs";
import { useSelector } from "react-redux";
import NavbarMenuIcon from "./NavbarMenuIcon";
import NavbarLogo from "./NavbarLogo";
import NavbarWishlistQuantityIcon from "./NavbarWishlistQuantityIcon";
import NavbarLinks from "./NavbarLinks";
import SearchBar from "./SearchBar";
import { collection } from "../../data/db";

const Navbar = ({ isSmallScreen }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [filteredCollection, setFilteredCollection] = useState(collection);

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

  const handleSearch = (filteredItems) => {
    setFilteredCollection(filteredItems);
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

              <SearchBar onSearch={handleSearch}/>

              <NavbarWishlistQuantityIcon
                closeMobileMenu={closeMobileMenu}
                isSmallScreen={isSmallScreen}
                Link={Link}
                BsCartCheck={BsCartCheck}
              />
            </div>

            <NavbarLinks
              isMobileMenuOpen={isMobileMenuOpen}
              isSmallScreen={isSmallScreen}
              Link={Link}
              closeMobileMenu={closeMobileMenu}
              totalQuantity={totalQuantity}
              BsCartCheck={BsCartCheck}
            />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
