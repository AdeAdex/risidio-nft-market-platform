import React, { useEffect, useState } from "react";
import Cards from "../Components/Cards";
import { FaArrowUp } from "react-icons/fa";
import { collection } from "../data/db";
import SortBy from "../Components/sortbyComponents/SortBy";

const LandingPage = () => {
  const [filteredCollection, setFilteredCollection] = useState([]);
  const [showTopButton, setShowTopButton] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollY = window.scrollY;

    setShowTopButton(scrollY > 100);
  };

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
        <SortBy
          collection={collection}
          setFilteredCollection={setFilteredCollection}
          isSmallScreen={isSmallScreen}
        />
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
