// src/components/sections/PlanVisitSection.jsx

import planVisitData from "../../data/planVisitData";
import VisitInfoCard from "../cards/VisitInfoCard";

const PlanVisitSection = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[linear-gradient(180deg,#EDA20C_0%,#F7C245_100%)]
        pt-[47px]
        pb-[52px]
      "
    >
      {/* BACKGROUND PATTERN */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="
            absolute
            -left-[58px]
            -top-[69px]
            h-[980px]
            w-[1542px]
            rounded-full
            bg-[#EECE7B]
          "
        />
      </div>

      {/* RADIAL RAYS */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.14]
          bg-[repeating-conic-gradient(from_0deg_at_50%_50%,rgba(255,255,255,0.7)_0deg,transparent_14deg,transparent_28deg)]
        "
      />

      <div className="relative z-10">
        {/* HEADING */}
        <div
          className="
            relative
            mx-auto
            h-[108px]
            w-[309px]
          "
        >
          <h2
            className="
              absolute
              left-1/2
              top-0
              -translate-x-1/2
              whitespace-nowrap
              font-['Paytone_One']
              text-[46px]
              leading-[48px]
              tracking-[-0.005em]
              uppercase
              text-white
            "
          >
            {planVisitData.titleTop}
          </h2>

          <div
            className="
              absolute
              left-1/2
              top-[60px]
              h-[48px]
              w-[323px]
              -translate-x-1/2
              skew-x-[-12deg]
              bg-[#FBE1AC]
            "
          />

          <h3
            className="
              absolute
              left-1/2
              top-[57px]
              -translate-x-1/2
              whitespace-nowrap
              font-['Paytone_One']
              text-[46px]
              leading-[48px]
              tracking-[-0.005em]
              uppercase
              text-[#4A3016]
            "
          >
            {planVisitData.titleBottom}
          </h3>
        </div>

        {/* CARDS */}
        <div
          className="
            mx-auto
            mt-[52px]
            flex
            w-[1015px]
            gap-[18px]
          "
        >
          {planVisitData.cards.map((item) => (
            <VisitInfoCard
              key={item.id}
              item={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlanVisitSection;