// src/components/sections/GroupOutingSection.jsx

import groupOutingData from "../../data/groupOutingData";
import GroupOutingCard from "../cards/GroupOutingCard";
import CarouselButtons from "../ui/CarouselButtons";



const GroupOutingSection = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        pt-[51px]
      "
    >
      {/* HEADING */}
      <div className="relative flex flex-col items-center">
        <h2
          className="
            font-['Paytone_One']
            text-[46px]
            leading-[48px]
            tracking-[-0.005em]
            uppercase
            text-[#110A02]
          "
        >
          {groupOutingData.titleTop}
        </h2>

        <div className="relative mt-[1px] h-[48px] w-[382px]">
          <div
            className="
              absolute
              inset-0
              skew-x-[-12deg]
              bg-[#EDA20C]
            "
          />

          <h3
            className="
              absolute
              inset-0
              flex
              items-center
              justify-center
              font-['Paytone_One']
              text-[46px]
              leading-[48px]
              tracking-[-0.005em]
              uppercase
              text-white
            "
          >
            {groupOutingData.titleBottom}
          </h3>
        </div>

        {/* DINO */}
        <img
          src="/images/group-dino.png"
          alt="Dino"
          className="
            absolute
            right-[390px]
            top-[-42px]
            z-20
            w-[120px]
            object-contain
          "
        />
      </div>

      {/* CARDS */}
      <div
        className="
          mt-[95px]
          flex
          gap-[16px]
          px-[100px]
          pb-[10px]
          scrollbar-hide
        "
      >
        {groupOutingData.cards.map((item) => (
          <GroupOutingCard
            key={item.id}
            item={item}
          />
        ))}
      </div>

      {/* BUTTONS */}
      <div className="mt-[42px] flex justify-center">
        <CarouselButtons />
      </div>
      
      {/* STATIC WAVE / SNAKE RIBBON */}
      <div className="relative h-[110px] bg-white overflow-hidden">
        {/* Yellow Wave Container */}
        <div className="absolute inset-0 bg-[#ffffff]">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            fill="#F4A328"
          >
            <path
              d="M0 60 
           Q150 20 300 60 
           Q450 100 600 60 
           Q750 20 900 60 
           Q1050 100 1200 60 
           L1200 120 
           L0 120 Z"
              fill="#F4A328"
            />
            {/* Optional subtle highlight wave for snake depth */}
            <path
              d="M0 65 
           Q150 30 300 65 
           Q450 95 600 65 
           Q750 35 900 65 
           Q1050 95 1200 65 
           L1200 120 
           L0 120 Z"
              fill="#F8C15E"
              opacity="0.4"
            />
          </svg>
        </div>

        {/* Text Content */}
        <div className="relative top-9 z-10 flex h-full items-center overflow-hidden px-6">
          <div className="font-['Quicksand'] text-[18px] font-semibold tracking-[-0.005em] text-black whitespace-nowrap">
            {Array(6)
              .fill(groupOutingData.ticker)
              .join(" • ")}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroupOutingSection;