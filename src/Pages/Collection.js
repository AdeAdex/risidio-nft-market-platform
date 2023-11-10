import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { addToWishlist, decreaseQuantity, increaseQuantity} from "../redux/wishlistSlice";

const Collection = () => {
  const location = useLocation();
  const selectedCollection = location.state;
  const [isPlaying, setIsPlaying] = useState(false);
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.items);

  if (!selectedCollection) {
    return <div>Collection not found</div>;
  }

  
  const handleBuyNow = (selectedItem) => {
    const isInWishlist = wishlist.some(item => item.title === selectedItem.title);

    if (isInWishlist) {
      dispatch(increaseQuantity(wishlist.findIndex(item => item.title === selectedItem.title)));
    } else {
      dispatch(addToWishlist({ ...selectedItem, quantity: 1 }));
    }
  };

  const handleIncreaseQuantity = () => {
    const itemIndex = wishlist.findIndex(item => item.title === selectedCollection.title);

    if (itemIndex !== -1) {
      dispatch(increaseQuantity(itemIndex));
    } else {
      dispatch(addToWishlist({ ...selectedCollection, quantity: 1 }));
    }
  };

  const handleDecreaseQuantity = () => {
    const itemIndex = wishlist.findIndex(item => item.title === selectedCollection.title);

    if (itemIndex !== -1) {
      dispatch(decreaseQuantity(itemIndex));
    } else {
    }
  };
 


  return (
    <>
      <div className="container mx-auto p-4 mt-20 lg:mt-32">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-1/2 h-96 ">
            <img
              src={selectedCollection.photo}
              alt={selectedCollection.title}
              className="w-full h-full rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-3xl font-semibold mb-4 text-blue-900">
              {selectedCollection.title}
            </h1>
            <p className="text-gray-600 mb-4">{selectedCollection.summaries}</p>
            <p className="text-xl text-blue-500 font-semibold mb-4">
              Price: {selectedCollection.price}
            </p>
            {wishlist.some(item => item.title === selectedCollection.title) ? (
              <div className="w-auto">
              <div className="w-auto mx-auto items-center">
                <button
                    onClick={() => handleDecreaseQuantity(selectedCollection)}
                    className="bg-gray-300 px-3 py-1 rounded-sm"
                  >
                    -
                  </button>
                  <span className="mx-2 quantity">
                    {wishlist.find(item => item.title === selectedCollection.title)?.quantity || 0}
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
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-blue-900">
            Additional Details
          </h2>
          <ul className="list-disc ml-6 mt-2 text-gray-700">
            <li>Category: {selectedCollection.categories}</li>
            <li>Owner: {selectedCollection.owner}</li>
            <li>Edition: Limited Edition</li>
            <li>Release Date: 2023-11-07</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Collection;
