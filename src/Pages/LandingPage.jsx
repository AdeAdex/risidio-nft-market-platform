import React, { useEffect, useState } from "react";
import Cards from "../Components/Cards";
import { FaArrowUp } from "react-icons/fa";
import { collection } from "../data/db";

const LandingPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPriceRange, setSelectedPriceRange] = useState("all");
  const [selectedName, setSelectedName] = useState("all");
  const [filteredCollection, setFilteredCollection] = useState([]);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [showTopButton, setShowTopButton] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (collection) {
      setLoading(false);
      setFilteredCollection(collection);
    }
  }, []);

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

    setFilteredCollection(sortedCollection);
    setSelectedCategory(value);
  };

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

  const filterCollectionByPrice = (selectedPriceRange) => {
    setSelectedPriceRange(selectedPriceRange);

    const priceRanges = {
      "1-50": { min: 1, max: 50 },
      "51-100": { min: 51, max: 100 },
      "101-150": { min: 101, max: 150 },
      "151-200": { min: 151, max: 200 },
      "201+": { min: 201, max: Infinity },
    };

    const { min, max } = priceRanges[selectedPriceRange];

    const filtered = collection.filter(
      (item) => parseFloat(item.price) >= min && parseFloat(item.price) <= max
    );

    setFilteredCollection(filtered);
  };

  const filterCollectionByName = (selectedName) => {
    setSelectedName(selectedName);
    const filtered = collection.filter((item) => item.title === selectedName);
    setFilteredCollection(filtered);
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;

    setShowTopButton(scrollY > 100);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-full flex justify-center">
        <div className="my-auto">
          <div className="loading">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="mt-12 lg:mt-12">
        <section
          className={`mb-12 py-4 px-2 lg:px-32 flex gap-3 shadow-md bg-sort-background  text-white  font-bold ${
            isSmallScreen ? "flex-row z-10 overflow-y-scroll w-full" : ""
          }`}
        >
          <div className="flex  gap-3">
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

          <section
            className={`flex w-9/12  ${
              isSmallScreen ? "flex-row w-full gap-2" : "gap-14 justify-end"
            }`}
          >
            <div className="flex">
              <div className="my-auto sm:text-xs lg:text-base mr-2">
                Category:
              </div>
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
            <div className="flex">
              <div className="my-auto sm:text-xs lg:text-base mr-2">Price:</div>
              <select
                value={selectedPriceRange}
                onChange={(e) => filterCollectionByPrice(e.target.value)}
                className="rounded-md p-2 sm:text-xs lg:text-base bg-transparent border border-1 focus:bg-black"
              >
                <option value="1-50">$1 - $50</option>
                <option value="51-100">$51 - $100</option>
                <option value="101-150">$101 - $150</option>
                <option value="151-200">$151 - $200</option>
                <option value="201+">More than $200</option>
              </select>
            </div>
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
          </section>
        </section>
        <section className="flex flex-wrap gap-4 w-full justify-center">
          <Cards collection={filteredCollection} />
        </section>

        <div>
          {showTopButton && (
            <button
              onClick={scrollToTop}
              className="top-button fixed bg-blue-500 p-3 rounded-md"
              style={{ bottom: "40px", right: "50px" }}
            >
              <FaArrowUp className="text-white" />
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default LandingPage;
