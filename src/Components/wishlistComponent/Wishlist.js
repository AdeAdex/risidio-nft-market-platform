import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import EmptyItem from "./WishlistItemContainerComponent/itemControl/EmptyItem";
import CheckoutOnSmallScreen from "./checkoutComponentOnSmallScreen/CheckoutOnSmallScreen";
import CheckoutOnLargeScreen from "./checkoutComponentOnLargeScreen/CheckoutOnLargeScreen";
import WishlistItemContainer from "./WishlistItemContainerComponent/WishlistItemContainer";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromWishlist,
} from "../../redux/wishlistSlice";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist.items);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [subtotal, setSubtotal] = useState(0);
  const dispatch = useDispatch();

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

  const payWithPaystack = (email) => {
    const amountInKobo = Math.round(subtotal * 100);
    let handler = PaystackPop.setup({
      key: "pk_test_a70c6dbb491c1021f98ea8cf0b840542607c2537",
      email: email,
      amount: amountInKobo,
      ref: "Adex" + Math.floor(Math.random() * 10000 + 1),
      onClose: function () {
        let message = "You just cancel this transaction";
        Swal.fire({
          icon: "error",
          title: `Dear Customer with email ${email}`,
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
          title: `Dear Customer with email ${email}`,
          text: message,
          footer: "",
        }).then((result) => {
          if (result.isConfirmed) {
            // Do something after payment confirmation
          }
        });
      },
    });

    handler.openIframe();
  };

  const payForCollection = async () => {
    const { value: enteredEmail, isConfirmed } = await Swal.fire({
      title: "Enter your email",
      input: "text",
      inputPlaceholder: "Your email",
      showCancelButton: true,
      confirmButtonText: "Pay",
      cancelButtonText: "Cancel",
      inputValidator: (value) => {
        if (!value) {
          return "Email is required!";
        }
      },
    });

    if (isConfirmed) {
      payWithPaystack(enteredEmail);
    } else {
      console.log("Payment canceled");
    }
  };

  if (wishlist.length === 0) {
    return <EmptyItem />;
  }
  return (
    <>
      <section
        className={`mt-16  px-0 lg:px-52 w-full ${
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

        <WishlistItemContainer
          wishlist={wishlist}
          removeFromWishlist={removeFromWishlist}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          dispatch={dispatch}
        />
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
