// src/components/sections/WhatsNewSection.jsx

import WhatsNewCard from "../cards/WhatsNewCard";
import CarouselButtons from "../ui/CarouselButtons";

import whatsNewData from "../../data/whatsNewData";

import selfie from "../../assets/whatsNew/selfie.png";

function WhatsNewSection() {
  return (
    <section className="relative h-[714px] overflow-hidden">
      
      {/* MAIN BG */}
      <div className="absolute inset-0 bg-[linear-gradient(179.84deg,#075BBF_11.36%,#042858_99.86%)]" />

      {/* CONTENT */}
      <div className="relative z-20 h-full">
        
        {/* LEFT CONTENT */}
        <div className="absolute left-[54px] top-[66px]">
          
          {/* TITLE */}
          <div className="relative w-[343px] h-[102px]">
            
            {/* TOP */}
            <h2
              className="
                absolute
                left-1/2
                top-0
                -translate-x-1/2
                font-['Paytone_One']
                text-[46px]
                leading-[48px]
                tracking-[-0.005em]
                uppercase
                text-white
                whitespace-nowrap
              "
            >
              WHAT’S NEW
            </h2>

            {/* BOTTOM TAG */}
            <div className="absolute left-0 top-[50px] w-[343px] h-[52px]">
              
              <div className="absolute left-0 top-[4px] w-full h-[48px] bg-[#F7C259] skew-x-[-12deg]" />

              <h3
                className="
                  absolute
                  inset-0
                  flex
                  items-start
                  justify-center
                  font-['Paytone_One']
                  text-[46px]
                  leading-[48px]
                  tracking-[-0.005em]
                  uppercase
                  text-[#110A02]
                "
              >
                AT IMAGICAA
              </h3>
            </div>
          </div>

          {/* CHARACTER */}
          <div className="relative w-[419px] h-[462px] mt-[58px]">
            
            {/* SHADOW */}
            <div
              className="
                absolute
                left-[127px]
                bottom-[0px]
                w-[108px]
                h-[8px]
                rounded-full
                bg-[#808080]
                blur-[3px]
              "
            />

            {/* CHARACTER IMAGE */}
            <img
              src={selfie}
              alt="Character"
              className="
                absolute
                left-[-10px]
                top-[0px]
                w-[380px]
                h-[380px]
                object-contain
              "
            />
          </div>
        </div>

        {/* CARDS */}
        <div
          className="
            absolute
            left-[650px]
            top-[64px]
            flex
            items-start
            gap-[18px]
          "
        >
          
          {/* CARD 1 */}
          <div className="relative z-30">
            <WhatsNewCard
              {...whatsNewData[0]}
              variant="large"
            />
          </div>

          {/* CARD 2 */}
          <div className="relative z-20 -ml-[6px] mt-[18px]">
            <WhatsNewCard
              {...whatsNewData[1]}
              variant="medium"
            />
          </div>

          {/* CARD 3 */}
          <div className="relative z-10 -ml-[6px] mt-[36px]">
            <WhatsNewCard
              {...whatsNewData[2]}
              variant="small"
            />
          </div>
        </div>

        {/* BUTTONS */}
        <div className="absolute right-[58px] top-[518px]">
          <CarouselButtons />
        </div>
      </div>

      {/* BOTTOM CURVED STRIP */}
      <div
        className="
          absolute
          left-1/2
          bottom-[-48px]
          -translate-x-1/2
          w-[1410px]
          h-[96px]
          rounded-[999px]
          bg-[#FBE1AC]
          z-30
        "
      >
        
        {/* TICKER */}
        <div
          className="
            absolute
            left-0
            top-[32px]
            whitespace-nowrap
            flex
            items-center
            gap-5
            text-[#4A3016]
            font-['Quicksand']
            font-semibold
            text-[18px]
          "
        >
          <span>5 Million+ Happy Visitors</span>
          <span>•</span>

          <span>5 Million+ Happy Customer</span>
          <span>•</span>

          <span>100% Safety Certified</span>
          <span>•</span>

          <span>5 Million+ Happy Visitors</span>
          <span>•</span>

          <span>5 Million+ Happy Customer</span>
          <span>•</span>

          <span>100% Safety Certified</span>
        </div>
      </div>
    </section>
  );
}

export default WhatsNewSection;