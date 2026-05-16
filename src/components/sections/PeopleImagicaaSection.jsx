import peopleImagicaaData from "../../data/peopleImagicaaData";
import ReelCard from "../cards/ReelCard";
import CarouselButtons from "../ui/CarouselButtons";

const PeopleImagicaaSection = () => {
  return (
    <section
      className="
        overflow-hidden
        bg-[linear-gradient(180deg,#075BBF_5.43%,#042858_99.98%)]
        py-[64px]
      "
    >
      <div className="mx-auto max-w-[1366px] px-[80px]">

        {/* TOP */}
        <div className="flex items-start justify-between">

          {/* HEADING */}
          <div className="flex flex-col gap-[4px]">

            <h2
              className="
                font-paytone
                text-[46px]
                leading-[48px]
                uppercase
                text-white
              "
            >
              {peopleImagicaaData.titleTop}
            </h2>

            <div
              className="
                relative
                h-[48px]
                w-fit
                bg-[#F7C259]
                px-[22px]
              "
            >
              <span
                className="
                  font-paytone
                  text-[46px]
                  leading-[48px]
                  uppercase
                  text-[#110A02]
                  whitespace-nowrap
                "
              >
                {peopleImagicaaData.titleBottom}
              </span>
            </div>
          </div>

          {/* TABS */}
          <div
            className="
              flex
              items-center
              gap-[8px]
              rounded-full
              bg-[rgba(17,10,2,0.30)]
              p-[3px]
            "
          >
            {peopleImagicaaData.tabs.map((item) => (
              <button
                key={item}
                className={`
                  h-[42px]
                  rounded-full
                  px-[22px]
                  text-[16px]
                  font-bold
                  transition-all
                  duration-300

                  ${
                    item === peopleImagicaaData.activeTab
                      ? "bg-white text-[#04336C] shadow-[0px_2px_2px_rgba(35,35,35,0.18)]"
                      : "text-white"
                  }
                `}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* CARDS */}
        <div className="mt-[58px] flex gap-[20px]">

          {peopleImagicaaData.reels.map((item) => (
            <ReelCard
              key={item.id}
              item={item}
            />
          ))}
        </div>

        {/* BOTTOM */}
        <div className="mt-[50px] flex justify-center">
          <CarouselButtons />
        </div>
      </div>
    </section>
  );
};

export default PeopleImagicaaSection;