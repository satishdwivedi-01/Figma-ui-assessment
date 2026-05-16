// src/data/magicPassData.js

import logo from "../assets/navbar/Logo.png";
import wetnJoy from "../assets/magicPass/wetnJoy.png";
import saiteerth from "../assets/magicPass/sai.png";
import aquaImagicaa from "../assets/magicPass/Aqua.png";

const magicPassData = {
  pillText: "4 visits in a year",

  headingTop: "ACROSS DIFFERENT PARK",

  headingBottom: "OR REPEAT YOUR FAV!",

  logos: [
    {
      id: 1,
      name: "Imagicaa",
      image: logo,
      className: "w-[110px] h-auto object-contain",
    },

    {
      id: 2,
      name: "Wet n Joy",
      image: wetnJoy,
      className: "w-[108px] h-auto object-contain",
    },

    {
      id: 3,
      name: "Sai Teerth",
      image: saiteerth,
      className: "w-[88px] h-auto object-contain",
    },

    {
      id: 4,
      name: "Aqua Imagicaa",
      image: aquaImagicaa,
      className: "w-[80px] h-auto object-contain",
    },
  ],
};

export default magicPassData;