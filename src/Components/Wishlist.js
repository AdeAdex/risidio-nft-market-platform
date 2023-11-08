import React from "react";
import { useSelector } from "react-redux";
import { AiOutlineDelete } from "react-icons/ai";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist.items);

  if (wishlist.length === 0) {
    return (
      <div className="mt-32">
        <div
          class="flex"
          style={{ padding: "0 20px", height: "100vh", width: "100%" }}
        >
          <div class="container mx-auto mt-5 flex flex-col justify-center gap-3 w-full h-1/2 bg-white shadow empty-cart-container">
            <img
              src="/empty-cart.png"
              alt=""
              class="mx-auto w-24"
              style={{ width: "100px" }}
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
    <section className="mt-32 px-52 flex w-full gap-8 ">
    <div className="grid gap-4 w-8/12">
      {wishlist.map((item, index) => (
        <div
          key={index}
          className="border p-4 rounded-lg shadow-md flex items-center justify-between"
        >
          <div className="flex items-center">
            <img
              src={item.photo}
              alt={item.title}
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold text-blue-900">{item.title}</h3>
              <p className="text-gray-600">Price: {item.price}</p>
            </div>
          </div>
          <div className="flex items-center">
            <button
              className="bg-blue-500 text-white px-4 py-1 rounded-sm mr-2 flex gap-3"
            >
              <AiOutlineDelete size={20} className="my-auto text-red-500"/> <span>Remove</span>
            </button>
            <div className="flex items-center">
              <button className="bg-gray-300 px-3 py-2 rounded-full">
                -
              </button>
              <span className="mx-2">{item.quantity}</span>
              <button className="bg-blue-500 text-white px-3 py-2 rounded-full">
                +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="w-3/12">checkout</div>
    </section>
      
    </>
  );
};

export default Wishlist;
