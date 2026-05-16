// src/components/sections/HappyGuestsSection.jsx

import happyGuestsData from "../../data/happyGuestsData";
import ReviewCard from "../cards/ReviewCard";

import camera from "../../assets/testimonial1/camera.png";
import elephant from "../../assets/testimonial1/elephant.gif";
import group from "../../assets/testimonial1/group.png";

const HappyGuestsSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#F5F2EA] py-[28px]">
      {/* BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.10]">
        <div className="absolute left-1/2 top-1/2 h-[980px] w-[1542px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E6B840]" />
        <div className="absolute inset-0 bg-[repeating-conic-gradient(from_0deg_at_50%_55%,#000_0deg,#000_14deg,transparent_14deg,transparent_28deg)]" />
      </div>

      {/* Top & Bottom Blur */}
      <div className="absolute left-0 top-0 h-[160px] w-full bg-[linear-gradient(180deg,#F5F2EA_10%,rgba(245,242,234,0)_100%)]" />
      <div className="absolute bottom-0 left-0 h-[160px] w-full rotate-180 bg-[linear-gradient(180deg,#F5F2EA_10%,rgba(245,242,234,0)_100%)]" />

      <div className="relative z-10 mx-auto w-full max-w-[1366px]">
        {/* HEADING */}
        <div className="relative mx-auto h-[166px] w-[360px]">
          <h2 className="text-center font-['Paytone_One'] text-[82px] leading-[70px] uppercase tracking-[-0.005em] text-[#110A02]">
            {happyGuestsData.titleTop}
          </h2>

          <div className="absolute left-0 top-[88px] h-[48px] w-full bg-[#EDA20C]" />

          <h3 className="absolute left-1/2 top-[88px] -translate-x-1/2 whitespace-nowrap font-['Paytone_One'] text-[46px] leading-[48px] uppercase tracking-[-0.005em] text-white">
            {happyGuestsData.titleBottom}
          </h3>

          <p className="absolute left-1/2 top-[145px] -translate-x-1/2 whitespace-nowrap font-['Quicksand'] text-[16px] font-semibold leading-[20px] tracking-[-0.005em] text-[#835907]">
            {happyGuestsData.subtitle}
          </p>
        </div>

        {/* COMPOSITION */}
        <div className="relative mt-[4px] h-[420px]">
          {/* LEFT STACK */}
          <div className="absolute left-[78px] top-[22px] flex flex-col items-end gap-[16px]">
            {/* Camera Image */}
            <div className="h-[191px] w-[292px] rounded-[12px] overflow-hidden shadow-md">
              <img
                src={camera}
                alt="Camera"
                className="w-full h-full object-cover"
              />
            </div>

            <ReviewCard
              item={happyGuestsData.reviews[0]}
              className="w-[292px]"
            />
          </div>

          {/* ELEPHANT GIF */}
          <div className="absolute left-[365px] top-[122px] h-[300px] w-[260px] rounded-[24px] overflow-hidden shadow-xl">
            <img
              src={ elephant}
              alt="Happy Elephant"
              className="w-full h-full object-cover"
            />
          </div>

          {/* CENTER CARD */}
          <ReviewCard
            item={happyGuestsData.reviews[1]}
            className="absolute left-[55%] top-[183px] w-[291px] -translate-x-1/2"
          />

          {/* RIGHT STACK */}
          <div className="absolute right-[78px] top-[22px] flex flex-col gap-[16px]">
            <ReviewCard
              item={happyGuestsData.reviews[2]}
              className="w-[292px]"
            />

            {/* Group Image */}
            <div className="h-[191px] w-[292px] rounded-[12px] overflow-hidden shadow-md">
              <img
                src={group}
                alt="Group"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-[108px] mr-10  flex justify-center">
          <button className="flex h-[48px] items-center justify-center rounded-full bg-[#EDA20C] px-[28px] font-['Quicksand'] text-[16px] font-bold leading-[20px] tracking-[-0.005em] text-white shadow-[0px_1.5px_0px_#DCA642,inset_-1.88px_-2.26px_5.27px_rgba(255,255,255,0.25),inset_1.88px_1.88px_5.65px_rgba(255,255,255,0.25)]">
            {happyGuestsData.buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HappyGuestsSection;