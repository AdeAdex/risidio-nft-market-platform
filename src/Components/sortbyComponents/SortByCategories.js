import React from "react";

const Categories = ({
  setSelectedCategory,
  setCurrentPageItem,
  collection,
  // currentPageItem,
  selectedCategory,
}) => {
  const uniqueCategories = [
    ...new Set(collection.map((item) => item.categories)),
  ];
  const filterCollection = (category) => {
    setSelectedCategory(category);

    if (category === "all") {
      setCurrentPageItem(collection);
    } else {
      const filtered = collection.filter(
        (item) => item.categories === category
      );
      setCurrentPageItem(filtered);
      console.log("filterd " + filtered);
    }
  };
  return (
    <>
      <div className="flex">
        <div className="my-auto sm:text-xs lg:text-base mr-2">Category:</div>
        <select
          value={selectedCategory}
          onChange={(e) => filterCollection(e.target.value)}
          className="rounded-md p-2 sm:text-xs lg:text-base bg-transparent border border-1 focus:bg-black"
        >
          {uniqueCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Categories;
