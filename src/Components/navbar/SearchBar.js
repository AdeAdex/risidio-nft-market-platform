import React, { useEffect, useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { collection } from "../../data/db";
import { Link } from "react-router-dom";

const SearchBar = ({ setMobileMenuOpen }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownItems, setDropdownItems] = useState([]);
  const searchBoxRef = useRef(null);

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Perform the search logic here
    const lowerCaseQuery = query.toLowerCase();
    const filteredItems = collection.filter((item) =>
      item.title.toLowerCase().includes(lowerCaseQuery)
    );

    // Pass the filtered items to the parent component via the onSearch callback
    //     onSearch(filteredItems);

    // Update the dropdown items
    setDropdownItems(filteredItems);

    // Show or hide the dropdown based on search results and non-empty search query
    setShowDropdown(filteredItems.length > 0 && query.trim() !== "");
  };

  const handleClickOutside = (event) => {
    if (searchBoxRef.current && !searchBoxRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClick = () => {
    setShowDropdown(false);
    setMobileMenuOpen(false);
  };

  return (
    <div
      className="w-full flex items-center relative z-[999]"
      ref={searchBoxRef}
    >
      {/* Search Box */}
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        onFocus={() => setShowDropdown(true)}
        // onBlur={() => setShowDropdown(false)}
        placeholder="Search..."
        className="w-[95%] border border-gray-300 rounded-s-sm px-2 py-1 text-black"
      />
      <div className="bg-blue-500 py-[6.5px] px-[8px] my-auto flex justify-center rounded-e-sm cursor-pointer">
        <BsSearch className="cursor-pointer" size={24} />
      </div>

      {/* Dropdown */}
      {showDropdown && (
        <div className="flex flex-col absolute w-[95%] h-[500px] top-full left-0 bg-white border border-gray-300 rounded-sm mt-0 p-2 overflow-y-auto">
          {dropdownItems.length === 0 ? (
            <div className="text-gray-500">
              Sorry, we couldn't find any results
            </div>
          ) : (
            dropdownItems.map((item, index) => (
              <Link
                to={`/collection/${item.title}`}
                key={index}
                state={item}
                className="flex gap-5 cursor-pointer hover:bg-gray-100 p-1 rounded-sm border-b border-gray-300 text-black w-[full] mb-3"
                onClick={handleClick}
              >
                <img
                  src={item.photo}
                  alt={item.title}
                  className="w-[30px] h-[30px]"
                />{" "}
                <span>{item.title}</span>
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
