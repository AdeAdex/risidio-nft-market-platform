import React from "react";
import CheckoutButton from "./CheckoutButton";
import ItemTotalPrice from "./ItemTotalPrice";

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
        <ItemTotalPrice subtotal={subtotal} />
        <div
          className={`w-full px-3  ${
            isSmallScreen ? "fixed bottom-1 left-0" : ""
          }`}
        >
          <CheckoutButton payForCollection={payForCollection} />
        </div>
      </div>
    </>
  );
};

export default CheckoutOnSmallScreen;
