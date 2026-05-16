// src/components/sections/PopularRidesSection.jsx

import RideCard from "../cards/RideCard";
import CarouselButtons from "../ui/CarouselButtons";
import ridesData from "../../data/ridesData";

import train from "../../assets/popularRides/train.png";
import union from "../../assets/popularRides/Union.png";

function PopularRidesSection() {
  return (
    <section className="relative h-[963px] overflow-hidden bg-white">

      {/* MAIN BLUE BG */}
      <div className="absolute inset-0 bg-[linear-gradient(180.02deg,#075BBF_13.78%,#042858_92.59%)]" />

      {/* TOP WAVE */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg
          viewBox="0 0 1440 180"
          className="relative block w-full h-[180px]"
          preserveAspectRatio="none"
        >
          <path
            d="
              M0,70
              C80,20 180,120 300,70
              C420,20 470,-20 600,70
              C700,140 790,10 920,70
              C1040,130 1110,10 1230,60
              C1320,100 1390,40 1440,20
              L1440,0
              L0,0
              Z
            "
            fill="#ffffff"
          />
        </svg>
      </div>

      {/* TRAIN */}
      <div className="absolute left-[80px] top-[2%] z-20 rotate-[8deg]">
        <img
          src={train}
          alt=""
          className="w-[154px]"
        />
      </div>

      {/* CENTER CURVED PANEL */}
      <div className="absolute left-1/2 top-[3px] -translate-x-1/2 z-20">


        {/* union */}
        <div className="relative top-18 -right-1 h-[800px] w-[750px]  ">
          <div className="absolute top-0 left-0  h-full w-full ">
            <img src={union} alt="union" className="object-fill h-[300px] w-full " />
          </div>
        </div>

        <span
          className="
              absolute
              left-[-90px]
              top-1/2
              -translate-y-1/2
              font-['Quicksand']
              font-bold
              text-[22px]
              text-white
            "
        >
          Family
        </span>

        <span
          className="
              font-['Quicksand']
              font-bold
              text-[22px]
              text-white
            "
        >
          Kids
        </span>
        <span
          className="
              mt-4
              font-['Quicksand']
              font-bold
              text-[22px]
              text-white
            "
        >
          Thrill
        </span>

        {/* HEADING */}
        <div className="absolute left-1/2 top-[110px] -translate-x-1/2 flex flex-col items-center gap-7 z-30">

          {/* TITLE */}
          <div className="relative w-[406px] h-[50px]">

            <h2
              className="
                absolute
                left-0
                top-0
                font-['Paytone_One']
                text-[46px]
                leading-[48px]
                uppercase
                tracking-[-0.005em]
                text-white
              "
            >
              Popular
            </h2>

            <div className="absolute right-0 top-[2px] w-[179px] h-[48px] bg-[#F7C259]" />

            <h3
              className="
                absolute
                right-[24px]
                top-[-2px]
                font-['Paytone_One']
                text-[46px]
                leading-[48px]
                uppercase
                tracking-[-0.005em]
                text-[#110A02]
              "
            >
              Rides
            </h3>
          </div>

          {/* TABS */}
          <div
            className="
              flex
              items-center
              gap-2
              p-[3px]
              rounded-[90px]
              border
              border-black/10
              bg-[rgba(17,10,2,0.2)]
              h-[48px]
            "
          >
            <button
              className="
                h-[42px]
                min-w-[113px]
                px-[10px]
                rounded-full
                text-white
                font-['Quicksand']
                font-bold
                text-[16px]
                leading-[18px]
              "
            >
              Theme Park
            </button>

            <button
              className="
                h-[42px]
                min-w-[120px]
                px-4
                rounded-full
                bg-white
                shadow-[0px_2px_2px_rgba(35,35,35,0.18)]
                text-[#04336C]
                font-['Quicksand']
                font-bold
                text-[16px]
                leading-[18px]
              "
            >
              Water Park
            </button>
          </div>
        </div>


      </div>

      {/* RIDE CARDS */}
      <div className="absolute left-1/2 top-[344px] -translate-x-1/2 flex items-start gap-[48px] z-20">

        {/* LEFT PARTIAL */}
        <div className="-ml-[340px] mt-[40px] opacity-90">
          <RideCard {...ridesData[0]} />
        </div>

        {/* LEFT */}
        <div className="mt-[40px]">
          <RideCard {...ridesData[1]} />
        </div>

        {/* CENTER */}
        <div className="mt-[107px]">
          <RideCard {...ridesData[2]} />
        </div>

        {/* RIGHT */}
        <div className="mt-[40px]">
          <RideCard {...ridesData[3]} />
        </div>

        {/* RIGHT PARTIAL */}
        <div className="-mr-[340px] mt-[40px] opacity-90">
          <RideCard {...ridesData[4]} />
        </div>
      </div>

      {/* CAROUSEL BUTTONS */}
      <div className="absolute left-1/2 bottom-[27px] -translate-x-1/2 z-30">
        <CarouselButtons />
      </div>
    </section>
  );
}

export default PopularRidesSection;