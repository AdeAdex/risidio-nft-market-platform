// import React, { useState } from "react";
// import Cards from "../Components/Cards";


// const LandingPage = () => {

//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const filterCollection = (collection) => {
//     // if (collection == 'music') {
//     //   alert('music')
//     // } else {
//     //   alert('others')
//     // }
//   }
//   return (
//     <>
//       <div className="mt-24 lg:mt-24">
//         <section className="mb-12 py-4 px-2 lg:px-32 flex justify-between">
//           <button onClick={() => {filterCollection('all')}} className=" bg-blue-500 text-white  py-2 px-4 mt-4 hover:bg-blue-600">All</button>
//           <button onClick={() => {filterCollection('music')}} className=" bg-blue-500 text-white  py-2 px-4 mt-4 hover:bg-blue-600">Music</button>
//           <button onClick={() => {filterCollection('art')}} className=" bg-blue-500 text-white  py-2 px-4 mt-4 hover:bg-blue-600">Art</button>
//           <button onClick={() => {filterCollection('gaming')}} className=" bg-blue-500 text-white  py-2 px-4 mt-4 hover:bg-blue-600">Gaming</button>
//         </section>
//         <section className="flex flex-wrap gap-4 w-full justify-center">
//           <Cards collection={filteredCollection}/>
//         </section>
//       </div>
//     </>
//   );
// };

// export default LandingPage;






import React, { useEffect, useState } from "react";
import Cards from "../Components/Cards";

const LandingPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredCollection, setFilteredCollection] = useState([]);

  const collection = [
    {
      title: "BoomLand - Shards",
      photo: "https://i.seadn.io/gcs/files/aa98dbd1ecf8973695f6096bae3753da.jpg?auto=format&dpr=1&h=500",
      price: "$50.00",
      summaries: "Step into the futuristic world of BoomLand. Explore its stunning shards and own a piece of this digital masterpiece.",
      categories: "Gaming",
      music: process.env.PUBLIC_URL + "",
      owner: "Risidio",
    },
    {
      title: "Pixelmon - Generation",
      photo: "https://i.seadn.io/gcs/files/15253f057fda61d8498f3e8264c2be23.png?auto=format&dpr=1&h=500",
      price: "$50.00",
      summaries: "Experience the enchanting Pixelmon Generation, where art and imagination collide in the most surreal way.",
      categories: "Art",
      music: process.env.PUBLIC_URL + "",
      owner: "Risidio",
    },
    {
      title: "Fool Again by Westlife",
      photo: "https://c-cl.cdn.smule.com/rs-s46/arr/73/a4/e03b4db6-15de-482a-9426-1dfee3c5c24f.jpg",
      price: "$50.00",
      summaries: "Feel the nostalgia and emotion with Westlife's classic 'Fool Again.' A digital masterpiece to touch your soul.",
      categories: "Music",
      music: process.env.PUBLIC_URL + "/music/Westlife_Fool again.mp3",
      owner: "Westlife",
    },
    {
      title: "Pi Oasis",
      photo: "https://i.seadn.io/s/raw/files/34507010881574b28ac7787ce829f2be.jpg?auto=format&dpr=1&h=500",
      price: "$50.00",
      summaries: "Pi Oasis - a digital representation of a world-famous scream. Own this iconic artwork in the digital realm.",
      categories: "Art",
      music: process.env.PUBLIC_URL + "",
      owner: "Risidio",
    },
    {
      title: "Metaverse HQ",
      photo: "https://i.seadn.io/gae/3RomDmo-bRVOLfSmn4XaCinDjJkGWuDoGf4NlblW1XenaYmHjo93OpdfzmqjgNIM4qf8e8wGOc91PZO3wGahP5niCfsGZGPEl0dcfw?auto=format&dpr=1&h=500",
      price: "$50.00",
      summaries: "Metaverse HQ - where Picasso's powerful statement comes to life in the form of NFT art. Dive into the metaverse.",
      categories: "Art",
      music: process.env.PUBLIC_URL + "",
      owner: "Risidio",
    },
    {
      title: "Rare Pepe",
      photo: "https://i.seadn.io/gcs/files/b36c8411036867ffedd8d85c54079785.png?auto=format&dpr=1&h=500",
      price: "$50.00",
      summaries: "Rare Pepe - Botticelli's Venus takes on a new form in the digital realm. A rare masterpiece for collectors.",
      categories: "Sportlight",
      music: process.env.PUBLIC_URL + "",
      owner: "Risidio",
    },
    {
      title: "Feel by Davido",
      photo: "https://i.ytimg.com/vi/irkGSP6SxDY/maxresdefault.jpg",
      price: "$50.00",
      summaries: "Listen to 'Feel' by Davido, the enigmatic smile in NFT format. Immerse yourself in this musical journey.",
      categories: "Music",
      music: process.env.PUBLIC_URL + "/music/Davido_-_Feel.mp3",
      owner: "Davido",
    },
    // Add more items in a similar format
  ];
  

  useEffect(() => {
    setFilteredCollection(collection);
  }, [])
  

  const filterCollection = (category) => {
    setSelectedCategory(category);
    console.log(category);

    if (category === "all") {
      setFilteredCollection(collection); 
    } else {
      const filtered = collection.filter((item) => item.categories === category);
      // console.log(item.categories);
      setFilteredCollection(filtered);
    }
  };

  return (
    <>
      <div className="mt-24 lg:mt-24">
  <section className="mb-12 py-4 px-2 lg:px-32 flex justify-between">
    <button
      onClick={() => filterCollection("all")}
      className={`bg-blue-500 text-white py-2 px-4 mt-4 hover-bg-blue-600 ${
        selectedCategory === "all" ? "bg-blue-600" : ""
      }`}
    >
      All
    </button>
    <button
      onClick={() => filterCollection("Music")}
      className={`bg-blue-500 text-white py-2 px-4 mt-4 hover-bg-blue-600 ${
        selectedCategory === "Music" ? "bg-blue-600" : ""
      }`}
    >
      Music
    </button>
    <button
      onClick={() => filterCollection("Art")}
      className={`bg-blue-500 text-white py-2 px-4 mt-4 hover-bg-blue-600 ${
        selectedCategory === "Art" ? "bg-blue-600" : ""
      }`}
    >
      Art
    </button>
    <button
      onClick={() => filterCollection("Gaming")}
      className={`bg-blue-500 text-white py-2 px-4 mt-4 hover-bg-blue-600 ${
        selectedCategory === "Gaming" ? "bg-blue-600" : ""
      }`}
    >
      Gaming
    </button>
  </section>
  <section className="flex flex-wrap gap-4 w-full justify-center">
    <Cards collection={filteredCollection} />
  </section>
</div>

    </>
  );
};

export default LandingPage;
