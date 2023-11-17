import React, { useEffect, useState } from "react";
import Cards from "../Components/Cards";
import { collection } from "../data/db";
import SortBy from "../Components/sortByComponents/SortBy";
import GoTop from "../Components/GoTop";

const LandingPage = () => {
  const [filteredCollection, setFilteredCollection] = useState([]);
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

        <GoTop />
      </div>
    </>
  );
};

export default LandingPage;
