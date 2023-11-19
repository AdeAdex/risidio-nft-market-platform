import React from "react";

const ItemImage = ({ item }) => {
  return (
    <>
      <img
        src={item.photo}
        alt={item.title}
        className="w-20 h-20 rounded-full mr-4"
      />
    </>
  );
};

export default ItemImage;
