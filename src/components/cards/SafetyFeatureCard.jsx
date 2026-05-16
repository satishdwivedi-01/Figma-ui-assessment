// src/components/cards/SafetyFeatureCard.jsx

const SafetyFeatureCard = ({ item }) => {
  return (
    <div
      className="
        flex
        w-[128px]
        flex-col
        items-start
      "
    >
      {/* ICON */}
      <div className="relative">
        {/* BG CIRCLE */}
        <div
          className="
            absolute
            left-[10px]
            top-[10px]
            h-[28px]
            w-[28px]
            rounded-full
            bg-[#8F98CB]
            opacity-90
          "
        />

        <img
          src={item.icon}
          alt={item.title}
          className="
            relative
            z-10
            h-[74px]
            w-[74px]
            object-contain
          "
        />
      </div>

      {/* TITLE */}
      <p
        className="
          mt-[6px]
          whitespace-pre-line
          font-['Paytone_One']
          text-[16px]
          leading-[20px]
          text-white
        "
      >
        {item.title}
      </p>
    </div>
  );
};

export default SafetyFeatureCard;