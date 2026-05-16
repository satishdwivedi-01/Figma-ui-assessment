// src/components/cards/DiningCard.jsx

const DiningCard = ({ item }) => {
  return (
    <div
      className="
        group
        relative
        h-[414px]
        w-[323px]
        shrink-0
        overflow-hidden
        rounded-[14px]
      "
    >
      {/* IMAGE */}
      <img
        src={item.image}
        alt={item.title}
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          transition-transform
          duration-700
          group-hover:scale-105
        "
      />

      {/* OVERLAY */}
      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(180deg,rgba(0,0,0,0)_25%,rgba(0,0,0,0.72)_100%)]
        "
      />

      {/* GREEN / BLUE GLOW */}
      <div
        className="
          absolute
          bottom-[-90px]
          left-1/2
          h-[240px]
          w-[430px]
          -translate-x-1/2
          rounded-full
          blur-[75px]
        "
        style={{
          background: item.glow,
        }}
      />

      {/* CONTENT */}
      <div
        className="
          absolute
          bottom-[16px]
          left-[16px]
          z-10
          flex
          w-[280px]
          flex-col
          gap-[12px]
        "
      >
        <div className="flex flex-col gap-[4px]">
          <h3
            className="
              font-['Paytone_One']
              text-[32px]
              leading-[38px]
              tracking-[-0.005em]
              text-white
            "
          >
            {item.title}
          </h3>

          <p
            className="
              font-['Quicksand']
              text-[16px]
              font-semibold
              leading-[20px]
              tracking-[-0.005em]
              text-white
            "
          >
            {item.subtitle}
          </p>
        </div>

        {/* TAGS */}
        <div className="flex flex-wrap gap-[6px]">
          {item.tags.map((tag) => (
            <div
              key={tag}
              className="
                flex
                h-[26px]
                items-center
                justify-center
                rounded-[8px]
                border
                border-white/25
                bg-white/10
                px-[10px]
                backdrop-blur-[8px]
              "
            >
              <span
                className="
                  font-['Quicksand']
                  text-[12px]
                  font-semibold
                  text-white
                "
              >
                {tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiningCard;