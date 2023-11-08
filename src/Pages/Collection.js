import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import { addToWishlist, removeFromWishlist } from "../redux/wishlistSlice";

const Collection = () => {
  const { collectionId } = useParams();
  const location = useLocation();
  const selectedCollection = location.state;
  const dispatch = useDispatch();

  if (!selectedCollection) {
    return <div>Collection not found</div>;
  }

  const handleAddToWishlist = () => {
    dispatch(addToWishlist(selectedCollection));
  };

  return (
    <>
      <div className="container mx-auto p-4 mt-32">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-1/2">
            <img
              src={selectedCollection.photo}
              alt={selectedCollection.title}
              className="w-full h-auto rounded-lg shadow-md"
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
            <div className="flex items-center justify-between">
              <button className="px-6 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition duration-300">
                Buy Now
              </button>
              <button
                onClick={handleAddToWishlist}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition duration-300"
              >
                Add to Wishlist
              </button>
            </div>
            <div>
                <button>Play</button>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-blue-900">
            Additional Details
          </h2>
          <ul className="list-disc ml-6 mt-2 text-gray-700">
            <li>Category: {selectedCollection.categories}</li>
            <li>Owner: John Doe</li>
            <li>Edition: Limited Edition</li>
            <li>Release Date: 2023-11-07</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Collection;
