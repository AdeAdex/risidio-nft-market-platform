import React from "react";

const ItemTotalPrice = ({subtotal}) => {
  return (
    <>
      <div className="flex items-center justify-between mt-12">
        <p className="text-gray-600">Subtotal:</p>
        <p className="text-blue-500 font-semibold">${subtotal.toFixed(2)}</p>
      </div>
    </>
  );
};

export default ItemTotalPrice;
