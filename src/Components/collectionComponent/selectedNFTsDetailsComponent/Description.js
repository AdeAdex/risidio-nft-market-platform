import React from "react";

const Description = ({ selectedCollection }) => {
  return (
    <>
      <h1 className="text-3xl font-semibold mb-4 text-blue-900">
        {selectedCollection.title}
      </h1>
      <small>Code: {selectedCollection.id}</small>
      <p className="text-gray-600 mb-4">{selectedCollection.summaries}</p>
      <p className="text-xl text-blue-500 font-semibold mb-4">
        Price: {selectedCollection.price}
      </p>
    </>
  );
};

export default Description;
