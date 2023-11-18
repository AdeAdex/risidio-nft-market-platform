import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWishlist,
  decreaseQuantity,
  increaseQuantity,
} from "../../../redux/wishlistSlice";
import PlayMusicButton from "./PlayMusicButton";
import BuyNowButton from "./BuyNowButton";
import QualityControlButton from "./QualityControlButton";
import Description from "./Description";

const SelectedNFTsDetails = ({ selectedCollection }) => {
  const wishlist = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();

  return (
    <>
      <div className="md:w-1/2">
        <Description selectedCollection={selectedCollection} />
        {wishlist.some((item) => item.title === selectedCollection.title) ? (
          <QualityControlButton
            dispatch={dispatch}
            wishlist={wishlist}
            selectedCollection={selectedCollection}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            addToWishlist={addToWishlist}
          />
        ) : (
          <BuyNowButton
            wishlist={wishlist}
            increaseQuantity={increaseQuantity}
            dispatch={dispatch}
            addToWishlist={addToWishlist}
            selectedCollection={selectedCollection}
          />
        )}
        {!selectedCollection.music ? null : (
          <PlayMusicButton selectedCollection={selectedCollection} />
        )}
      </div>
    </>
  );
};

export default SelectedNFTsDetails;
