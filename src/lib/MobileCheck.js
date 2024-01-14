import React, { useEffect, useState } from "react";


const MobileCheck = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
//   const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
        setIsSmallScreen(window.innerWidth <= 768);
//       setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { isSmallScreen/* , isTablet */ };
};

export default MobileCheck;
