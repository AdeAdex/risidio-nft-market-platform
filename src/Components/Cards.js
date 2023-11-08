// import React from "react";

// const Cards = () => {
//   const titles = [
//     "BoomLand - Shards",
//     "Pixelmon - Generation ",
//     "Another Life by Violetta Zironi",
//     "Pi Oasis",
//     "Metaverse HQ",
//     "Rare Pepe",
//     "Fell by Davido",
//   ];

//   const summaries = [
//     "A masterpiece of art history, available as an NFT.",
//     "Own a piece of surrealism with this iconic artwork.",
//     "Van Gogh's masterpiece in the digital world.",
//     "A digital representation of the famous scream.",
//     "Picasso's powerful statement in NFT form.",
//     "Botticelli's Venus in the digital realm.",
//     "Capture the enigmatic smile in NFT format.",
//   ];

//   const photos = [
//     "https://i.seadn.io/gcs/files/aa98dbd1ecf8973695f6096bae3753da.jpg?auto=format&dpr=1&h=500",
//     "https://i.seadn.io/gcs/files/15253f057fda61d8498f3e8264c2be23.png?auto=format&dpr=1&h=500",
//     "https://i.seadn.io/gcs/files/5672ef507be9e77938bd467ce0eabe22.png?auto=format&dpr=1&h=500",
//     "https://i.seadn.io/s/raw/files/34507010881574b28ac7787ce829f2be.jpg?auto=format&dpr=1&h=500",
//     "https://i.seadn.io/gae/3RomDmo-bRVOLfSmn4XaCinDjJkGWuDoGf4NlblW1XenaYmHjo93OpdfzmqjgNIM4qf8e8wGOc91PZO3wGahP5niCfsGZGPEl0dcfw?auto=format&dpr=1&h=500",
//     "https://i.seadn.io/gcs/files/b36c8411036867ffedd8d85c54079785.png?auto=format&dpr=1&h=500",
//     "https://i.ytimg.com/vi/irkGSP6SxDY/maxresdefault.jpg",
//     "",
//   ];

//   const music = ["", "", "", "", "", "", ""];

//   const categories = [
//     "Gaming",
//     "Art",
//     "Music",
//     "Art",
//     "Sportlight",
//     "Art",
//     "Music",
//   ];

//   const collection = [];

//   for (let i = 0; i < 7; i++) {
//     // Randomly select a title, summary, and photo from the arrays
//     const randomTitle = titles[Math.floor(Math.random() * titles.length)];
//     const randomSummary =
//       summaries[Math.floor(Math.random() * summaries.length)];
//     const randomPhoto = photos[Math.floor(Math.random() * photos.length)];
//     const randomCategories =
//       categories[Math.floor(Math.random() * categories.length)];

//     collection.push({
//       title: randomTitle,
//       photo: randomPhoto,
//       price: `$${(Math.random() * (50 - 10) + 10).toFixed(2)}`,
//       summary: randomSummary,
//       categories: randomCategories,
//     });
//   }

//   return (
//     <>
//       {collection.map((eachCollection, index) => (
//         <div
//           key={index}
//           className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mb-4"
//         >
//           <img
//             src={eachCollection.photo}
//             className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600"
//           />
//           <div className="p-6">
//             <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
//               {eachCollection.title}
//             </h5>
//             <p>{eachCollection.categories}</p>
//             <p
//               className="block font-sans text-base font-light leading-relaxed text-inherit antialiased"
//               style={{ height: "50px" }}
//             >
//               {eachCollection.summary}
//             </p>
//           </div>
//           <div className="p-6 pt-0 flex justify-between">
//             <button
//               data-ripple-light="true"
//               type="button"
//               className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-gray-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//             >
//               Buy Now
//             </button>
//             <span className="my-auto font-bold text-2xl">
//               {eachCollection.price}
//             </span>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// };

// export default Cards;






import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const Cards = () => {
  const titles = [
    "BoomLand - Shards",
    "Pixelmon - Generation",
    "Another Life by Violetta Zironi",
    "Pi Oasis",
    "Metaverse HQ",
    "Rare Pepe",
    "Feel by Davido",
  ];

  const summaries = [
    "A masterpiece of art history, available as an NFT.",
    "Own a piece of surrealism with this iconic artwork.",
    "Van Gogh's masterpiece in the digital world.",
    "A digital representation of the famous scream.",
    "Picasso's powerful statement in NFT form.",
    "Botticelli's Venus in the digital realm.",
    "Capture the enigmatic smile in NFT format.",
  ];

  const photos = [
    "https://i.seadn.io/gcs/files/aa98dbd1ecf8973695f6096bae3753da.jpg?auto=format&dpr=1&h=500",
    "https://i.seadn.io/gcs/files/15253f057fda61d8498f3e8264c2be23.png?auto=format&dpr=1&h=500",
    "https://i.seadn.io/gcs/files/5672ef507be9e77938bd467ce0eabe22.png?auto=format&dpr=1&h=500",
    "https://i.seadn.io/s/raw/files/34507010881574b28ac7787ce829f2be.jpg?auto=format&dpr=1&h=500",
    "https://i.seadn.io/gae/3RomDmo-bRVOLfSmn4XaCinDjJkGWuDoGf4NlblW1XenaYmHjo93OpdfzmqjgNIM4qf8e8wGOc91PZO3wGahP5niCfsGZGPEl0dcfw?auto=format&dpr=1&h=500",
    "https://i.seadn.io/gcs/files/b36c8411036867ffedd8d85c54079785.png?auto=format&dpr=1&h=500",
    "https://i.ytimg.com/vi/irkGSP6SxDY/maxresdefault.jpg",
    "",
  ];

  const music = ["", "", "", "", "", "", ""];

  const categories = [
    "Gaming",
    "Art",
    "Music",
    "Art",
    "Sportlight",
    "Art",
    "Music",
  ];

//   const [collection, setCollection] = useState([]);
const collection = []

for (let i = 0; i < 20; i++) {
        collection.push({
          title: titles[i],
          photo: photos[i],
          price: `$${(Math.random() * (50 - 10) + 10).toFixed(2)}`,
          summaries: summaries[i],
          categories: categories[i],
        });
      }


  return (
    <>
      {collection.map((eachCollection, index) => (
        <Link to={`/collection/${eachCollection.title}`} key={index} state={eachCollection}>
        <div
          key={index}
          className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mb-4"
        >
          <img
            src={eachCollection.photo}
            className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600"
          />
          <div className="p-6">
            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {eachCollection.title}
            </h5>
            <p>{eachCollection.categories}</p>
            <p
              className="block font-sans text-base font-light leading-relaxed text-inherit antialiased"
              style={{ height: "50px" }}
            >
              {eachCollection.summary}
            </p>
          </div>
          <div className="p-6 pt-0 flex justify-between">
            <button
              data-ripple-light="true"
              type="button"
              className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-gray-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Buy Now
            </button>
            <span className="my-auto font-bold text-2xl">
              {eachCollection.price}
            </span>
          </div>
        </div>
        </Link>
      ))}
    </>
  );
};

export default Cards;

