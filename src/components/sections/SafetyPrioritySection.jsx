// src/components/sections/SafetyPrioritySection.jsx

import safetyData from "../../data/safetyData";
import SafetyFeatureCard from "../cards/SafetyFeatureCard";

import tiger from "../../assets/safety/tiger.png";

const SafetyPrioritySection = () => {
  return (
    <section
      className="
        relative
        h-[286px]
        overflow-hidden
        bg-[linear-gradient(180deg,#075BBF_5.43%,#042858_99.98%)]
      "
    >
      <div className="mx-auto flex gap-[400px] h-full w-auto">
        
        {/* LEFT */}
        <div
          className="
            relative
            w-[420px]
          "
        >
          {/* TIGER */}
          <img
            src={tiger}
            alt="Tiger"
            className="
              absolute
              left-[52px]
              top-[38px]
              z-10
              w-[150px]
              object-contain
            "
          />

          {/* HEADING */}
          <div
            className="
              absolute
              left-[165px]
              top-[53px]
            "
          >
            <h2
              className="
                whitespace-nowrap
                font-['Paytone_One']
                text-[46px]
                leading-[48px]
                tracking-[-0.005em]
                uppercase
                text-white
              "
            >
              {safetyData.titleTop}
            </h2>

            <div className="relative mt-[4px] h-[48px] w-[377px]">
              <div
                className="
                  absolute
                  inset-0
                  bg-[#EDA20C]
                  skew-x-[-12deg]
                "
              />

              <span
                className="
                  absolute
                  inset-0
                  flex
                  items-center
                  justify-center
                  whitespace-nowrap
                  font-['Paytone_One']
                  text-[46px]
                  leading-[48px]
                  tracking-[-0.005em]
                  uppercase
                  text-[#110A02]
                "
              >
                {safetyData.titleBottom}
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div
          className="
            
            flex
            h-full
            items-center
            gap-0
            pr-[30px]

          "
        >
          {safetyData.features.map((item, index) => (
            <div
              key={item.id}
              className="
                flex
                h-[150px]
                items-center
              "
            >
              <SafetyFeatureCard item={item} />

              {index !== safetyData.features.length - 1 && (
                <div
                  className="
                    mx-[20px]
                    h-[150px]
                    w-[1px]
                    bg-[#4A5FB4]
                    opacity-60
                  "
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SafetyPrioritySection;