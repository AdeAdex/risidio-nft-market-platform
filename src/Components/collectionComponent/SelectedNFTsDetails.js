import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWishlist,
  decreaseQuantity,
  increaseQuantity,
} from "../../redux/wishlistSlice";

const SelectedNFTsDetails = ({ selectedCollection }) => {
  const wishlist = useSelector((state) => state.wishlist.items);
  const [isPlaying, setIsPlaying] = useState(false);
  const dispatch = useDispatch();

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

  const handleIncreaseQuantity = () => {
    const itemIndex = wishlist.findIndex(
      (item) => item.title === selectedCollection.title
    );

    if (itemIndex !== -1) {
      dispatch(increaseQuantity(itemIndex));
    } else {
      dispatch(addToWishlist({ ...selectedCollection, quantity: 1 }));
    }
  };

  const handleDecreaseQuantity = () => {
    const itemIndex = wishlist.findIndex(
      (item) => item.title === selectedCollection.title
    );

    if (itemIndex !== -1) {
      dispatch(decreaseQuantity(itemIndex));
    } else {
    }
  };

  return (
    <>
      <div className="md:w-1/2">
        <h1 className="text-3xl font-semibold mb-4 text-blue-900">
          {selectedCollection.title}
        </h1>
        <small>Code: {selectedCollection.id}</small>
        <p className="text-gray-600 mb-4">{selectedCollection.summaries}</p>
        <p className="text-xl text-blue-500 font-semibold mb-4">
          Price: {selectedCollection.price}
        </p>
        {wishlist.some((item) => item.title === selectedCollection.title) ? (
          <div className="w-auto">
            <div className="w-auto mx-auto items-center">
              <button
                onClick={() => handleDecreaseQuantity(selectedCollection)}
                className="bg-gray-300 px-3 py-1 rounded-sm"
              >
                -
              </button>
              <span className="mx-2 quantity">
                {wishlist.find(
                  (item) => item.title === selectedCollection.title
                )?.quantity || 0}
              </span>
              <button
                onClick={() => handleIncreaseQuantity(selectedCollection)}
                className="bg-button-background text-white px-3 py-1 rounded-sm"
              >
                +
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => {
              handleBuyNow(selectedCollection);
            }}
            data-ripple-light="true"
            type="button"
            className="select-none rounded-lg bg-blue-500 py-2 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-gray-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            Buy Now
          </button>
        )}
        {!selectedCollection.music ? null : (
          <div className="mt-5">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-4 py-1 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
            >
              {isPlaying ? "Pause" : "Play"}
            </button>
            {isPlaying && (
              <audio
                controls
                autoPlay
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                <source src={selectedCollection.music} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default SelectedNFTsDetails;
