// src/components/ui/CarouselButtons.jsx

import { ChevronLeft, ChevronRight } from "lucide-react";

function CarouselButtons() {
  return (
    <div className="flex items-center gap-[15px]">
      
      {/* LEFT */}
      <button
        className="
          w-[42px]
          h-[42px]
          rounded-full
          border
          border-[#FBE1AC]
          flex
          items-center
          justify-center
        "
      >
        <ChevronLeft
          size={20}
          strokeWidth={1.5}
          color="#FBE1AC"
        />
      </button>

      {/* RIGHT */}
      <button
        className="
          w-[42px]
          h-[42px]
          rounded-full
          bg-[#EDA20C]
          shadow-[0px_1.5px_0px_#DCA642,inset_-1.88px_-2.26px_5.27px_rgba(255,255,255,0.25),inset_1.88px_1.88px_5.65px_rgba(255,255,255,0.25)]
          flex
          items-center
          justify-center
        "
      >
        <ChevronRight
          size={20}
          strokeWidth={1.5}
          color="#FFFFFF"
        />
      </button>
    </div>
  );
}

export default CarouselButtons;