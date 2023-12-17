import React from "react";
import { Link } from "react-router-dom";
import { BsCartCheck } from "react-icons/bs";

const CartCheck = ({
  to,
  onClick,
  className,
  totalQuantity,
  isSmallScreen,
}) => {
  return (
    <>
      <Link to={to} onClick={onClick} className={className}>
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

export default CartCheck;
