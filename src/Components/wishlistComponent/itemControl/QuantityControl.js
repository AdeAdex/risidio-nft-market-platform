import React from "react";

const QuantityControl = ({ index, item, dispatch, increaseQuantity, decreaseQuantity }) => {
  const handleIncreaseQuantity = (index) => {
    dispatch(increaseQuantity(index));
  };

  const handleDecreaseQuantity = (index) => {
    dispatch(decreaseQuantity(index));
  };
  return (
    <>
      <div className="flex items-center">
        <button
          onClick={() => handleDecreaseQuantity(index)}
          className="bg-gray-300 px-3 py-1 rounded-sm"
        >
          -
        </button>
        {/* <span className="mx-2">{item.quantity}</span> */}
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
