import React from "react";

const ItemDetails = ({ isSmallScreen, item }) => {
  const totalPrice = item.price * item.quantity;
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
        <p className="text-gray-600">
          Price: ${item.price} x {item.quantity}{" "}
          {item.quantity > 1 ? "items" : "item"}
        </p>
        <p className="font-bold">
          Subtotal: <span className="text-[20px]">${totalPrice}</span>
        </p>
      </div>
    </>
  );
};

export default ItemDetails;
