import React from "react";

const NavbarLinks = ({
  isMobileMenuOpen,
  isSmallScreen,
  Link,
  closeMobileMenu,
  totalQuantity,
  BsCartCheck,
}) => {
  return (
    <>
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
          className={`relative ${isSmallScreen ? "hidden" : ""}`}
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
    </>
  );
};

export default NavbarLinks;
