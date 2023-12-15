import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { collection } from "../../data/db";
import { Link } from "react-router-dom";


const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownItems, setDropdownItems] = useState([]);

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Perform the search logic here
    const lowerCaseQuery = query.toLowerCase();
    const filteredItems = collection.filter((item) =>
      item.title.toLowerCase().includes(lowerCaseQuery)
    );

    // Pass the filtered items to the parent component via the onSearch callback
    onSearch(filteredItems);

    // Update the dropdown items
    setDropdownItems(filteredItems);

    // Show or hide the dropdown based on search results and non-empty search query
    setShowDropdown(filteredItems.length > 0 && query.trim() !== "");
  };

//   const handleDropdownItemClick = (item) => {
//     console.log("Clicked on", item);
//   };

  return (
    <div className="flex items-center mr-[20px] relative">
      {/* Search Box */}
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        onFocus={() => setShowDropdown(true)}
        onBlur={() => setShowDropdown(false)}
        placeholder="Search..."
        className="border border-gray-300 rounded-md px-2 py-1 text-black"
      />
      <BsSearch className="ml-2 cursor-pointer" />

      {/* Dropdown */}
      {showDropdown && (
        <div className="absolute top-full left-0 bg-white border border-gray-300 rounded-md mt-1 p-2">
          {/* Render the dropdown items here */}
          {dropdownItems.map((item) => (
            <Link
              className="w-full"
              to={`/collection/${item.title}`}
              key={item.id}
              state={item}
            >
              <div
                key={item.id}
                // onClick={() => handleDropdownItemClick(item)}
                className="cursor-pointer hover:bg-gray-100 p-1 rounded text-black"
              >
                {item.title}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
