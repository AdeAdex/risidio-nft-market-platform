import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

const RemoveItemButton = ({ dispatch, removeFromWishlist, index }) => {
  const handleRemoveItem = (index) => {
    dispatch(removeFromWishlist(index));
  };
  return (
    <>
      <button
        onClick={() => handleRemoveItem(index)}
        className="bg-button-background text-white px-4 py-1 rounded-sm mr-2 flex gap-3"
      >
        <AiOutlineDelete size={20} className="my-auto text-delete-button" />{" "}
        <span>Remove</span>
      </button>
    </>
  );
};

export default RemoveItemButton;
