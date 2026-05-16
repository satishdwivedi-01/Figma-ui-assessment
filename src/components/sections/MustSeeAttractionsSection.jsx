// src/components/sections/MustSeeAttractionsSection.jsx

import attractionsData from "../../data/attractionsData";
import AttractionCard from "../cards/AttractionCard";
import CarouselButtons from "../ui/CarouselButtons";

import castle from "../../assets/mustSeeAttractions/Castle.png";

const MustSeeAttractionsSection = () => {
  return (
    <section
      className="
        relative
        h-[639px]
        overflow-hidden
        bg-white
      "
    >
      {/* CASTLE IMAGE */}
      <div
        className="
          absolute
          left-[-130px]
          bottom-[-52px]
          w-[919px]
          h-[609px]
          z-[1]
        "
      >
        <img
          src={castle}
          alt="Castle"
          className="
            w-full
            h-full
            object-contain
            pointer-events-none
            select-none
          "
        />

        {/* WHITE FADE */}
        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(91deg,rgba(255,255,255,0)_67%,#fff_91%)]
          "
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 h-full">
        
        {/* HEADING */}
        <div
          className="
            absolute
            top-[31px]
            left-1/2
            -translate-x-1/2
            w-[347px]
            h-[99px]
          "
        >
          <h2
            className="
              text-center
              font-['Paytone_One']
              text-[46px]
              leading-[48px]
              tracking-[-0.005em]
              uppercase
              text-[#110A02]
            "
          >
            MUST-SEE
          </h2>

          <div
            className="
              absolute
              bottom-0
              left-1/2
              -translate-x-1/2
              w-[347px]
              h-[48px]
              bg-[#EDA20C]
              skew-x-[-12deg]
            "
          />

          <h3
            className="
              absolute
              bottom-0
              left-1/2
              -translate-x-1/2
              w-full
              text-center
              font-['Paytone_One']
              text-[46px]
              leading-[48px]
              tracking-[-0.005em]
              uppercase
              text-white
            "
          >
            ATTRACTIONS
          </h3>
        </div>

        {/* CARDS */}
        <div
          className="
            absolute
            left-[509px]
            top-[169px]
            flex
            gap-4
          "
        >
          {attractionsData.map((item) => (
            <AttractionCard
              key={item.id}
              item={item}
            />
          ))}
        </div>

        {/* BUTTONS */}
        <div
          className="
            absolute
            right-[74px]
            bottom-[24px]
          "
        >
          <CarouselButtons theme="gold" />
        </div>
      </div>
    </section>
  );
};

export default MustSeeAttractionsSection;