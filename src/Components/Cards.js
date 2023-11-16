import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  addToWishlist,
  decreaseQuantity,
  increaseQuantity,
} from "../redux/wishlistSlice";
import { useSelector } from "react-redux";

const Cards = ({ collection }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.items);

  const handleBuyNow = (selectedItem) => {
    const isInWishlist = wishlist.some(
      (item) => item.title === selectedItem.title
    );

    if (isInWishlist) {
      dispatch(
        increaseQuantity(
          wishlist.findIndex((item) => item.title === selectedItem.title)
        )
      );
    } else {
      dispatch(addToWishlist({ ...selectedItem, quantity: 1 }));
    }
  };

  const handleIncreaseQuantity = (index) => {
    const itemIndex = wishlist.findIndex(
      (item) => item.title === collection[index].title
    );

    if (itemIndex !== -1) {
      dispatch(increaseQuantity(itemIndex));
    } else {
      dispatch(addToWishlist({ ...collection[index], quantity: 1 }));
    }
  };

  const handleDecreaseQuantity = (index) => {
    const itemIndex = wishlist.findIndex(
      (item) => item.title === collection[index].title
    );

    if (itemIndex !== -1) {
      dispatch(decreaseQuantity(itemIndex));
    } else {
    }
  };

  return (
    <>
      {collection.map((eachCollection, index) => (
        <section
          key={index}
          className="w-full px-6 md:px-0 lg:px-0 md:w-1/3 lg:w-64 mx-auto md:mx-0 lg:mx-0 mb-12 lg:mb-8"
        >
          <div
            key={index}
            className="relative flex w-full flex-col  rounded-xl bg-clip-border text-gray-700 shadow-md"
          >
            <Link
              className="w-full"
              to={`/collection/${eachCollection.title}`}
              key={index}
              state={eachCollection}
            >
              <img
                src={eachCollection.photo}
                alt={eachCollection.title}
                className="relative mx-0 -mt-6 h-40 w-full overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600"
              />

              <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  {eachCollection.title}
                </h5>
                <p className="text-sm">{eachCollection.categories}</p>
                <p
                  className="block font-sans text-base font-light leading-relaxed text-inherit antialiased "
                  style={{ height: "" }}
                >
                <small> {eachCollection.summaries.slice(0, 50)}...</small>
                </p>
              </div>
            </Link>
            <div className="p-6 pt-0 mt-3 flex justify-between">
              {wishlist.some((item) => item.title === eachCollection.title) ? (
                <div className="flex items-center border border-1 border-border-color">
                  <button
                    onClick={() => handleDecreaseQuantity(index)}
                    className="bg-gray-300 px-3 py-1 rounded-sm"
                  >
                    -
                  </button>
                  <span className="mx-2 quantity">
                    {wishlist.find(
                      (item) => item.title === eachCollection.title
                    )?.quantity || 0}
                  </span>
                  <button
                    onClick={() => handleIncreaseQuantity(index)}
                    className="bg-button-background text-white px-3 py-1 rounded-sm"
                  >
                    +
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => {
                    handleBuyNow(eachCollection);
                  }}
                  data-ripple-light="true"
                  type="button"
                  className="select-none rounded-lg bg-blue-500 py-2 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-gray-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                  Buy Now
                </button>
              )}
              <span className="my-auto font-bold text-1xl">
                ${eachCollection.price}
              </span>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default Cards;
