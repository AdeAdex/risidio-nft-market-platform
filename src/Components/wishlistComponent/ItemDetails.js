import React from "react";

const ItemDetails = ({ isSmallScreen, item }) => {
  return (
    <>
      <div>
        <h3
          className={`font-semibold text-blue-900 ${
            isSmallScreen ? "text-sm" : "text-lg"
          } `}
        >
          {item.title}
        </h3>
        <p className="text-gray-600">Price: ${item.price}</p>
      </div>
    </>
  );
};

export default ItemDetails;
