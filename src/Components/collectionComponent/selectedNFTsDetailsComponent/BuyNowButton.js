import React from "react";

const BuyNowButton = ({
  wishlist,
  dispatch,
  increaseQuantity,
  addToWishlist,
  selectedCollection,
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
          handleBuyNow(selectedCollection);
        }}
        data-ripple-light="true"
        type="button"
        className="select-none rounded-lg bg-blue-500 py-2 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-gray-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      >
        Buy Now
      </button>
    </>
  );
};

export default BuyNowButton;
