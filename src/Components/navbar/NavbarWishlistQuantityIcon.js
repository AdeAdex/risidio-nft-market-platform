import React from "react";

const NavbarWishlistQuantityIcon = ({
  closeMobileMenu,
  isSmallScreen,
  totalQuantity,
  Link,
  BsCartCheck,
}) => {
  return (
    <>
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
    </>
  );
};

export default NavbarWishlistQuantityIcon;
