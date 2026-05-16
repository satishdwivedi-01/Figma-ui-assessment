// src/data/experienceData.js
import themeParkImage from "../assets/experienceSection/happyImage.png";
import waterParkImage from "../assets/experienceSection/waterPark.png";
import snowParkImage from "../assets/experienceSection/snowPark.png";
import trampolineImage from "../assets/experienceSection/trampoline.png";

export const experienceData = [
  {
    id: 1,
    title: "Theme Park",
    description: "Theme park with rides,\n& magic for all ages.",
    variant: "theme",
    large: true,
    image: themeParkImage,
  },
  {
    id: 2,
    title: "Water Park",
    description: "Water park with rides,\nmagic for all ages.",
    variant: "water",
    large: true,
    image: waterParkImage,
  },
  {
    id: 3,
    title: "Snow Park",
    description: "Theme park with rides,\nshows & magic for all ages.",
    variant: "snow",
    large: false,
    image: snowParkImage,
  },
  {
    id: 4,
    title: "Trampoline",
    description: "Theme park with rides,\nshows & magic for all ages.",
    variant: "trampoline",
    large: false,
    image: trampolineImage,
  },
];