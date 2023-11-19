import React from "react";
import ItemSummary from "./ItemSummary";
import ItemTotalPrice from "./ItemTotalPrice";
import CheckoutButton from "./CheckoutButton";
import PaymentMethodsBanner from "./PaymentMethodsBanner";

const CheckoutOnLargeScreen = ({ wishlist, subtotal, payForCollection }) => {
  return (
    <>
      <div className="w-3/12 border rounded-lg p-4 shadow-md h-auto mb-auto">
        <ItemSummary wishlist={wishlist} />
        <hr />
        <ItemTotalPrice subtotal={subtotal} />
        <CheckoutButton payForCollection={payForCollection} />
        <div className="w-full bg-white flex flex-col p-3 mt-5">
          <div className="w-full" id="orderSummaryOnLargeScreen"></div>
          <div
            className="flex justify-between accept-payment"
            style={{ marginTop: "-10px", color: "#cbcbcb" }}
          >
            <div className="my-auto text-sm">We accept:</div>
            <PaymentMethodsBanner
              banner="/mastercard.png"
              styles={{ height: "15px" }}
            />
            <PaymentMethodsBanner
              banner="/visa.png"
              styles={{ height: "15px" }}
            />
            <PaymentMethodsBanner
              banner="/verve.png"
              styles={{ height: "15px" }}
            />
            <PaymentMethodsBanner
              banner="/opay.png"
              styles={{ height: "15px" }}
            />
          </div>
          <div className="flex gap-2 mt-2">
            <PaymentMethodsBanner
              banner="/padlock.jpeg"
              styles={{ height: "30px" }}
            />
            <div className="my-auto text-sm text-gray-300">
              Transactions are 100% Safe and Secure
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutOnLargeScreen;
