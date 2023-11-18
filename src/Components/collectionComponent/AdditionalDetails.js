import React from "react";

const AdditionalDetails = ({ selectedCollection }) => {
  return (
    <>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-blue-900">
          Additional Details
        </h2>
        <ul className="list-disc ml-6 mt-2 text-gray-700">
          <li>Category: {selectedCollection.categories}</li>
          <li>Owner: {selectedCollection.owner}</li>
          <li>Edition: Limited Edition</li>
          <li>Release Date: 2023-11-10</li>
        </ul>
      </div>
    </>
  );
};

export default AdditionalDetails;
