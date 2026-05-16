// src/components/cards/VisitInfoCard.jsx

import { ArrowUpRight } from "lucide-react";

const VisitInfoCard = ({ item }) => {
  const widthClass =
    item.width === "large"
      ? "w-[409px]"
      : "w-[285px]";

  return (
    <div
      className={`
        relative
        ${widthClass}
        h-[223px]
        overflow-hidden
        rounded-[6px]
        bg-[#F5F2E9]
      `}
    >
      {/* CONTENT */}
      <div
        className="
          absolute
          left-[16px]
          bottom-[118px]
          z-10
          flex
          w-[190px]
          flex-col
          gap-[3px]
        "
      >
        <h3
          className="
            font-['Paytone_One']
            text-[24px]
            leading-[26px]
            tracking-[-0.005em]
            text-[#4A3016]
          "
        >
          {item.title}
        </h3>

        <p
          className="
            font-['Quicksand']
            text-[16px]
            font-semibold
            leading-[20px]
            tracking-[-0.005em]
            text-[#3A3937]
            whitespace-break-spaces
            w-[154px]
          "
        >
          {item.subtitle}
        </p>
      </div>

      {/* CTA */}
      <button
        className="
          absolute
          bottom-[16px]
          left-[16px]
          z-10
          flex
          h-[42px]
          w-[46px]
          items-center
          justify-center
          rounded-full
          border
          border-[rgba(54,33,13,0.05)]
          bg-[linear-gradient(194.64deg,#F6F3ED_20.56%,#FAE7C6_101.55%)]
          shadow-[inset_-1.3px_-1.6px_3.7px_rgba(255,255,255,0.25),inset_1.3px_1.3px_4px_rgba(255,255,255,0.25)]
          transition-all
          duration-300
          hover:scale-105
        "
      >
        <ArrowUpRight
          size={20}
          strokeWidth={1.8}
          color="#423824"
        />
      </button>

      {/* VISUAL */}
      <img
        src={item.image}
        alt={item.title}
        className={`
          absolute
          bottom-0
          right-0
          object-contain
          pointer-events-none
          select-none
          ${item.imageClass}
        `}
      />
    </div>
  );
};

export default VisitInfoCard;