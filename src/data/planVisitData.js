// src/data/planVisitData.js

import sign from "../assets/visit/sign.png";
import clock from "../assets/visit/clock.png";
import board from "../assets/visit/board.png";
import almira from "../assets/visit/almira.png";


const planVisitData = {
  titleTop: "PLAN YOUR",

  titleBottom: "PARK VISIT",

  cards: [
    {
      id: 1,

      title: "How to Reach",

      subtitle:
        "Park operating hours, directions, and parking option",

      width: "large",

      image: sign,

      imageClass:
        "w-[212px] right-[-26px] bottom-[-8px]",
    },

    {
      id: 2,

      title: "Park Rules",

      subtitle: "Guidelines, map & codes",

      width: "medium",

      image: board,

      imageClass:
        "w-[202px] right-[-40px] bottom-[-10px]",
    },

    {
      id: 3,

      title: "Facilities",

      subtitle: "Lockers, strollers, wheelchairs",

      width: "medium",

      image: almira,

      imageClass:
        "w-[128px] right-[14px] bottom-[-16px]",
    },
  ],
};

export default planVisitData;