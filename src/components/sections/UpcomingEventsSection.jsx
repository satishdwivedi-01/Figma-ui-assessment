// src/components/sections/UpcomingEventsSection.jsx

import EventCard from "../cards/EventCard";
import DarkCarouselButtons from "../ui/DarkCarouselButtons";

import eventsData from "../../data/eventsData";

function UpcomingEventsSection() {
  return (
    <section
      className="
        relative
        h-[759px]
        overflow-hidden
        bg-[linear-gradient(180deg,#EDA20C_0%,#F7C245_100%)]
      "
    >
      {/* SWIRL BG */}
      <div
        className="
          absolute
          inset-0
          opacity-20
          bg-[radial-gradient(circle_at_center,#f9d470_0%,transparent_58%)]
        "
      />

      {/* SWIRL OVERLAY */}
      <div
        className="
          absolute
          inset-0
          bg-[conic-gradient(from_0deg_at_50%_50%,rgba(255,255,255,0.08)_0deg,transparent_18deg,rgba(255,255,255,0.08)_36deg,transparent_54deg)]
          opacity-50
        "
      />

      <div className="relative z-20 flex flex-col items-center">
        
        {/* TITLE */}
        <div className="relative mt-[78px] w-[450px] h-[51px]">
          
          {/* UPCOMING */}
          <h2
            className="
              absolute
              left-0
              top-[1px]
              font-['Paytone_One']
              text-[46px]
              leading-[48px]
              tracking-[-0.005em]
              uppercase
              text-white
            "
          >
            UPCOMING
          </h2>

          {/* EVENTS BG */}
          <div
            className="
              absolute
              right-0
              top-[3px]
              w-[193px]
              h-[48px]
              bg-[#FBE1AC]
              skew-x-[-12deg]
            "
          />

          {/* EVENTS */}
          <h3
            className="
              absolute
              right-[10px]
              top-0
              font-['Paytone_One']
              text-[46px]
              leading-[48px]
              tracking-[-0.005em]
              uppercase
              text-[#4A3016]
            "
          >
            EVENTS
          </h3>
        </div>

        {/* TABS */}
        <div
          className="
            mt-[36px]
            flex
            items-center
            gap-3
            rounded-[90px]
            border
            border-[#E7E2D9]
            bg-white
            p-[3px]
          "
        >
          <button
            className="
              min-w-[100px]
              h-[42px]
              px-[10px]
              rounded-[90px]
              font-['Quicksand']
              font-bold
              text-[16px]
              leading-[18px]
              tracking-[-0.005em]
              text-[#4A3016]
            "
          >
            January
          </button>

          <button
            className="
              min-w-[100px]
              h-[42px]
              px-4
              rounded-[90px]
              bg-[#4A3016]
              shadow-[0px_2px_2px_rgba(35,35,35,0.18)]
              font-['Quicksand']
              font-bold
              text-[16px]
              leading-[18px]
              tracking-[-0.005em]
              text-white
            "
          >
            February
          </button>

          <button
            className="
              min-w-[100px]
              h-[42px]
              px-[10px]
              rounded-[90px]
              font-['Quicksand']
              font-bold
              text-[16px]
              leading-[18px]
              tracking-[-0.005em]
              text-[#4A3016]
            "
          >
            March
          </button>
        </div>

        {/* EVENTS */}
        <div
          className="
            mt-[54px]
            flex
            items-center
            gap-5
            pl-[70px]
            w-full
            overflow-hidden
          "
        >
          {eventsData.map((event) => (
            <EventCard
              key={event.id}
              {...event}
            />
          ))}
        </div>

        {/* BUTTONS */}
        <div className="mt-[20px]">
          <DarkCarouselButtons />
        </div>
      </div>
    </section>
  );
}

export default UpcomingEventsSection;