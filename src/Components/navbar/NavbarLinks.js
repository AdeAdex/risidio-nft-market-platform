import React from "react";
import CartCheck from "../base/CartCheck";

const NavbarLinks = ({
  isMobileMenuOpen,
  isSmallScreen,
  Link,
  closeMobileMenu,
  totalQuantity,
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
        <CartCheck
          to="/wishlist"
          onClick={closeMobileMenu}
          className={`relative ${isSmallScreen ? "hidden" : "my-auto"}`}
          totalQuantity={totalQuantity}
        />
      </div>
    </>
  );
};

export default NavbarLinks;
