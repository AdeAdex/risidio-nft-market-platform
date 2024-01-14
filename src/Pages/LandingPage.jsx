import React, { useEffect, useState } from "react";
import Cards from "../Components/cardComponent/Cards";
import { collection } from "../data/db";
import GoTop from "../Components/GoTop";
import Sort from "../Components/sortByComponents/Sort";
import Pagination from "../lib/Pagination";
import PaginationButton from "../lib/PaginationButton";

const LandingPage = ({ isSmallScreen }) => {
  // const [filteredCollection, setFilteredCollection] = useState([]);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = isSmallScreen ? 10 : 20;
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageItem, setCurrentPageItem] = useState([]);
  const totalPage = Math.ceil(collection.length / itemsPerPage);

  useEffect(() => {
    if (collection) {
      setLoading(false);
      // setFilteredCollection(currentPageItem);
      setCurrentPageItem(collection);
    }
  }, []);

  
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPage) {
      setCurrentPage(newPage);
    }
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
      <div className="mt-[85px] lg:mt-12">
        <Sort
          collection={collection}
          // setFilteredCollection={setFilteredCollection}
          // setCurrentPageItem={currentPageItem}
          currentPageItem={currentPageItem}
          setCurrentPageItem={setCurrentPageItem}
          isSmallScreen={isSmallScreen}
        />
        <Pagination
          collection={collection}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          setCurrentPageItem={setCurrentPageItem}
          // isMobile={isMobile}
          // isSmallScreen={isSmallScreen}
          itemsPerPage={itemsPerPage}
          currentPageItem={currentPageItem}
          totalPage={totalPage}
          handlePageChange={handlePageChange}
        />
        <section className="flex flex-wrap gap-4 w-full justify-center">
          <Cards collection={currentPageItem} />
        </section>
        <section className="flex justify-between md:justify-center py-[30px]  px-7 lg:px-32 relative">
          <span className="my-auto">{` Page ${currentPage} of ${totalPage} `}</span>
          <div className="md:absolute end-6 md:end-32">
          <PaginationButton
            currentPage={currentPage}
            totalPage={totalPage}
            handlePageChange={handlePageChange}
          />
          </div>
        </section>

        <GoTop />
      </div>
    </>
  );
};

export default LandingPage;
