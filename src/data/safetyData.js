// src/data/safetyData.js

import drop from "../assets/safety/drop.png";
import filter from "../assets/safety/filter.png";
import medical from "../assets/safety/medical.png";
import audit from "../assets/safety/audits.png";
import maintenance from "../assets/safety/maintainance.png";

const safetyData = {
  titleTop: "YOUR SAFETY",

  titleBottom: "OUR PRIORITY",

  features: [
    {
      id: 1,
      title: "Water Quality\nCheck",
      icon: drop,
    },

    {
      id: 2,
      title: "Filtration\nStandards",
      icon: filter,
    },

    {
      id: 3,
      title: "24/7 Medical\nSupport",
      icon: medical,
    },

    {
      id: 4,
      title: "Independent\nAudits",
      icon: audit,
    },

    {
      id: 5,
      title: "Ride\nMaintenance",
      icon: maintenance,
    },
  ],
};

export default safetyData;