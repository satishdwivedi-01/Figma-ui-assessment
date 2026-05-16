// src/components/sections/OffersSection.jsx

import OfferCard from "../cards/OfferCard";
import OffersCarouselButtons from "../ui/DarkCarouselButtons";

import offersData from "../../data/offersData";

function OffersSection() {
  return (
    <section className="relative h-[692px] overflow-hidden bg-[#EDA20C]">
      
      {/* MAIN BG */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#EDA20C_0%,#F7C245_100%)]" />

      {/* RADIAL PATTERN */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="
            absolute
            w-[1542px]
            h-[980px]
            left-1/2
            top-[-69px]
            -translate-x-1/2
            rounded-full
            bg-[#EECE7B]
          "
        />

        {/* SWIRL RINGS */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_0%,transparent_22%,rgba(255,255,255,0.08)_22.5%,transparent_23%,transparent_33%,rgba(255,255,255,0.08)_33.5%,transparent_34%,transparent_44%,rgba(255,255,255,0.08)_44.5%,transparent_45%,transparent_55%,rgba(255,255,255,0.08)_55.5%,transparent_56%)]
          "
        />
      </div>

      <div className="relative z-20 h-full">
        
        {/* HEADING */}
        <div className="absolute left-1/2 top-[48px] -translate-x-1/2 w-[386px] h-[98px]">
          
          {/* TOP TAG */}
          <div className="relative w-[412px] h-[52px] left-1/2 -translate-x-1/2">
            
            <div
              className="
                absolute
                inset-0
                bg-[#FBE1AC]
                skew-x-[-12deg]
              "
            />

            <h2
              className="
                absolute
                inset-0
                flex
                items-center
                justify-center
                font-['Paytone_One']
                text-[46px]
                leading-[48px]
                uppercase
                tracking-[-0.005em]
                text-[#4A3016]
              "
            >
              Special Offers
            </h2>
          </div>

          {/* FOR YOU */}
          <div className="absolute left-1/2 top-[52px] -translate-x-1/2">
            <h3
              className="
                font-['Paytone_One']
                text-[46px]
                leading-[48px]
                uppercase
                tracking-[-0.005em]
                text-white
                text-center
                whitespace-nowrap
              "
            >
              For You
            </h3>
          </div>
        </div>

        {/* CARDS */}
        <div
          className="
            absolute
            left-1/2
            top-[203px]
            -translate-x-1/2
            flex
            items-center
            gap-5
          "
        >
          

          {/* CENTER CARDS */}
          <OfferCard {...offersData[0]} />
          <OfferCard {...offersData[1]} />
          <OfferCard {...offersData[2]} />

          {/* RIGHT PARTIAL */}
          <div className="-mr-[215px]">
            <OfferCard {...offersData[3]} />
          </div>
        </div>

        {/* CTA */}
        <button
          className="
            absolute
            left-1/2
            top-[619px]
            -translate-x-1/2
            w-[249px]
            h-[48px]
            rounded-full
            bg-white
            flex
            items-center
            justify-center
            font-['Quicksand']
            font-bold
            text-[16px]
            leading-[20px]
            tracking-[-0.005em]
            text-[#110A02]
          "
        >
          Explore All Offers
        </button>

        {/* BUTTONS */}
        <div className="absolute right-[58px] top-[621px]">
          <OffersCarouselButtons />
        </div>
      </div>
    </section>
  );
}

export default OffersSection;