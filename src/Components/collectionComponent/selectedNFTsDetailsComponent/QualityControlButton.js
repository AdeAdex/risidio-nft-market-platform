import React from "react";

const QualityControlButton = ({
  dispatch,
  wishlist,
  selectedCollection,
  increaseQuantity,
  decreaseQuantity,
  addToWishlist,
}) => {
  const handleIncreaseQuantity = () => {
    const itemIndex = wishlist.findIndex(
      (item) => item.title === selectedCollection.title
    );

    if (itemIndex !== -1) {
      dispatch(increaseQuantity(itemIndex));
    } else {
      dispatch(addToWishlist({ ...selectedCollection, quantity: 1 }));
    }
  };

  const handleDecreaseQuantity = () => {
    const itemIndex = wishlist.findIndex(
      (item) => item.title === selectedCollection.title
    );

    if (itemIndex !== -1) {
      dispatch(decreaseQuantity(itemIndex));
    } else {
    }
  };
  return (
    <>
      <div className="w-auto">
        <div className="w-auto mx-auto items-center">
          <button
            onClick={() => handleDecreaseQuantity(selectedCollection)}
            className="bg-gray-300 px-3 py-1 rounded-sm"
          >
            -
          </button>
          <span className="mx-2 quantity">
            {wishlist.find((item) => item.title === selectedCollection.title)
              ?.quantity || 0}
          </span>
          <button
            onClick={() => handleIncreaseQuantity(selectedCollection)}
            className="bg-button-background text-white px-3 py-1 rounded-sm"
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default QualityControlButton;
