import React, { useCallback, useEffect } from "react";
import PaginationButton from "./PaginationButton";

const Pagination = ({
  itemsPerPage,
  collection,
  setCurrentPage,
  currentPage,
  setCurrentPageItem,
  totalPage,
  handlePageChange,
  //   currentPageItem,
}) => {
  let startIndex = (currentPage - 1) * itemsPerPage;
  let endIndex = startIndex + itemsPerPage;
  if (endIndex > collection.length) {
    endIndex = collection.length;
  }

  // const displayPage = () => {
  //   const currentPageItem = collection.slice(startIndex, endIndex);
  //   setCurrentPageItem(currentPageItem);
  // };

  const displayPage = useCallback(() => {
    const currentPageItem = collection.slice(startIndex, endIndex);
    setCurrentPageItem(currentPageItem);
  }, [collection, startIndex, endIndex, setCurrentPageItem]);

  useEffect(() => {
    displayPage();
  }, [currentPage, collection, itemsPerPage, displayPage]);

  // const handlePageChange = (newPage) => {
  //   if (newPage >= 1 && newPage <= totalPage) {
  //     setCurrentPage(newPage);
  //   }
  // };

  return (
    <>
      <div className="flex justify-between md:mt-[20px] mb-[50px] px-6 md:px-[11%] lg:px-[6.5%]">
        <small className="flex border border-1 border-red-500 py-1 px-4 md:px-unset rounded-sm items-center justify-center">{`${
          startIndex + 1
        } - ${endIndex} of ${collection.length}`}</small>
        <PaginationButton
          currentPage={currentPage}
          totalPage={totalPage}
          handlePageChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default Pagination;
