import React from "react";

const Names = ({
  setCurrentPageItem,
  setSelectedName,
  selectedName,
  collection,
}) => {
  const filterCollectionByName = (selectedName) => {
    setSelectedName(selectedName);
    const filtered = collection.filter((item) => item.title === selectedName);
    setCurrentPageItem(filtered);
  };
  return (
    <>
      <div className="flex">
        <div className="my-auto sm:text-xs lg:text-base mr-2">Name:</div>
        <select
          value={selectedName}
          onChange={(e) => filterCollectionByName(e.target.value)}
          className="rounded-md p-2 sm:text-xs lg:text-base bg-transparent border border-1 focus:bg-black"
        >
          {collection.map((eachTitle, index) => (
            <option key={index} value={eachTitle.title}>
              {eachTitle.title}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Names;
