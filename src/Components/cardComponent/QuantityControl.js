import React from "react";

const QuantityControl = ({
  dispatch,
  collection,
  wishlist,
  index,
  addToWishlist,
  decreaseQuantity,
  eachCollection,
  increaseQuantity,
}) => {
  const handleIncreaseQuantity = (index) => {
    const itemIndex = wishlist.findIndex(
      (item) => item.title === collection[index].title
    );

    if (itemIndex !== -1) {
      dispatch(increaseQuantity(itemIndex));
    } else {
      dispatch(addToWishlist({ ...collection[index], quantity: 1 }));
    }
  };

  const handleDecreaseQuantity = (index) => {
    const itemIndex = wishlist.findIndex(
      (item) => item.title === collection[index].title
    );

    if (itemIndex !== -1) {
      dispatch(decreaseQuantity(itemIndex));
    } else {
    }
  };
  return (
    <>
      <div className="flex items-center border border-1 border-border-color">
        <button
          onClick={() => handleDecreaseQuantity(index)}
          className="bg-gray-300 px-3 py-1 rounded-sm"
        >
          -
        </button>
        <span className="mx-2 quantity">
          {wishlist.find((item) => item.title === eachCollection.title)
            ?.quantity || 0}
        </span>
        <button
          onClick={() => handleIncreaseQuantity(index)}
          className="bg-button-background text-white px-3 py-1 rounded-sm"
        >
          +
        </button>
      </div>
    </>
  );
};

export default QuantityControl;
