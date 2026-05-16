import merchandiseData from "../../data/merchandiseDataa";
import MerchandiseCard from "../cards/MerchandiseCard";
import CarouselButtons from "../ui/CarouselButtons";

const MerchandiseSection = () => {
  return (
    <section className="overflow-hidden bg-white py-[22px]">
      <div className="mx-auto max-w-[1366px]">
        {/* TITLE */}
        <div className="flex justify-center">
          <div className="flex items-center gap-[4px]">
            <h2
              className="
                font-['Paytone_One']
                text-[46px]
                leading-[48px]
                uppercase
                tracking-[-0.005em]
                text-[#110A02]
              "
            >
              {merchandiseData.titleTop}
            </h2>

            <div
              className="
                skew-x-[-12deg]
                bg-[#EDA20C]
                px-[24px]
                py-[2px]
              "
            >
              <span
                className="
                  block
                  skew-x-[12deg]
                  font-['Paytone_One']
                  text-[46px]
                  leading-[48px]
                  uppercase
                  tracking-[-0.005em]
                  text-white
                "
              >
                {merchandiseData.titleBottom}
              </span>
            </div>
          </div>
        </div>

        {/* PRIMARY TABS */}
        <div className="mt-[34px] flex justify-center">
          <div
            className="
              flex
              items-center
              gap-[5px]
              rounded-full
              border
              border-[#E7E2D9]
              bg-white
              p-[4px]
            "
          >
            {merchandiseData.categories.map((item) => (
              <button
                key={item}
                className={`
                  h-[44px]
                  min-w-[120px]
                  rounded-full
                  px-[20px]
                  font-['Quicksand']
                  text-[15px]
                  font-bold
                  transition-all

                  ${
                    item === merchandiseData.activeCategory
                      ? "bg-[#4A3016] text-white shadow"
                      : "text-[#4A3016]"
                  }
                `}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* SECONDARY TABS */}
        <div className="mt-[24px] flex justify-center gap-[10px]">
          {merchandiseData.subCategories.map((item) => (
            <button
              key={item}
              className={`
                border-b
                px-[10px]
                pb-[8px]
                font-['Quicksand']
                text-[16px]
                font-bold
                leading-[18px]
                tracking-[-0.005em]

                ${
                  item === merchandiseData.activeSubCategory
                    ? "border-[#F7C259] text-[#EDA20C]"
                    : "border-transparent text-[#110A02]"
                }
              `}
            >
              {item}
            </button>
          ))}
        </div>

        {/* PRODUCTS */}
        <div className="mt-[52px] flex justify-center gap-[20px]">
          {merchandiseData.products.map((item) => (
            <MerchandiseCard
              key={item.id}
              item={item}
            />
          ))}
        </div>

        {/* BOTTOM */}
        <div className="mt-[42px] flex items-center justify-center gap-[330px]">
          <button
            className="
              h-[52px]
              rounded-full
              border
              border-black/30
              px-[26px]
              font-['Quicksand']
              text-[18px]
              font-bold
              tracking-[-0.005em]
              text-[#110A02]
            "
          >
            {merchandiseData.buttonText}
          </button>

          <CarouselButtons />
        </div>
      </div>
    </section>
  );
};

export default MerchandiseSection;