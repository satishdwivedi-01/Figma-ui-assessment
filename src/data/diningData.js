// src/data/diningData.js

import castle from "../assets/dining/castle.png";
import ride from "../assets/dining/ride.png";

const diningData = {
  titleTop: "DINING",

  titleBottom: "EXPERIENCES",

  stats: [
    {
      id: 1,
      number: "20+",
      label: "Cuisines",
    },

    {
      id: 2,
      number: "08",
      label: "Restaurants",
    },

    {
      id: 3,
      number: "03",
      label: "Kiosks",
    },
  ],

  cards: [
    {
      id: 1,

      title: "Palace Hotel",

      subtitle:
        "From quick bites to themed dining, discover flavors for every mood",

      image: castle,

      glow: "#056249",

      tags: ["ITALIAN", "North Indian", "Spanish"],
    },

    {
      id: 2,

      title: "Restaurant 01",

      subtitle:
        "From quick bites to themed dining, discover flavors for every mood",

      image: ride,

      glow: "#054162",

      tags: ["ITALIAN", "North Indian", "Spanish"],
    },

    {
      id: 3,

      title: "Palace Dining",

      subtitle:
        "From quick bites to themed dining, discover flavors for every mood",

      image: castle,

      glow: "#056249",

      tags: ["ITALIAN", "North Indian", "Spanish"],
    },
  ],

  buttonText: "Explore All Restaurants",
};

export default diningData;