import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  addToWishlist,
  decreaseQuantity,
  increaseQuantity,
} from "../../redux/wishlistSlice";
import { useSelector } from "react-redux";
import CardImage from "./CardImage";
import CardDetails from "./CardDetails";
import BuyNowButton from "./BuyNowButton";
import QuantityControl from "./QuantityControl";

const Cards = ({ collection }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.items);

  return (
    <>
      {collection.map((eachCollection, index) => (
        <section
          key={index}
          className="w-full px-6 md:px-0 lg:px-0 md:w-1/4 lg:w-1/6 mx-auto md:mx-0 lg:mx-0 mb-12 lg:mb-8"
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
              <CardImage eachCollection={eachCollection} />
              <CardDetails eachCollection={eachCollection} />
            </Link>
            <div className="p-6 pt-0 mt-3 flex justify-between">
              {wishlist.some((item) => item.title === eachCollection.title) ? (
                <QuantityControl
                  dispatch={dispatch}
                  collection={collection}
                  wishlist={wishlist}
                  index={index}
                  addToWishlist={addToWishlist}
                  decreaseQuantity={decreaseQuantity}
                  eachCollection={eachCollection}
                  increaseQuantity={increaseQuantity}
                />
              ) : (
                <BuyNowButton
                  eachCollection={eachCollection}
                  wishlist={wishlist}
                  dispatch={dispatch}
                  increaseQuantity={increaseQuantity}
                  addToWishlist={addToWishlist}
                />
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
