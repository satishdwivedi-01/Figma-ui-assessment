

// src/data/merchandiseData.js

import elephant from "../assets/testimonial2/elephant.png";
import kangaroo from "../assets/testimonial2/kangaroo.png";
import teddy1 from "../assets/testimonial2/teddy.png";
import teddy2 from "../assets/testimonial2/teddy2.png";

const merchandiseData = {
  titleTop: "IMAGICAA’S",
  titleBottom: "MERCHANDISE",

  categories: ["Men", "Women", "Juniors", "Collectibles"],
  activeCategory: "Men",

  subCategories: ["Casual Wear", "Active Wear", "Winter Wear", "Formal Wear"],
  activeSubCategory: "Casual Wear",

  products: [
    {
      id: 1,
      title: "Classic Imagicaa T-Shirt",
      color: "#efc9c1",
      image: elephant,
    },
    {
      id: 2,
      title: "Classic Imagicaa T-Shirt",
      color: "#c5d5eb",
      image: kangaroo,
    },
    {
      id: 3,
      title: "Classic Imagicaa T-Shirt",
      color: "#d6e7a6",
      image: teddy1,
    },
    {
      id: 4,
      title: "Classic Imagicaa T-Shirt",
      color: "#e8d0e9",
      image: teddy2,
    },
  ],

  buttonText: "View All Merchandise",
};

export default merchandiseData;