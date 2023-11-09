import React, { useEffect, useState } from "react";
import Cards from "../Components/Cards";

const LandingPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPriceRange, setSelectedPriceRange] = useState("all");
  const [selectedName, setSelectedName] = useState("all");
  const [filteredCollection, setFilteredCollection] = useState([]);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const collection = [
    {
      title: "BoomLand - Shards",
      photo:
        "https://i.seadn.io/gcs/files/aa98dbd1ecf8973695f6096bae3753da.jpg?auto=format&dpr=1&h=500",
      price: "75.00",
      summaries:
        "Step into the futuristic world of BoomLand. Explore its stunning shards and own a piece of this digital masterpiece.",
      categories: "Gaming",
      music: process.env.PUBLIC_URL + "",
      owner: "Risidio",
      quantity: 0,
    },
    {
      title: "Pixelmon - Generation",
      photo:
        "https://i.seadn.io/gcs/files/15253f057fda61d8498f3e8264c2be23.png?auto=format&dpr=1&h=500",
      price: "180.00",
      summaries:
        "Experience the enchanting Pixelmon Generation, where art and imagination collide in the most surreal way.",
      categories: "Art",
      music: process.env.PUBLIC_URL + "",
      owner: "Risidio",
      quantity: 0,
    },
    {
      title: "Fool Again by Westlife",
      photo:
        "https://c-cl.cdn.smule.com/rs-s46/arr/73/a4/e03b4db6-15de-482a-9426-1dfee3c5c24f.jpg",
      price: "150.00",
      summaries:
        "Feel the nostalgia and emotion with Westlife's classic 'Fool Again.' A digital masterpiece to touch your soul.",
      categories: "Music",
      music: process.env.PUBLIC_URL + "/music/Westlife_Fool again.mp3",
      owner: "Westlife",
      quantity: 0,
    },
    {
      title: "Pi Oasis",
      photo:
        "https://i.seadn.io/s/raw/files/34507010881574b28ac7787ce829f2be.jpg?auto=format&dpr=1&h=500",
      price: "20.00",
      summaries:
        "Pi Oasis - a digital representation of a world-famous scream. Own this iconic artwork in the digital realm.",
      categories: "Art",
      music: process.env.PUBLIC_URL + "",
      owner: "Risidio",
      quantity: 0,
    },
    {
      title: "Metaverse HQ",
      photo:
        "https://i.seadn.io/gae/3RomDmo-bRVOLfSmn4XaCinDjJkGWuDoGf4NlblW1XenaYmHjo93OpdfzmqjgNIM4qf8e8wGOc91PZO3wGahP5niCfsGZGPEl0dcfw?auto=format&dpr=1&h=500",
      price: "50.00",
      summaries:
        "Metaverse HQ - where Picasso's powerful statement comes to life in the form of NFT art. Dive into the metaverse.",
      categories: "Art",
      music: process.env.PUBLIC_URL + "",
      owner: "Risidio",
      quantity: 0,
    },
    {
      title: "Rare Pepe",
      photo:
        "https://i.seadn.io/gcs/files/b36c8411036867ffedd8d85c54079785.png?auto=format&dpr=1&h=500",
      price: "120.00",
      summaries:
        "Rare Pepe - Botticelli's Venus takes on a new form in the digital realm. A rare masterpiece for collectors.",
      categories: "SportLight",
      music: process.env.PUBLIC_URL + "",
      owner: "Risidio",
      quantity: 0,
    },
    {
      title: "Feel by Davido",
      photo: "https://i.ytimg.com/vi/irkGSP6SxDY/maxresdefault.jpg",
      price: "250.00",
      summaries:
        "Listen to 'Feel' by Davido, the enigmatic smile in NFT format. Immerse yourself in this musical journey.",
      categories: "Music",
      music: process.env.PUBLIC_URL + "/music/Davido_-_Feel.mp3",
      owner: "Davido",
      quantity: 0,
    },
    // Add more items in a similar format
  ];

  useEffect(() => {
    setFilteredCollection(collection);
  }, []);

  const filterCollection = (category) => {
    setSelectedCategory(category);
    console.log(category);

    if (category === "all") {
      setFilteredCollection(collection);
    } else {
      const filtered = collection.filter(
        (item) => item.categories === category
      );
      setFilteredCollection(filtered);
    }
  };

  const filterCollectionByPrice = (selectedPriceRange) => {
    setSelectedPriceRange(selectedPriceRange);

    const priceRanges = {
      "1-50": { min: 1, max: 50 },
      "51-100": { min: 51, max: 100 },
      "101-150": { min: 101, max: 150 },
      "151-200": { min: 151, max: 200 },
      "201+": { min: 201, max: Infinity },
    };

    const { min, max } = priceRanges[selectedPriceRange];

    const filtered = collection.filter(
      (item) => parseFloat(item.price) >= min && parseFloat(item.price) <= max
    );

    setFilteredCollection(filtered);
  };

  const filterCollectionByName = (selectedName) => {
    setSelectedName(selectedName);
    const filtered = collection.filter((item) => item.title === selectedName);
    setFilteredCollection(filtered);
  };

  return (
    <>
      <div className="mt-24 lg:mt-12">
        <section
          className={`mb-12 py-4 px-2 lg:px-32 flex gap-3 shadow-md ${
            isSmallScreen ? "flex-col absolute z-10 hidden" : ""
          }`}
        >
          <div className="flex gap-3">
            <h2 className="my-auto">Sort by: </h2>
            <div className="flex">
              <select
                value={selectedCategory}
                onChange={(e) => filterCollection(e.target.value)}
                className="rounded-md p-2"
              >
                <option value="all">All</option>
                <option value="Music">Music</option>
                <option value="Art">Art</option>
                <option value="Gaming">Gaming</option>
                <option value="SportLight">SportLight</option>
              </select>
            </div>
          </div>

          <section
            className={`flex justify-end w-10/12 gap-14 ${
              isSmallScreen ? "flex-col" : ""
            }`}
          >
            <div className="flex">
              <div className="my-auto text-md">Category:</div>
              <select
                value={selectedCategory}
                onChange={(e) => filterCollection(e.target.value)}
                className="rounded-md p-2"
              >
                <option value="all">All</option>
                <option value="Music">Music</option>
                <option value="Art">Art</option>
                <option value="Gaming">Gaming</option>
                <option value="SportLight">SportLight</option>
              </select>
            </div>
            <div className="flex">
              <div className="my-auto text-md">Price:</div>
              <select
                value={selectedPriceRange}
                onChange={(e) => filterCollectionByPrice(e.target.value)}
                className="rounded-md p-2"
              >
                <option value="1-50">$1 - $50</option>
                <option value="51-100">$51 - $100</option>
                <option value="101-150">$101 - $150</option>
                <option value="151-200">$151 - $200</option>
                <option value="201+">More than $200</option>
              </select>
            </div>
            <div className="flex">
              <div className="my-auto text-md">Name:</div>
              <select
                value={selectedName}
                onChange={(e) => filterCollectionByName(e.target.value)}
                className="rounded-md p-2"
              >
                {collection.map((eachTitle, index) => (
                  <option key={index} value={eachTitle.title}>
                    {eachTitle.title}
                  </option>
                ))}
              </select>
            </div>
          </section>
        </section>
        <section className="flex flex-wrap gap-4 w-full justify-center">
          <Cards collection={filteredCollection} />
        </section>
      </div>
    </>
  );
};

export default LandingPage;
