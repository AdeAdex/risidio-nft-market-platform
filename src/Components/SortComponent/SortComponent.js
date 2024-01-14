import React, { useState } from "react";
import SortMenu from "./SortMenu";
import Categories from "./SortByCategories";
import Prices from "./SortByPrices";
import Names from "./SortByNames";


const SortComponent = ({
  collection,
  currentPageItem,
  setCurrentPageItem,
  isSmallScreen,
}) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPriceRange, setSelectedPriceRange] = useState("all");
  const [selectedName, setSelectedName] = useState("all");
  return (
    <>
      <section
        className={`mb-12 py-4 px-2 lg:px-32 flex gap-3 shadow-md bg-sort-background  text-white  font-bold ${
          isSmallScreen ? "flex-row z-10 overflow-x-scroll w-full" : ""
        }`}
      >
        <SortMenu
          setCurrentPageItem={setCurrentPageItem}
          setSelectedCategory={setSelectedCategory}
          collection={collection}
          // currentPageItem={currentPageItem}
          selectedCategory={selectedCategory}
        />

        <section
          className={`flex w-9/12  ${
            isSmallScreen ? "flex-row w-full gap-2" : "gap-14 justify-end"
          }`}
        >
          <Categories
            setCurrentPageItem={setCurrentPageItem}
            setSelectedCategory={setSelectedCategory}
            collection={collection}
            currentPageItem={currentPageItem}
            selectedCategory={selectedCategory}
          />
          <Prices
            setCurrentPageItem={setCurrentPageItem}
            setSelectedPriceRange={setSelectedPriceRange}
            collection={collection}
            selectedPriceRange={selectedPriceRange}
          />
          <Names
            setCurrentPageItem={setCurrentPageItem}
            setSelectedName={setSelectedName}
            selectedName={selectedName}
            collection={collection}
          />
        </section>
      </section>
    </>
  );
};

export default SortComponent;
