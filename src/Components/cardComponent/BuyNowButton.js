import React from "react";

const BuyNowButton = ({
  eachCollection,
  wishlist,
  dispatch,
  increaseQuantity,
  addToWishlist,
}) => {
  const handleBuyNow = (selectedItem) => {
    const isInWishlist = wishlist.some(
      (item) => item.title === selectedItem.title
    );

    if (isInWishlist) {
      dispatch(
        increaseQuantity(
          wishlist.findIndex((item) => item.title === selectedItem.title)
        )
      );
    } else {
      dispatch(addToWishlist({ ...selectedItem, quantity: 1 }));
    }
  };
  return (
    <>
      <button
        onClick={() => {
          handleBuyNow(eachCollection);
        }}
        data-ripple-light="true"
        type="button"
        className="select-none rounded-lg bg-blue-500 py-2 px-4 md:px-3 lg:px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-gray-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      >
        Buy Now
      </button>
    </>
  );
};

export default BuyNowButton;
