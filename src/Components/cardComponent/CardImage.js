import React from "react";

const CardImage = ({ eachCollection }) => {
  return (
    <>
      <img
        src={eachCollection.photo}
        alt={eachCollection.title}
        className="relative mx-0 -mt-6 h-40 w-full overflow-hidden rounded-xl"
        loading="lazy"
      />
    </>
  );
};

export default CardImage;
