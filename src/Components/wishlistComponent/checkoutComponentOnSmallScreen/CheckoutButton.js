import React from "react";

const CheckoutButton = ({ payForCollection }) => {
  return (
    <>
      <button
        onClick={payForCollection}
        className={`w-full bg-blue-500 text-white  py-2 mt-4 hover:bg-blue-600 rounded-sm`}
      >
        Checkout
      </button>
    </>
  );
};

export default CheckoutButton;
