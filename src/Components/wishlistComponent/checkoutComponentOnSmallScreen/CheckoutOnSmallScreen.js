import React from "react";

const CheckoutOnSmallScreen = ({
  isSmallScreen,
  subtotal,
  payForCollection,
}) => {
  return (
    <>
      <div
        className={`w-full border rounded-lg p-4 shadow-md ${
          isSmallScreen ? "" : ""
        }`}
      >
        <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>
        <div className="flex items-center justify-between mt-4">
          <p className="text-gray-600">Subtotal:</p>
          <p className="text-blue-500 font-semibold">${subtotal.toFixed(2)}</p>
        </div>
        <div
          className={`w-full px-3  ${
            isSmallScreen ? "fixed bottom-1 left-0" : ""
          }`}
        >
          <button
            onClick={payForCollection}
            className={`w-full bg-blue-500 text-white  py-2 mt-4 hover:bg-blue-600 rounded-sm`}
          >
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default CheckoutOnSmallScreen;
