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
          // Click is outside the search box, close the dropdown
          setShowDropdown(false);
        }
      };
    
      useEffect(() => {
        document.addEventListener("click", handleClickOutside);
    
        return () => {
          document.removeEventListener("click", handleClickOutside);
        };
      }, []);

  return (
    <div className="flex items-center mr-[20px] relative" ref={searchBoxRef}>
      {/* Search Box */}
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        onFocus={() => setShowDropdown(true)}
        // onBlur={() => setShowDropdown(false)}
        placeholder="Search..."
        className="border border-gray-300 rounded-md px-2 py-1 text-black"
      />
      <BsSearch className="ml-2 cursor-pointer" />

      {/* Dropdown */}
      {showDropdown && (
        <div className="absolute top-full left-0 bg-white border border-gray-300 rounded-md mt-1 p-2">
          {dropdownItems.map((item, index) => (
            <Link
              to={`/collection/${item.title}`}
              key={index}
              state={item}
              className="cursor-pointer hover:bg-gray-100 p-1 rounded text-black"
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
