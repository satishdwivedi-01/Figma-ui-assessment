// src/components/ui/OffersCarouselButtons.jsx

import { ChevronLeft, ChevronRight } from "lucide-react";

function DarkCarouselButtons() {
  return (
    <div className="flex items-center gap-[15px]">
      
      {/* LEFT */}
      <button
        className="
          w-[42px]
          h-[42px]
          rounded-full
          border
          border-[#835907]
          flex
          items-center
          justify-center
        "
      >
        <ChevronLeft
          size={20}
          strokeWidth={1.5}
          color="#835907"
        />
      </button>

      {/* RIGHT */}
      <button
        className="
          w-[42px]
          h-[42px]
          rounded-full
          bg-[#4A3016]
          shadow-[0px_1.5px_0px_#DCA642]
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

export default DarkCarouselButtons;