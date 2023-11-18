import React from "react";
import { useSelector } from "react-redux";

const NavbarWishlistQuantityIcon = ({
  closeMobileMenu,
  isSmallScreen,
  Link,
  BsCartCheck,
}) => {
  const wishlist = useSelector((state) => state.wishlist.items);
  const totalQuantity = wishlist.reduce(
    (total, item) => total + item.quantity,
    0
  );
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
