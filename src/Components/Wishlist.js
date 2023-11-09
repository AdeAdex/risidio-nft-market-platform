import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineDelete } from "react-icons/ai";
import {
  addToWishlist,
  removeFromWishlist,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/wishlistSlice";

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.items);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handleRemoveItem = (index) => {
    dispatch(removeFromWishlist(index));
  };
  
  const handleIncreaseQuantity = (index) => {
    dispatch(increaseQuantity(index));
  };
  
  const handleDecreaseQuantity = (index) => {
    dispatch(decreaseQuantity(index));
  };
  

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




  if (wishlist.length === 0) {
    return (
      <div className="mt-32">
        <div
          className="flex"
          style={{ padding: "0 20px", height: "100vh", width: "100%" }}
        >
          <div className="container mx-auto mt-5 flex flex-col justify-center gap-3 w-full h-1/2 bg-white shadow empty-cart-container">
            <img
              src="/empty-cart.png"
              alt=""
              className="mx-auto w-24"
              style={{ width: "100px" }}
            />
            <div className="mx-auto font-bold text-center">
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
      <section className={`mt-16  px-0 lg:px-52 w-full ${isSmallScreen ? 'flex flex-col gap-2' : 'flex gap-8'}`}>
      {isSmallScreen ? (
          <div className={`w-full border rounded-lg p-4 shadow-md ${isSmallScreen ? '' : ''}`}>
          <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>
          <div className="flex items-center justify-between mt-4">
            <p className="text-gray-600">Subtotal:</p>
            <p className="text-blue-500 font-semibold">$50.00</p>
          </div>
          <button className={`w-full bg-blue-500 text-white  py-2 mt-4 hover:bg-blue-600 ${isSmallScreen ? 'fixed bottom-0 left-0 rounded-sm' : 'rounded-full'}`}>
            Checkout
          </button>
        </div>
        ) : null}
        <div className={`grid gap-4 shadow-lg p-5 ${isSmallScreen ? 'w-full' : 'w-8/12'}`}>
        <h1 className="font-bold text-lg">Cart: ({wishlist.length})</h1>
          {wishlist.map((item, index) => (
            <div
              key={index}
              className={`border p-4 rounded-lg shadow-md  justify-between ${isSmallScreen ? 'flex flex-col gap-4' : 'flex items-center'}`}
            >
              <div className="flex ">
                <img
                  src={item.photo}
                  alt={item.title}
                  className="w-20 h-20 rounded-full mr-4"
                />
                <div>
                  <h3 className={`font-semibold text-blue-900 ${isSmallScreen ? 'text-sm' : 'text-lg'} `}>
                    {item.title}
                  </h3>
                  <p className="text-gray-600">Price: {item.price}</p>
                </div>
              </div>
              <div className="flex items-center">
              <button onClick={() => handleRemoveItem(index)} className="bg-button-background text-white px-4 py-1 rounded-sm mr-2 flex gap-3">
                <AiOutlineDelete size={20} className="my-auto text-delete-button" />{" "}
                <span>Remove</span>
              </button>
              <div className="flex items-center">
                <button onClick={() => handleDecreaseQuantity(index)} className="bg-gray-300 px-3 py-2 rounded-sm">-</button>
                <span className="mx-2">{item.quantity}</span>
                <button onClick={() => handleIncreaseQuantity(index)} className="bg-button-background text-white px-3 py-2 rounded-sm">+</button>
              </div>
              </div>
            </div>
          ))}
        </div>
        {isSmallScreen ? null : (
          <div className="w-3/12 border rounded-lg p-4 shadow-md">
          <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>
          <div className="flex items-center justify-between mt-4">
            <p className="text-gray-600">Subtotal:</p>
            <p className="text-blue-500 font-semibold">$50.00</p>
          </div>
          <button className="w-full bg-blue-500 text-white rounded-full py-2 mt-4 hover:bg-blue-600">
            Checkout
          </button>
        </div>
        )}
        
      </section>
    </>
  );
};

export default Wishlist;