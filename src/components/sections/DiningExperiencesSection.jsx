// src/components/sections/DiningExperiencesSection.jsx

import diningData from "../../data/diningData";
import DiningCard from "../cards/DiningCard";
import CarouselButtons from "../ui/CarouselButtons";

import tiger from "../../assets/dining/tiger.png";

const DiningExperiencesSection = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[linear-gradient(180.03deg,#075BBF_5.43%,#042858_99.98%)]
        py-[50px]
        
      "
    >
      <div
        className="
          mx-auto
          flex
          max-w-[1366px]
          items-start
          justify-between
          px-[78px]
        "
      >
        {/* LEFT */}
        <div className="relative w-[360px] shrink-0">
          {/* HEADING */}
          <div
            className="
              flex
              flex-col
              items-center
            "
          >
            <h2
              className="
                font-['Paytone_One']
                text-[46px]
                leading-[48px]
                tracking-[-0.005em]
                uppercase
                text-white
              "
            >
              {diningData.titleTop}
            </h2>

            <div className="relative mt-[10px] h-[51px] w-[330px]">
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  h-[48px]
                  w-full
                  skew-x-[-12deg]
                  bg-[#F7C259]
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
                  text-[#110A02]
                "
              >
                {diningData.titleBottom}
              </h3>
            </div>
          </div>

          {/* STATS */}
          <div
            className="
              mt-5
              flex
              items-center
              gap-[24px]
            "
          >
            {diningData.stats.map((item, index) => (
              <div
                key={item.id}
                className="flex items-center"
              >
                <div
                  className="
                    flex
                    flex-col
                    items-center
                    gap-[8px]
                  "
                >
                  <h4
                    className="
                      font-['Paytone_One']
                      text-[46px]
                      leading-[48px]
                      tracking-[-0.005em]
                      uppercase
                      text-white
                    "
                  >
                    {item.number}
                  </h4>

                  <p
                    className="
                      font-['Quicksand']
                      text-[16px]
                      font-semibold
                      leading-[20px]
                      tracking-[-0.005em]
                      text-white
                    "
                  >
                    {item.label}
                  </p>
                </div>

                {index !== diningData.stats.length - 1 && (
                  <div className="ml-[24px] h-[30px] w-px bg-white/25" />
                )}
              </div>
            ))}
          </div>

          {/* MASCOT */}
          <img
            src={tiger}
            alt="Dining Tiger"
            className="
              absolute
              bottom-[-340px]
              left-[-6px]
              w-[367px]
              object-contain
              pointer-events-none
              select-none
            "
          />
        </div>

        {/* RIGHT */}
        <div className="w-[998px] ml-20">
          {/* CARDS */}
          <div className="flex gap-[16px] overflow-hidden">
            {diningData.cards.map((item) => (
              <DiningCard
                key={item.id}
                item={item}
              />
            ))}
          </div>

          {/* BOTTOM */}
          <div className="mt-[28px] flex items-center justify-between">
            <button
              className="
                flex
                h-[52px]
                items-center
                justify-center
                rounded-full
                border
                border-[#CECBC9]
                px-[28px]
                font-['Quicksand']
                text-[18px]
                font-bold
                leading-[20px]
                tracking-[-0.005em]
                text-white
                transition-all
                duration-300
                hover:bg-white/10
              "
            >
              {diningData.buttonText}
            </button>

            <div className="mr-28">

              <CarouselButtons />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiningExperiencesSection;