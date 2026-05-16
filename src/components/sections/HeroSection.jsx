// src/components/sections/HeroSection.jsx
import elephantGif from "../../assets/experienceSection/elephant.gif";

function HeroSection() {
  return (
    <section className="relative w-full h-[700px] overflow-hidden bg-white">
      {/* BACKGROUND IMAGE / VIDEO PLACEHOLDER */}


      {/* TOP DARK GRADIENT */}
      <div className="absolute top-0 left-0 w-full h-[215px] bg-gradient-to-b from-black/60 to-transparent z-[1]" />

      {/* BOTTOM DARK GRADIENT */}
      <div className="absolute bottom-0 left-0 w-full h-[350px] bg-gradient-to-t from-black/70 to-transparent z-[1]" />

      {/* CENTER CONTENT */}
      <div className="absolute left-1/2 top-[370px] -translate-x-1/2 z-20 flex flex-col items-center gap-5">

        {/* TITLE */}
        <h1
          className="
            w-[550px]
            text-center
            font-['Paytone_One']
            text-[64px]
            leading-[70px]
            uppercase
            tracking-[-0.005em]
            text-white
          "
          style={{
            textShadow: "0px 0.896894px 0.448447px #CC54EE",
          }}
        >
          INDIA’S FAVORITE
        </h1>

        {/* SUBTITLE */}
        <div className="flex items-center justify-center w-[396px] h-[31px]">

          {/* LEFT LINE */}
          <div className="w-[34px] h-px bg-[#DCA642]" />

          {/* TEXT */}
          <p
            className="
              mx-5
              font-['Quicksand']
              font-semibold
              text-[25px]
              leading-[31px]
              tracking-[0.03em]
              uppercase
              text-white
              whitespace-nowrap
            "
          >
            Holiday Destination
          </p>

          {/* RIGHT LINE */}
          <div className="w-[34px] h-px bg-[#DCA642]" />
        </div>

        {/* CTA */}
        <button
          className="
            w-[198px]
            h-[52px]
            rounded-full
            bg-[#EDA20C]
            text-white
            font-['Quicksand']
            font-bold
            text-[18px]
            leading-[20px]
            tracking-[-0.005em]
            shadow-[0px_1.5px_0px_#DCA642,inset_-1.88406px_-2.26087px_5.27536px_rgba(255,255,255,0.25),inset_1.88406px_1.88406px_5.65217px_rgba(255,255,255,0.25)]
            transition-all
            duration-300
            hover:translate-y-[1px]
          "
        >
          Book Tickets
        </button>
      </div>

      <div className="bg-white absolute -bottom-0 z-40 h-[100px] w-full">

      </div>
      {/* ELEPHANT */}
      <div className="absolute z-50 right-[-14px] -bottom-6  z-20 overflow-hidden pl-5 w-[221px]  h-[335px]">

        {/* Elephant GIF */}
        <img
          src={elephantGif}
          alt="Elephant"
          className="w-[221px] h-[332px] object-cover drop-shadow-xl"
        />
      </div>
    </section>
  );
}

export default HeroSection;