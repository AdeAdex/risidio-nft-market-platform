import React from "react";

const NavbarLogo = ({ closeMobileMenu, isSmallScreen, Link }) => {
  return (
    <>
      <Link to="/" onClick={closeMobileMenu}>
        <div className="logo">
          <img
            src="/risidio_logo.svg"
            alt=""
            style={{ height: isSmallScreen ? "35px" : "50px" }}
          />
        </div>
      </Link>
    </>
  );
};

export default NavbarLogo;
