import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromWishlist,
  increaseQuantity,
  decreaseQuantity,
} from "../../redux/wishlistSlice";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import RemoveItemButton from "./itemControl/RemoveItemButton";
import QuantityControl from "./itemControl/QuantityControl";
import ItemSummary from "./checkoutComponentOnLargeScreen/ItemSummary";
import ItemTotalPrice from "./checkoutComponentOnLargeScreen/ItemTotalPrice";
import EmptyItem from "./itemControl/EmptyItem";
import CheckoutButton from "./checkoutComponentOnLargeScreen/CheckoutButton";
import PaymentMethodsBanner from "./checkoutComponentOnLargeScreen/PaymentMethodsBanner";
import CheckoutOnSmallScreen from "./CheckoutOnSmallScreen";
import ItemImage from "./ItemImage";
import ItemDetails from "./ItemDetails";

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.items);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    const newSubtotal = wishlist.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    setSubtotal(newSubtotal);
  }, [wishlist]);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* global PaystackPop */

  const payWithPaystack = () => {
    const amountInKobo = Math.round(subtotal * 100);
    let handler = PaystackPop.setup({
      key: "pk_test_a70c6dbb491c1021f98ea8cf0b840542607c2537",
      email: "adeoluamole@gmail.com",
      amount: amountInKobo,
      ref: "risidio" + Math.floor(Math.random() * 10000 + 1),
      onClose: function () {
        let message = "You just cancel this transaction";
        Swal.fire({
          icon: "error",
          title: "Dear Risidio customer",
          text: message,
          footer:
            "For further assistance, please call us at +2347033959586 or email us at adeoluamole@gmail.com",
        });
      },
      callback: function (response) {
        let message =
          "Payment completed! Your Reference Number is: " + response.reference;
        Swal.fire({
          icon: "success",
          title: "Thank You Risidio customer",
          text: message,
          footer: "",
        }).then((result) => {
          if (result.isConfirmed) {
          }
        });
      },
    });

    handler.openIframe();
  };

  const payForCollection = () => {
    payWithPaystack();
  };

  if (wishlist.length === 0) {
    return <EmptyItem />;
  }
  return (
    <>
      <section
        className={`mt-16  px-0 lg:px-52 w-full  ${
          isSmallScreen
            ? "flex flex-col gap-2"
            : "flex gap-8 h-screen overflow-y-auto mb-5"
        }`}
      >
        {isSmallScreen ? (
          <CheckoutOnSmallScreen
            isSmallScreen={isSmallScreen}
            subtotal={subtotal}
            payForCollection={payForCollection}
          />
        ) : null}

        <div
          className={`flex flex-col gap-4 shadow-lg p-5 ${
            isSmallScreen ? "w-full" : "w-8/12"
          }`}
        >
          <h1 className="font-bold text-lg">Cart: ({wishlist.length})</h1>
          {wishlist.map((item, index) => (
            <div
              key={index}
              className={`border p-4 rounded-lg shadow-md  justify-between ${
                isSmallScreen ? "flex flex-col gap-4" : "flex items-center h-32"
              }`}
            >
              <Link
                className="w-full"
                to={`/collection/${item.title}`}
                key={index}
                state={item}
              >
                <div className="flex ">
                  <ItemImage item={item} />
                  <ItemDetails item={item} isSmallScreen={isSmallScreen} />
                </div>
              </Link>
              <div className="flex items-center">
                <RemoveItemButton
                  removeFromWishlist={removeFromWishlist}
                  dispatch={dispatch}
                  index={index}
                />
                <QuantityControl
                  dispatch={dispatch}
                  increaseQuantity={increaseQuantity}
                  decreaseQuantity={decreaseQuantity}
                />
              </div>
            </div>
          ))}
        </div>
        {isSmallScreen ? null : (
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
        )}
      </section>
    </>
  );
};

export default Wishlist;
