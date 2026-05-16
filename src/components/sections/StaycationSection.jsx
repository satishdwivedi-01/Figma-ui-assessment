// src/components/sections/StaycationSection.jsx

import {
  Play,
} from "lucide-react";

import staycationData from "../../data/staycationData";

import novotel from "../../assets/stayCation/novotel.png";

const StaycationSection = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#F5F2EC]
        pt-[25px]
        pb-[46px]
      "
    >
      {/* BACKGROUND PATTERN */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.12]
          pointer-events-none
        "
      >
        <div
          className="
            absolute
            -top-[120px]
            left-[-80px]
            h-[980px]
            w-[1542px]
            rounded-full
            bg-[#E6B840]
          "
        />
      </div>

      {/* TOP BLUR */}
      <div
        className="
          absolute
          top-0
          left-0
          w-full
          h-[173px]
          bg-gradient-to-b
          from-white
          to-transparent
          z-[1]
        "
      />

      {/* BOTTOM BLUR */}
      <div
        className="
          absolute
          bottom-0
          left-0
          w-full
          h-[173px]
          bg-gradient-to-t
          from-white
          to-transparent
          z-[1]
        "
      />

      <div className="relative z-10">
        {/* HEADING */}
        <div
          className="
            flex
            flex-col
            items-center
            gap-[5px]
          "
        >
          <h2
            className="
              font-['Paytone_One']
              text-[46px]
              leading-[48px]
              tracking-[-0.005em]
              uppercase
              text-[#110A02]
            "
          >
            STAYCATION
          </h2>

          <div className="relative h-[49px] w-[275px]">
            <div
              className="
                absolute
                top-[1px]
                left-1/2
                h-[48px]
                w-[268px]
                -translate-x-1/2
                bg-[#EDA20C]
                skew-x-[-12deg]
              "
            />

            <span
              className="
                absolute
                inset-0
                flex
                items-center
                justify-center
                font-['Paytone_One']
                text-[46px]
                leading-[48px]
                tracking-[-0.005em]
                uppercase
                text-white
              "
            >
              PACKAGES
            </span>
          </div>
        </div>

        {/* MAIN CARD */}
        <div
          className="
            relative
            mx-auto
            mt-[56px]
            h-[465px]
            w-[1216px]
            overflow-hidden
            rounded-[16px]
          "
        >
          {/* IMAGE */}
          <img
            src={novotel}
            alt="Novotel Imagicaa"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
            "
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/25" />

          {/* TOP GOLD BLUR */}
          <div
            className="
              absolute
              left-1/2
              top-[-36px]
              h-[150px]
              w-[600px]
              -translate-x-1/2
              rounded-full
              bg-[#E1AC61]/60
              blur-[75px]
            "
          />

          {/* BOTTOM GOLD BLUR */}
          <div
            className="
              absolute
              left-1/2
              bottom-[-140px]
              h-[300px]
              w-[1246px]
              -translate-x-1/2
              rounded-full
              bg-[#C1A251]
              opacity-80
              blur-[100px]
            "
          />

          {/* BADGE */}
          <div
            className="
              absolute
              left-1/2
              top-0
              z-20
              h-[31px]
              w-[174px]
              -translate-x-1/2
            "
          >
            <div
              className="
                absolute
                bottom-[3px]
                left-1/2
                h-[28px]
                w-[172px]
                -translate-x-1/2
                rounded-b-[18px]
                bg-white
              "
            />

            <div
              className="
                absolute
                inset-0
                flex
                items-center
                justify-center
              "
            >
              <span
                className="
                  font-['Quicksand']
                  text-[14px]
                  font-semibold
                  leading-[18px]
                  tracking-[-0.005em]
                  text-[#110A02]
                "
              >
                {staycationData.badge}
              </span>
            </div>
          </div>

          {/* CONTENT */}
          <div
            className="
              relative
              z-10
              flex
              h-full
              flex-col
              items-center
              pt-[50px]
              text-center
            "
          >
            {/* TITLE */}
            <h2
              className="
                font-['Paytone_One']
                text-[38px]
                leading-[53px]
                tracking-[-0.005em]
                text-white
              "
            >
              {staycationData.title}
            </h2>

            {/* PLAY BUTTON */}
            <button
              className="
                mt-[82px]
                flex
                h-[58px]
                w-[58px]
                items-center
                justify-center
                rounded-full
                bg-gradient-to-b
                from-[#322D29]
                to-[#583D0B]
              "
            >
              <Play
                size={18}
                fill="#EFEAE1"
                color="#EFEAE1"
                className="ml-[3px]"
              />
            </button>

            {/* SUBTITLE */}
            <p
              className="
                mt-[62px]
                max-w-[509px]
                font-['Quicksand']
                text-[18px]
                font-semibold
                leading-[22px]
                text-white
              "
            >
              {staycationData.subtitle}
            </p>

            {/* BUTTONS */}
            <div
              className="
                mt-[24px]
                flex
                items-center
                gap-[12px]
              "
            >
              <button
                className="
                  flex
                  h-[48px]
                  items-center
                  justify-center
                  rounded-full
                  bg-[#EDA20C]
                  px-[20px]
                  font-['Quicksand']
                  text-[16px]
                  font-bold
                  leading-[20px]
                  tracking-[-0.005em]
                  text-white
                  shadow-[0px_1.5px_0px_#DCA642,inset_-1.88px_-2.26px_5.27px_rgba(255,255,255,0.25),inset_1.88px_1.88px_5.65px_rgba(255,255,255,0.25)]
                "
              >
                {staycationData.primaryButton}
              </button>

              <button
                className="
                  flex
                  h-[48px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#CECBC9]
                  px-[20px]
                  font-['Quicksand']
                  text-[16px]
                  font-bold
                  leading-[20px]
                  tracking-[-0.005em]
                  text-white
                "
              >
                {staycationData.secondaryButton}
              </button>
            </div>
          </div>

          {/* MASCOT */}
          <img
            src="/images/staycation-dog.png"
            alt="Mascot"
            className="
              absolute
              bottom-[-8px]
              right-[-6px]
              z-20
              w-[260px]
              object-contain
            "
          />
        </div>
      </div>
    </section>
  );
};

export default StaycationSection;