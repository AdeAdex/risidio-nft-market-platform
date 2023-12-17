import React from "react";
import { useSelector } from "react-redux";
import CartCheck from "../base/CartCheck";

const NavbarWishlistQuantityIcon = ({ closeMobileMenu, isSmallScreen }) => {
  const wishlist = useSelector((state) => state.wishlist.items);
  const totalQuantity = wishlist.reduce(
    (total, item) => total + item.quantity,
    0
  );
  return (
    <>
      <CartCheck
        to="/wishlist"
        onClick={closeMobileMenu}
        className={`relative my-auto ${
          isSmallScreen ? "flex justify-center right-[1rem]" : "hidden"
        }`}
        totalQuantity={totalQuantity}
      />
    </>
  );
};

export default NavbarWishlistQuantityIcon;
