import React, { useEffect, useState } from "react";
import PaginationButton from "./PaginationButton";

const Pagination = ({
  itemsPerPage,
  collection,
  setCurrentPage,
  currentPage,
  setCurrentPageItem,
  totalPage,
  handlePageChange,
}) => {
  const [loading, setLoading] = useState(true);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(itemsPerPage);

  useEffect(() => {
    const newStartIndex = (currentPage - 1) * itemsPerPage;
    const newEndIndex = newStartIndex + itemsPerPage;

    setStartIndex(newStartIndex);
    setEndIndex(newEndIndex);

    const currentPageItem = collection.slice(newStartIndex, newEndIndex);
    setCurrentPageItem(currentPageItem);

    setLoading(false);
  }, [currentPage, collection, itemsPerPage, setCurrentPageItem]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
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
  );
};

export default Pagination;
