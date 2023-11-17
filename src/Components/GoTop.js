import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const GoTop = () => {
  const [showTopButton, setShowTopButton] = useState(false);

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
  return (
    <>
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
    </>
  );
};

export default GoTop;
