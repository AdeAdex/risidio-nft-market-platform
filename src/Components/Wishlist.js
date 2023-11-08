import React from "react";
import { useSelector } from "react-redux";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist.items);

  if (wishlist.length === 0) {
    return (
      <div className="mt-32">
        <div class="flex"  style={{padding: '0 20px', height: '100vh', width: '100%'}}>
          <div class="container mx-auto mt-5 flex flex-col justify-center gap-3 w-full h-1/2 bg-white shadow empty-cart-container">
            <img
              src="/empty-cart.png"
              alt=""
              class="mx-auto w-24"
              style={{width: '100px'}}
            />
            <div class="mx-auto font-bold text-center">
              Your cart is empty{" "}
              <p> You have not added any item to your cart </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="mt-32">
        <h2>Your Wishlist</h2>
        <ul>
          {wishlist.map((item, index) => (
            <li key={index}>{item.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Wishlist;
