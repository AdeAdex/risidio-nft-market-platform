import React from "react";

const CardDetails = ({ eachCollection }) => {
  return (
    <>
      <div className="p-6">
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased overflow-hidden md:h-[50px]">
          {eachCollection.title}
        </h5>
        <p className="text-sm">{eachCollection.categories}</p>
        <p
          className="block font-sans text-base font-light leading-relaxed text-inherit antialiased"
          style={{ height: "50px" }}
        >
          <small> {eachCollection.summaries.slice(0, 50)}...</small>
        </p>
      </div>
    </>
  );
};

export default CardDetails;
