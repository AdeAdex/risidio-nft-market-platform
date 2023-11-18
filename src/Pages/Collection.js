import React from "react";
import { useLocation } from "react-router-dom";
import AdditionalDetails from "../Components/collectionComponent/AdditionalDetails";
import SelectedNFTsDetails from "../Components/collectionComponent/SelectedNFTsDetails";
import SelectedNFTsImage from "../Components/collectionComponent/SelectedNFTsImage";

const Collection = () => {
  const location = useLocation();
  const selectedCollection = location.state;

  if (!selectedCollection) {
    return <div>Collection not found</div>;
  }

  return (
    <>
      <div className="container mx-auto p-4 mt-20 lg:mt-32">
        <div className="flex flex-col md:flex-row gap-4">
          <SelectedNFTsImage selectedCollection={selectedCollection} />
          <SelectedNFTsDetails selectedCollection={selectedCollection} />
        </div>
        <AdditionalDetails selectedCollection={selectedCollection} />
      </div>
    </>
  );
};

export default Collection;
