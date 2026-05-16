// src/components/cards/EventCard.jsx

import { CalendarDays } from "lucide-react";

function EventCard({
  title,
  subtitle,
  date,
  image,
}) {
  return (
    <div
      className="
        relative
        w-[400px]
        h-[413px]
        rounded-[14px]
        bg-white
        overflow-hidden
        shrink-0
      "
    >
      {/* IMAGE */}
      <div
        className="
          absolute
          left-1/2
          top-[8px]
          -translate-x-1/2
          w-[384px]
          h-[251px]
          rounded-[14px]
          overflow-hidden
        "
      >
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-[#dadada]" />
        )}
      </div>

      {/* DATE TAG */}
      <div
        className="
          absolute
          left-1/2
          top-[7px]
          -translate-x-1/2
          w-[186px]
          h-[26px]
          bg-white
          rounded-b-[18px]
          flex
          items-center
          justify-center
        "
      >
        <div className="flex items-center gap-[6px]">
          <CalendarDays
            size={16}
            strokeWidth={2}
            color="#110A02"
          />

          <span
            className="
              font-['Quicksand']
              font-semibold
              text-[14px]
              leading-[18px]
              tracking-[-0.005em]
              text-[#110A02]
            "
          >
            {date}
          </span>
        </div>
      </div>

      {/* CONTENT */}
      <div
        className="
          absolute
          left-1/2
          top-[279px]
          -translate-x-1/2
          w-[384px]
          flex
          flex-col
          items-center
          gap-4
        "
      >
        {/* TEXT */}
        <div className="flex flex-col items-center gap-2">
          
          <h3
            className="
              w-[321px]
              text-center
              font-['Paytone_One']
              text-[24px]
              leading-[26px]
              tracking-[-0.005em]
              text-[#110A02]
            "
          >
            {title}
          </h3>

          <p
            className="
              w-full
              text-center
              font-['Quicksand']
              font-semibold
              text-[14px]
              leading-[18px]
              tracking-[-0.005em]
              text-[#110A02]
            "
          >
            {subtitle}
          </p>
        </div>

        {/* BUTTON */}
        <div className="w-full px-3">
          <button
            className="
              w-full
              h-[48px]
              rounded-full
              bg-[#EDA20C]
              shadow-[0px_1.5px_0px_#DCA642,inset_-1.88px_-2.26px_5.27px_rgba(255,255,255,0.25),inset_1.88px_1.88px_5.65px_rgba(255,255,255,0.25)]
              font-['Quicksand']
              font-bold
              text-[16px]
              leading-[20px]
              tracking-[-0.005em]
              text-white
              transition-all
              duration-300
              hover:translate-y-[-2px]
            "
          >
            Book Tickets
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventCard;