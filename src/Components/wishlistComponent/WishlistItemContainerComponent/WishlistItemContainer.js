import React from "react";
// import { useDispatch} from 'react-redux';
import { Link } from "react-router-dom";
import ItemImage from "./ItemImage";
import ItemDetails from "./ItemDetails";
import RemoveItemButton from "./itemControl/RemoveItemButton";
import QuantityControl from "./itemControl/QuantityControl";

const WishlistItemContainer = ({
  isSmallScreen,
  wishlist,
  removeFromWishlist,
  increaseQuantity,
  decreaseQuantity,
  dispatch,
}) => {
  return (
    <>
      <div
        className={`flex flex-col gap-4 shadow-lg p-5 ${
          isSmallScreen ? "w-12" : "md:w-8/12"
        }`}
      >
        <h1 className="font-bold text-lg">Cart: ({wishlist.length})</h1>
        {wishlist.map((item, index) => (
          <div
            key={index}
            className="border p-4 rounded-lg shadow-md  justify-between flex flex-col gap-4 md:flex-row items-center md:h-32"
          >
            <Link
              className="w-full"
              to={`/collection/${item.title}`}
              key={index}
              state={item}
            >
              <div className="flex ">
                <ItemImage item={item} />
                <ItemDetails item={item} isSmallScreen={isSmallScreen} />
              </div>
            </Link>
            <div className="flex items-center">
              <RemoveItemButton
                removeFromWishlist={removeFromWishlist}
                dispatch={dispatch}
                index={index}
              />
              <QuantityControl
                key={index}
                item={item}
                dispatch={dispatch}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                wishlist={wishlist}
                index={index}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WishlistItemContainer;
