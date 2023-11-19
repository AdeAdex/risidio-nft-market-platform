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
import EmptyItem from "./itemControl/EmptyItem";
import CheckoutOnSmallScreen from "./checkoutComponentOnSmallScreen/CheckoutOnSmallScreen";
import ItemImage from "./ItemImage";
import ItemDetails from "./ItemDetails";
import CheckoutOnLargeScreen from "./checkoutComponentOnLargeScreen/CheckoutOnLargeScreen";

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
                  key={index}
                  item={item}
                  dispatch={dispatch}
                  increaseQuantity={increaseQuantity}
                  decreaseQuantity={decreaseQuantity}
                  wishlist={wishlist}
                  index={index}
                />
              </div>
            </div>
          ))}
        </div>
        {isSmallScreen ? null : (
          <CheckoutOnLargeScreen
            wishlist={wishlist}
            subtotal={subtotal}
            payForCollection={payForCollection}
          />
        )}
      </section>
    </>
  );
};

export default Wishlist;
