import faqData from "../../data/faqData";
import FAQAccordion from "../cards/FAQAccordion";

import dog from "../../assets/FAQ/dog.png";

const FAQSection = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#F1B51C]
        py-[60px]
      "
    >
      {/* BURST */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.14]
          bg-[repeating-conic-gradient(from_0deg_at_50%_50%,rgba(255,255,255,0.8)_0deg,transparent_12deg,transparent_24deg)]
        "
      />

      <div className="relative z-10 mx-auto max-w-[1366px] px-[70px]">

        {/* MASCOT IMAGE */}
        <div
          className="
    absolute
    right-[40px]
    top-[-20px]
    h-[220px]
    w-[200px]
    rounded-[40px]
    overflow-hidden
   
  "
        >
          <img
            src={dog}   // ← Import your image here
            alt="Imagicaa Mascot"
            className="h-full w-full object-cover"
          />
        </div>

        {/* HEADING */}
        <div className="flex flex-col items-center">

          <h2
            className="
              font-paytone
              text-[62px]
              leading-none
              uppercase
              text-white
            "
          >
            {faqData.title}
          </h2>

          <p
            className="
              mt-[6px]
              text-[16px]
              font-medium
              uppercase
              tracking-wide
              text-white
            "
          >
            {faqData.subtitle}
          </p>
        </div>

        {/* TABS */}
        <div className="mt-[34px] flex justify-center gap-[42px]">

          {faqData.tabs.map((item) => (
            <button
              key={item}
              className={`
                relative
                pb-[8px]
                text-[16px]
                font-medium

                ${item === faqData.activeTab
                  ? "text-white"
                  : "text-white/90"
                }
              `}
            >
              {item}

              {item === faqData.activeTab && (
                <div className="absolute bottom-0 left-0 h-[2px] w-full bg-white" />
              )}
            </button>
          ))}
        </div>

        {/* FAQ GRID */}
        <div className="mt-[42px] grid grid-cols-2 gap-x-[34px] gap-y-[14px]">

          <div className="space-y-[14px]">
            {faqData.leftFaqs.map((item) => (
              <FAQAccordion
                key={item.id}
                item={item}
              />
            ))}
          </div>

          <div className="space-y-[14px]">
            {faqData.rightFaqs.map((item) => (
              <FAQAccordion
                key={item.id}
                item={item}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-[52px] flex justify-center">

          <button
            className="
              rounded-full
              border
              border-[#7A5714]
              px-[34px]
              py-[14px]
              text-[16px]
              font-bold
              text-black
            "
          >
            {faqData.buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;