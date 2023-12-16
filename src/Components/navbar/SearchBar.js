import React, { useEffect, useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { collection } from "../../data/db";
import { Link } from "react-router-dom";

const SearchBar = () => {
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
  };

  return (
    <div
      className="w-full flex items-center relative"
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
        className="w-[95%] border border-gray-300 rounded-sm px-2 py-1 text-black"
      />
      <BsSearch className="ml-2 cursor-pointer" />

      {/* Dropdown */}
      {showDropdown && (
        <div className="flex flex-col absolute w-[95%] top-full left-0 bg-white border border-gray-300 rounded-md mt-1 p-2 overflow-y-auto">
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
                className="cursor-pointer hover:bg-gray-100 p-1 rounded-sm border-b border-gray-300 text-black w-[full] mb-3"
                onClick={handleClick}
              >
                {item.title}
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
