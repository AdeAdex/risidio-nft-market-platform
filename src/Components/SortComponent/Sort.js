import React, { useState } from "react";
import SortMenu from "./SortMenu";
import Categories from "./SortByCategories";
import Prices from "./SortByPrices";
import Names from "./SortByNames";

const Sort = ({
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
        className={`w-full mb-6 md:mb-12 py-4 px-4 md:px-[11%] lg:px-[6.5%] flex gap-3 shadow-md bg-sort-background justify-between text-white font-bold z-10 overflow-x-scroll lg:z-[unset] lg:overflow-x-hidden`}
      >

        <SortMenu
          setCurrentPageItem={setCurrentPageItem}
          setSelectedCategory={setSelectedCategory}
          collection={collection}
          // currentPageItem={currentPageItem}
          selectedCategory={selectedCategory}
        />
        {/* <section
          className={`flex w-9/12 bg-green-500  ${
            isSmallScreen ? "flex-row w-full gap-2" : "gap-14 justify-end"
          }`}
        > */}
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
        {/* </section> */}
      </section>
    </>
  );
};

export default Sort;
