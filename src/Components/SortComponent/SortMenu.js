import React from "react";

const SortMenu = ({
  setCurrentPageItem,
  setSelectedCategory,
  collection,
  selectedCategory,
}) => {
  const filterCollectionBySort = (value) => {
    let sortedCollection = [...collection];

    switch (value) {
      case "AZ":
        sortedCollection.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "ZA":
        sortedCollection.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "LowToHigh":
        sortedCollection.sort(
          (a, b) => parseFloat(a.price) - parseFloat(b.price)
        );
        break;
      case "HighToLow":
        sortedCollection.sort(
          (a, b) => parseFloat(b.price) - parseFloat(a.price)
        );
        break;
      default:
        break;
    }

    // setFilteredCollection(sortedCollection);
    setCurrentPageItem(sortedCollection);
    setSelectedCategory(value);
  };
  return (
    <>
      <div className="flex gap-3">
        <div className="my-auto sm:text-xs lg:text-base flex">
          <span className="mr-1">Sort </span> <span>by:</span>
        </div>
        <div className="flex">
          <select
            value={selectedCategory}
            onChange={(e) => filterCollectionBySort(e.target.value)}
            className="rounded-md p-2 sm:text-xs lg:text-base bg-transparent border border-1 focus:bg-black"
          >
            <option value="all">All</option>
            <option value="AZ">A - Z</option>
            <option value="ZA">Z - A</option>
            <option value="LowToHigh">Price: Low to High</option>
            <option value="HighToLow">Price: High to Low</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default SortMenu;
