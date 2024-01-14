import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const PaginationButton = ({ currentPage, totalPage, handlePageChange }) => {
  return (
    <div className="flex gap-2 justify-end text-white">
      <button
        className={`py-1 px-2 md:py-1 md:px-2 rounded-sm ${
          currentPage === 1 ? "bg-gray-700" : "bg-[#006BB3]"
        }`}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <FaChevronLeft />
      </button>

      <div className="py-1 px-3 md:py-1 md:px-3 bg-[#006BB3] rounded-sm">
        {currentPage}/{totalPage}
      </div>

      <button
        className={`py-1 px-2 md:py-1 md:px-2 rounded-sm ${
          currentPage === totalPage ? "bg-gray-700" : "bg-[#006BB3]"
        }`}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPage}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default PaginationButton;
