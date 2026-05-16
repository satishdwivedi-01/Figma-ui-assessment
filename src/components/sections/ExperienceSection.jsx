// src/components/sections/ExperienceSection.jsx

import ExperienceCard from "../cards/expirienceCard";
import { experienceData } from "../../data/experienceData";

function ExperienceSection() {
  return (
    <section className="relative w-full h-[616px] bg-white overflow-hidden">
      
      {/* TITLE */}
      <div className="absolute left-1/2  -translate-x-1/2 w-[447px] h-[108px]">
        
        {/* TOP TEXT */}
        <div className="absolute top-0 left-[98px] w-[242px] h-[48px]">
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
            Pick Your
          </h2>
        </div>

        {/* TAG */}
        <div className="absolute left-0 top-[51px] w-[447px] h-[51px]">
          
          {/* BG */}
          <div className="absolute left-0 top-[3px] w-full h-[48px] bg-[#EDA20C]" />

          {/* TEXT */}
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
            Park Experience
          </h3>
        </div>
      </div>

      {/* CARDS */}
      <div
        className="
          absolute
          left-1/2
          top-[194px]
          -translate-x-1/2
          flex
          items-center
          gap-[10px]
          w-[1246px]
          h-[377px]
        "
      >
        {/* LEFT */}
        <ExperienceCard {...experienceData[0]} />

        {/* CENTER */}
        <ExperienceCard {...experienceData[1]} />

        {/* RIGHT STACK */}
        <div className="flex flex-col gap-[10px] w-[456px] h-[377px]">
          <ExperienceCard {...experienceData[2]} />
          <ExperienceCard {...experienceData[3]} />
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;