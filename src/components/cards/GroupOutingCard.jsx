// src/components/cards/GroupOutingCard.jsx

import { Download } from "lucide-react";

const GroupOutingCard = ({ item }) => {
  return (
    <div
      className="
        group
        relative
        h-[420px]
        w-[400px]
        shrink-0
        overflow-hidden
        rounded-[12px]
        shadow-[0px_12px_22px_rgba(18,18,18,0.12)]
      "
    >
      {/* IMAGE */}
      <img
        src={item.image}
        alt={item.title}
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          transition-transform
          duration-700
          group-hover:scale-105
        "
      />

      {/* OVERLAY */}
      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(197.95deg,rgba(0,0,0,0)_67.43%,rgba(0,0,0,0.4)_91.24%)]
        "
      />

      {/* BOTTOM BLUR */}
      <div
        className="
          absolute
          bottom-[-167px]
          left-1/2
          h-[308px]
          w-[460px]
          -translate-x-1/2
          bg-black/70
          blur-[15px]
        "
      />

      {/* CONTENT */}
      <div
        className="
          absolute
          bottom-[87px]
          left-[20px]
          z-10
          flex
          flex-col
          gap-[4px]
        "
      >
        <h3
          className="
            font-['Paytone_One']
            text-[32px]
            leading-[38px]
            tracking-[-0.005em]
            text-white
          "
        >
          {item.title}
        </h3>

        <p
          className="
            max-w-[340px]
            font-['Quicksand']
            text-[16px]
            font-semibold
            leading-[20px]
            tracking-[-0.005em]
            text-white
          "
        >
          {item.subtitle}
        </p>
      </div>

      {/* CTA */}
      <div
        className="
          absolute
          left-[20px]
          top-[349px]
          z-10
          flex
          w-[353px]
          items-center
          gap-[12px]
        "
      >
        <button
          className="
            flex
            h-[52px]
            w-[60px]
            items-center
            justify-center
            rounded-full
            border
            border-white/30
            bg-white/5
            backdrop-blur-sm
            transition-all
            duration-300
            hover:bg-white/10
          "
        >
          <Download
            size={20}
            strokeWidth={1.8}
            color="#FFFFFF"
          />
        </button>

        <button
          className="
            flex-1
            rounded-full
            bg-[#EDA20C]
            py-[16px]
            font-['Quicksand']
            text-[18px]
            font-bold
            leading-[20px]
            tracking-[-0.005em]
            text-white
            shadow-[0px_1.5px_0px_#DCA642,inset_-1.88px_-2.26px_5.27px_rgba(255,255,255,0.25),inset_1.88px_1.88px_5.65px_rgba(255,255,255,0.25)]
            transition-all
            duration-300
            hover:scale-[1.02]
          "
        >
          {item.button}
        </button>
      </div>
    </div>
  );
};

export default GroupOutingCard;