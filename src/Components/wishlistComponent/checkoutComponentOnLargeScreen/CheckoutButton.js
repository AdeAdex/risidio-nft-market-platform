import React from "react";

const CheckoutButton = ({ payForCollection }) => {
  return (
    <>
      <button
        onClick={payForCollection}
        className="w-full bg-blue-500 text-white rounded-md py-2 mt-4 hover:bg-blue-600"
      >
        Checkout
      </button>
    </>
  );
};

export default CheckoutButton;
