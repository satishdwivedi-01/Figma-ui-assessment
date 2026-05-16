import React from "react";

import parkIcon from "../../assets/navbar/parks.png";
import offersIcon from "../../assets/navbar/offers.png";
import ridesIcon from "../../assets/navbar/ride.png";
import planIcon from "../../assets/navbar/plainVisit.png";
import stayIcon from "../../assets/navbar/stay.png";
import eventsIcon from "../../assets/navbar/events.png";

const iconMap = {
  parks: parkIcon,
  offers: offersIcon,
  rides: ridesIcon,
  plan: planIcon,
  stay: stayIcon,
  events: eventsIcon,
};

function NavMenuItem({ item }) {
  return (
    <button
      className="
        flex
        w-max
        flex-col
        items-center
        justify-center
        gap-[4px]
      "
    >
      {/* ICON */}
      <div className="flex h-[22px] items-center justify-center">
        <img
          src={iconMap[item.icon]}
          alt={item.label || ""}
          className="h-full w-auto object-contain"
        />
      </div>

      {/* LABEL */}
      <span
        className="
          text-[16px]
          font-semibold
          leading-[20px]
          tracking-[-0.005em]
          text-[#051F3F]
        "
      >
        {item.label}
      </span>
    </button>
  );
}

export default NavMenuItem;