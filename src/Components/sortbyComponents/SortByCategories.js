import React from "react";

const Categories = ({
  setSelectedCategory,
  setFilteredCollection,
  collection,
  selectedCategory,
}) => {
  const filterCollection = (category) => {
    setSelectedCategory(category);

    if (category === "all") {
      setFilteredCollection(collection);
    } else {
      const filtered = collection.filter(
        (item) => item.categories === category
      );
      setFilteredCollection(filtered);
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
          <option value="all">All</option>
          <option value="Music">Music</option>
          <option value="Art">Art</option>
          <option value="Gaming">Gaming</option>
          <option value="SportLight">SportLight</option>
          <option value="Abstract">Abstract</option>
          <option value="Mystic">Mystic</option>
          <option value="Colorful">Colorful</option>
          <option value="Adventure">Adventure</option>
          <option value="Heavenly">Heavenly</option>
          <option value="Sculpture">Sculpture</option>
          <option value="Quantum">Quantum</option>
          <option value="Futuristic">Futuristic</option>
          <option value="Cosmic">Cosmic</option>
        </select>
      </div>
    </>
  );
};

export default Categories;
