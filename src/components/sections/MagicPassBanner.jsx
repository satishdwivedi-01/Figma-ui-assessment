// src/components/sections/MagicPassBanner.jsx

import magicPassData from "../../data/magicPassData";

import magicPass from "../../assets/magicPass/magicPass.png";

const MagicPassBanner = () => {
  return (
    <section
      className="
        relative
        h-[389px]
        overflow-hidden
        bg-[#1488db]
      "
    >
      {/* FULL BACKGROUND IMAGE */}
      <img
        src={magicPass}
        alt="Magic Pass"
        className="
          absolute
          inset-0
          w-full
          h-[100%]
          object-cover
        "
      />

      {/* CONTENT */}
      <div
        className="
          absolute
          left-[916px]
          top-1/2
          -translate-y-1/2
          w-[490px]
          flex
          flex-col
          items-center
          gap-[40px]
          z-10
        "
      >
        {/* TOP CONTENT */}
        <div
          className="
            flex
            flex-col
            items-center
            gap-4
          "
        >
          {/* PILL */}
          <div
            className="
              flex
              items-end
              justify-center
              px-[20px]
              pt-[4px]
              pb-[8px]
              h-[38px]
              rounded-full
              border
              border-[#EDA20C]
              bg-white
              shadow-[inset_-1.5px_-1.8px_4px_rgba(255,255,255,0.25),inset_1.5px_1.5px_4px_rgba(255,255,255,0.25)]
            "
          >
            <span
              className="
                font-['Paytone_One']
                text-[24px]
                leading-[26px]
                tracking-[-0.005em]
                text-[#04336C]
              "
            >
              {magicPassData.pillText}
            </span>
          </div>

          {/* HEADING */}
          <div className="relative w-[491px] h-[92px]">
            
            {/* TOP */}
            <h2
              className="
                absolute
                top-0
                left-1/2
                -translate-x-1/2
                whitespace-nowrap
                text-center
                uppercase
                font-['Paytone_One']
                text-[36px]
                leading-[32px]
                tracking-[-0.005em]
                text-white
              "
            >
              {magicPassData.headingTop}
            </h2>

            {/* TAG */}
            <div
              className="
                absolute
                left-1/2
                top-[41px]
                -translate-x-1/2
                w-[420px]
                h-[48px]
                bg-[#F7C259]
                skew-x-[-12deg]
              "
            />

            {/* BOTTOM TEXT */}
            <h3
              className="
                absolute
                top-[41px]
                left-1/2
                -translate-x-1/2
                whitespace-nowrap
                uppercase
                text-center
                font-['Paytone_One']
                text-[36px]
                leading-[48px]
                tracking-[-0.005em]
                text-[#110A02]
              "
            >
              {magicPassData.headingBottom}
            </h3>
          </div>
        </div>

        {/* LOGOS */}
        <div
          className="
            flex
            items-center
            gap-[17px]
            h-[60px]
          "
        >
          {magicPassData.logos.map((logo, index) => (
            <div
              key={logo.id}
              className="flex items-center gap-[17px]"
            >
              <img
                src={logo.image}
                alt={logo.name}
                className={logo.className}
              />

              {index !== magicPassData.logos.length - 1 && (
                <div
                  className="
                    h-[34px]
                    w-[1px]
                    bg-[#F7C259]
                    opacity-70
                  "
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MagicPassBanner;