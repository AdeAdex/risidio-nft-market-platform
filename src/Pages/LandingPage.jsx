import React, { useEffect, useState } from "react";
import Cards from "../Components/Cards";
import { FaArrowUp } from "react-icons/fa";

const LandingPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPriceRange, setSelectedPriceRange] = useState("all");
  const [selectedName, setSelectedName] = useState("all");
  const [filteredCollection, setFilteredCollection] = useState([]);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  // const [showTopButton, setShowTopButton] = useState(false);
  const [showTopButton, setShowTopButton] = useState(false);

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
      id: 123456,
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
      id: 234567,
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
      id: 345678,
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
      id: 456789,
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
      id: 567890,
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
      id: 678901,
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
      id: 789012,
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
    {
      id: 890123,
      title: "Lunar Symphony",
      photo:
        "https://source.boomplaymusic.com/group10/M00/08/04/34b9087d18174cc5b93afe4ada9ae24e_320_320.jpg",
      price: "90.00",
      summaries:
        "Embark on a musical journey with Lunar Symphony. Let the celestial tunes elevate your soul.",
      categories: "Music",
      music: process.env.PUBLIC_URL + "/music/Asa-Ft.-Wizkid-IDG.mp3",
      owner: "ComposerX",
      quantity: 0,
    },
    {
      id: 901234,
      title: "Neo Tokyo Dreams",
      photo:
        "https://i.discogs.com/0WRRthFQe3Mc0xISimekulhxo7nSx7QkKuIMkCF_hSA/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwMzQ3/NzU4LTE0OTU3NDgz/NTYtNTUyNy5qcGVn.jpeg",
      price: "120.00",
      summaries:
        "Step into the futuristic cityscape of Neo Tokyo Dreams. A digital masterpiece for cyberpunk enthusiasts.",
      categories: "Art",
      music: process.env.PUBLIC_URL + "",
      owner: "Risidio",
      quantity: 0,
    },
    {
      id: 123456,
      title: "Quantum Beats",
      photo:
        "https://scontent.fiba1-1.fna.fbcdn.net/v/t39.30808-6/299679018_194855359567053_7219755556257230098_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG_RAFI2APmNrs1ElhwsST6_Ged7QBjkxH8Z53tAGOTEccfuhPm1qegn3gOB7qpPH5BRU0vCuxnWfeUjYOp4Myw&_nc_ohc=OCLmYV1gxlkAX9PTaAe&_nc_zt=23&_nc_ht=scontent.fiba1-1.fna&cb_e2o_trans=q&oh=00_AfCTq78Eme9BYYqMwc5XCRF7SFz3nkn643CmCcyXDq40bg&oe=65515F0A",
      price: "180.00",
      summaries:
        "Quantum Beats - Where music and science collide. Immerse yourself in this fusion of art and technology.",
      categories: "Music",
      music: process.env.PUBLIC_URL + "/music/Quantum_Beats.mp3",
      owner: "QuantumSound",
      quantity: 0,
    },
    {
      id: 234567,
      title: "Oceanic Harmony",
      photo:
        "https://source.boomplaymusic.com/group10/M00/04/05/ba5c897ed2304c6db8e25a89f7e5d757_464_464.jpg",
      price: "150.00",
      summaries:
        "Feel the serenity of Oceanic Harmony. Let the soothing waves of sound wash over you.",
      categories: "Music",
      music: process.env.PUBLIC_URL + "/music/Omah-Lay-Justin-Bieber-–-Attention.mp3",
      owner: "SoundSculptor",
      quantity: 0,
    },
    {
      id: 345678,
      title: "Abstract Echoes",
      photo: "https://imagescdn.junodownload.com/full/CS6005595-02A-BIG.jpg",
      price: "100.00",
      summaries:
        "Abstract Echoes - A visual and auditory exploration of abstract concepts. A feast for the senses.",
      categories: "Abstract",
      owner: "VisionaryArt",
      quantity: 0,
    },
    {
      id: 456789,
      title: "Arcane Alchemy",
      photo: "https://f4.bcbits.com/img/a0323179043_65",
      price: "200.00",
      summaries:
        "Unleash the magical essence of Arcane Alchemy. An enchanting blend of art and mysticism.",
      categories: "Mystic",
      owner: "MysticArtisan",
      quantity: 0,
    },
    {
      id: 567890,
      title: "Vibrant Visions",
      photo: "https://paintandvino.com/wp-content/uploads/Vibrant-Visions.jpg",
      price: "80.00",
      summaries:
        "Experience the world through Vibrant Visions. A colorful array of digital artistry.",
      categories: "Colorful",
      owner: "Risidio",
      quantity: 0,
    },
    {
      id: 678901,
      title: "Epic Odyssey",
      photo:
        "https://media.pocketgamer.com/artwork/na-31800-1597942157/Epic_Odyssey-iOS-Android-Artwork-KeyArt.jpg",
      price: "250.00",
      summaries:
        "Embark on an Epic Odyssey through digital realms. A journey of visual and auditory delights.",
      categories: "Adventure",
      owner: "DigitalExplorer",
      quantity: 0,
    },
    {
      id: 789012,
      title: "Celestial Serenade",
      photo: "https://i.ytimg.com/vi/9US9nEopX-o/maxresdefault.jpg",
      price: "120.00",
      summaries:
        "Indulge in the heavenly sounds of Celestial Serenade. A musical experience like no other.",
      categories: "Heavenly",
      owner: "HarmonyMaster",
      quantity: 0,
    },
    {
      id: 890123,
      title: "Sculpted Soundwaves",
      photo:
        "https://i.pinimg.com/originals/5d/8c/21/5d8c211c90fa4c104fc1735b93d75683.jpg",
      price: "150.00",
      summaries:
        "Witness the fusion of art and sound with Sculpted Soundwaves. A masterpiece for audiophiles.",
      categories: "Sculpture",
      owner: "AudioSculptor",
      quantity: 0,
    },
    {
      id: 901234,
      title: "Quantum Canvas",
      photo: "https://i.ytimg.com/vi/J3PeqEZO13c/maxresdefault.jpg",
      price: "180.00",
      summaries:
        "Dive into the Quantum Canvas, where digital artistry meets the principles of quantum reality.",
      categories: "Quantum",
      owner: "QuantumArtisan",
      quantity: 0,
    },
    {
      id: 123456,
      title: "Futuristic Fusion",
      photo:
        "https://static.vecteezy.com/system/resources/thumbnails/030/463/427/small/futuristic-nuclear-fusion-concept-with-magnetic-confinement-generative-ai-photo.jpeg",
      price: "200.00",
      summaries:
        "Experience the merging of past and future in Futuristic Fusion. A visual and auditory delight.",
      categories: "Futuristic",
      owner: "TimeTraveler",
      quantity: 0,
    },
    {
      id: 234567,
      title: "Galactic Grooves",
      photo:
        "https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:392/h:594/q:75/https://bleedingcool.com/wp-content/uploads/2021/04/JL_Cv64_var.jpg",
      price: "130.00",
      summaries:
        "Immerse yourself in the otherworldly sounds of Galactic Grooves. A cosmic journey of beats and melodies.",
      categories: "Cosmic",
      owner: "CosmicBeats",
      quantity: 0,
    },
  ];

  useEffect(() => {
    setFilteredCollection(collection);
  }, []);

  const filterCollectionBySort = (value) => {
    let sortedCollection = [...collection];

    switch (value) {
      case "AZ":
        sortedCollection.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "ZA":
        sortedCollection.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "LowToHigh":
        sortedCollection.sort(
          (a, b) => parseFloat(a.price) - parseFloat(b.price)
        );
        break;
      case "HighToLow":
        sortedCollection.sort(
          (a, b) => parseFloat(b.price) - parseFloat(a.price)
        );
        break;
      default:
        break;
    }

    setFilteredCollection(sortedCollection);
    setSelectedCategory(value);
  };

  const filterCollection = (category) => {
    setSelectedCategory(category);

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

  const handleScroll = () => {
    const scrollY = window.scrollY;

    setShowTopButton(scrollY > 100);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="mt-12 lg:mt-12">
        <section
          className={`mb-12 py-4 px-2 lg:px-32 flex gap-3 shadow-md bg-sort-background  text-white  font-bold ${
            isSmallScreen ? "flex-row z-10 overflow-y-scroll w-full" : ""
          }`}
        >
          <div className="flex  gap-3">
            <div className="my-auto sm:text-xs lg:text-base flex">
              <span className="mr-1">Sort </span> <span>by:</span>
            </div>
            <div className="flex">
              <select
                value={selectedCategory}
                onChange={(e) => filterCollectionBySort(e.target.value)}
                className="rounded-md p-2 sm:text-xs lg:text-base bg-transparent border border-1"
              >
                <option value="all">All</option>
                <option value="AZ">A - Z</option>
                <option value="ZA">Z - A</option>
                <option value="LowToHigh">Price: Low to High</option>
                <option value="HighToLow">Price: High to Low</option>
              </select>
            </div>
          </div>

          <section
            className={`flex w-9/12  ${
              isSmallScreen ? "flex-row w-full gap-2" : "gap-14 justify-end"
            }`}
          >
            <div className="flex">
              <div className="my-auto sm:text-xs lg:text-base mr-2">Category:</div>
              <select
                value={selectedCategory}
                onChange={(e) => filterCollection(e.target.value)}
                className="rounded-md p-2 sm:text-xs lg:text-base bg-transparent border border-1"
              >
                <option value="all">All</option>
                <option value="Music">Music</option>
                <option value="Art">Art</option>
                <option value="Gaming">Gaming</option>
                <option value="SportLight">SportLight</option>
                <option value="Abstract">Abstract</option>
                <option value="Mystic">Mystic</option>
                <option value="Colorful">Colorful</option>
                <option value="Adventure">Adventure</option>
                <option value="Heavenly">Heavenly</option>
                <option value="Sculpture">Sculpture</option>
                <option value="Quantum">Quantum</option>
                <option value="Futuristic">Futuristic</option>
                <option value="Cosmic">Cosmic</option>
              </select>
            </div>
            <div className="flex">
              <div className="my-auto sm:text-xs lg:text-base mr-2">Price:</div>
              <select
                value={selectedPriceRange}
                onChange={(e) => filterCollectionByPrice(e.target.value)}
                className="rounded-md p-2 sm:text-xs lg:text-base bg-transparent border border-1"
              >
                <option value="1-50">$1 - $50</option>
                <option value="51-100">$51 - $100</option>
                <option value="101-150">$101 - $150</option>
                <option value="151-200">$151 - $200</option>
                <option value="201+">More than $200</option>
              </select>
            </div>
            <div className="flex">
              <div className="my-auto sm:text-xs lg:text-base mr-2">Name:</div>
              <select
                value={selectedName}
                onChange={(e) => filterCollectionByName(e.target.value)}
                className="rounded-md p-2 sm:text-xs lg:text-base bg-transparent border border-1"
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

        <div>
          {showTopButton && (
            <button
              onClick={scrollToTop}
              className="top-button fixed bg-red-500 p-3 rounded-md"
              style={{ bottom: "40px", right: "50px" }}
            >
              <FaArrowUp className="text-white" />
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default LandingPage;
