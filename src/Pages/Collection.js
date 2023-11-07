import React from "react";
import { useParams } from "react-router-dom";

const Collection = () => {
  const { collectionId } = useParams();

  return (
    <>
      <div className="mt-32">
        <h1>Product Details</h1>
        <p>Collection ID: {collectionId}</p>
      </div>
    </>
  );
};

export default Collection;
