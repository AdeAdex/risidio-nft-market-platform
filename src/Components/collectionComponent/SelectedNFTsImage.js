import React from "react";

const SelectedNFTsImage = ({ selectedCollection }) => {
  return (
    <>
      <div className="md:w-1/2 h-96 ">
        <img
          src={selectedCollection.photo}
          alt={selectedCollection.title}
          className="w-full h-full rounded-lg shadow-md"
        />
      </div>
    </>
  );
};

export default SelectedNFTsImage;
