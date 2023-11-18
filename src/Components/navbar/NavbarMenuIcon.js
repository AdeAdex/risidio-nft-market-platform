import React from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavbarMenuIcon = ({ isMobileMenuOpen, setMobileMenuOpen }) => {
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
      <div
        className={`menu-icon my-auto ${isMobileMenuOpen ? "open" : ""}`}
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen ? (
          <AiOutlineClose size={32} />
        ) : (
          <AiOutlineMenu size={32} />
        )}
      </div>
    </>
  );
};

export default NavbarMenuIcon;
