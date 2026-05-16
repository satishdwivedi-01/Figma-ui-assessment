// src/components/cards/AttractionCard.jsx

import {
  Clock3,
  MapPin,
} from "lucide-react";

const AttractionCard = ({ item }) => {
  return (
    <div
      className="
        relative
        w-[310px]
        h-[385px]
        rounded-[20px]
        border
        border-[rgba(66,56,36,0.1)]
        bg-[linear-gradient(180deg,#F4EFE6_0%,#F9E1B4_50%,#F4EFE6_100%)]
        shadow-[2px_0px_13px_rgba(35,35,35,0.08)]
        shrink-0
        overflow-visible
      "
    >
      {/* IMAGE */}
      <div
        className="
          absolute
          left-1/2
          top-[16px]
          -translate-x-1/2
          w-[294px]
          h-[266px]
          rounded-[6px]
          overflow-hidden
        "
      >
        <img
          src={item.image}
          alt={item.title}
          className="
            w-full
            h-full
            object-cover
          "
        />
      </div>

      {/* BADGE */}
      <div
        className="
          absolute
          left-1/2
          top-[264px]
          -translate-x-1/2
          flex
          items-center
          justify-center
          h-[27px]
          px-[13px]
          rounded-full
          bg-[rgba(245,237,224,0.8)]
          backdrop-blur-[2px]
        "
      >
        <span
          className="
            font-['Quicksand']
            font-semibold
            text-[14px]
            leading-[18px]
            tracking-[-0.005em]
            text-[#423824]
          "
        >
          {item.badge}
        </span>
      </div>

      {/* CONTENT */}
      <div
        className="
          absolute
          left-1/2
          top-[308px]
          -translate-x-1/2
          w-[267px]
          flex
          flex-col
          items-center
          gap-4
        "
      >
        {/* TITLE */}
        <h3
          className="
            w-full
            text-center
            font-['Paytone_One']
            text-[20px]
            leading-[20px]
            tracking-[-0.005em]
            text-[#110A02]
          "
        >
          {item.title}
        </h3>

        {/* META */}
        <div className="flex items-center gap-[6px]">
          
          {/* TIME */}
          <div className="flex items-center gap-[2px]">
            <Clock3
              size={12}
              strokeWidth={1.75}
              color="#423824"
            />

            <span
              className="
                font-['Quicksand']
                font-semibold
                text-[16px]
                leading-[20px]
                tracking-[-0.005em]
                text-[#423824]
              "
            >
              {item.time}
            </span>
          </div>

          {/* DIVIDER */}
          <div className="w-[9px] rotate-90 border border-black" />

          {/* LOCATION */}
          <div className="flex items-center gap-[2px]">
            <MapPin
              size={12}
              strokeWidth={1.75}
              color="#423824"
            />

            <span
              className="
                font-['Quicksand']
                font-semibold
                text-[16px]
                leading-[20px]
                tracking-[-0.005em]
                text-[#423824]
              "
            >
              {item.location}
            </span>
          </div>
        </div>
      </div>

      {/* BOTTOM DIAMOND */}
      <div
        className="
          absolute
          left-1/2
          bottom-[-6px]
          -translate-x-1/2
          w-[13px]
          h-[13px]
          rotate-45
          bg-[#FAFAFA]
        "
      />
    </div>
  );
};

export default AttractionCard;