// src/components/cards/ExperienceCard.jsx

const variantStyles = {
  theme: {
    card: "bg-[#EDA20C]",
    overlay: "bg-[linear-gradient(4.85deg,rgba(225,135,9,0.5)_8.84%,#E16709_20.69%)]",
  },
  water: {
    card: "bg-[linear-gradient(102.82deg,#4091D0_6.66%,#C7E2F7_103.18%)]",
    overlay: "bg-[linear-gradient(4.85deg,rgba(9,157,225,0.5)_8.84%,#099DE1_20.69%)]",
  },
  snow: {
    card: "bg-[linear-gradient(120deg,#4F2EE8_10%,#7B5EFF_90%)]",
    overlay: "",
  },
  trampoline: {
    card: "bg-[linear-gradient(164.94deg,#9FA610_-17.68%,#BCC504_100.44%)]",
    overlay: "bg-[#ABB30B]",
  },
};

function ExperienceCard({
  title,
  description,
  variant = "theme",
  large = false,
  image,
}) {
  const styles = variantStyles[variant];

  return (
    <div
      className={`
        relative overflow-hidden rounded-[12px] ${styles.card}
        ${large ? "w-[385px] h-[377px]" : "w-[456px] h-[183px]"}
      `}
    >
      {/* IMAGE - Special handling for Snow */}
      {image && variant === "snow" ? (
        <img
          src={typeof image === "string" ? image : undefined}
          alt={title || "Experience"}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : image ? (
        // Normal image positioning for other variants
        <div
          className={`
            absolute
            ${large
              ? `right-0 bottom-[-45px] ${variant === "water" ? "w-[406px] h-[299px] right-[-56px] bottom-[-30px]" : "w-[255px] h-[293px]"}`
              : variant === "snow"
                ? "right-[-33px] bottom-[-10px] w-[265px] h-[174px]"
                : "left-[198px] top-[-51px] w-[270px] h-[247px]"
            }
          `}
        >
          <img
            src={typeof image === "string" ? image : undefined}
            alt={title || "Experience"}
            className="w-full h-full object-cover rounded-[12px]"
          />
        </div>
      ) : null}

      {/* BLUR OVERLAY - Only for non-snow */}
      {variant !== "snow" && (
        <div
          className={`
            absolute blur-[30px] opacity-100 ${styles.overlay}
            ${
              large
                ? "w-[265px] h-[298px] left-[-6px] top-[-25px] -rotate-90"
                : "w-[202px] h-[124px] left-[135px] top-[28px] rotate-90 rounded-full blur-[22px]"
            }
          `}
        />
      )}

      {/* TEXT CONTENT - Higher z-index so it's always on top */}
      <div className="absolute left-4 top-4 z-20 flex flex-col items-start gap-[10px]">
        <h3
          className="font-['Paytone_One'] text-white tracking-[-0.005em] text-[32px] leading-[38px]"
        >
          {title}
        </h3>

        <p
          className="whitespace-pre-line font-['Quicksand'] font-bold text-[16px] leading-[18px] tracking-[-0.005em] text-[#F9E6CF]"
        >
          {description}
        </p>

        <button
          className="
            h-[42px] px-6 rounded-full border border-white/80 text-white 
            font-['Quicksand'] font-bold text-[16px] tracking-[-0.005em]
             transition-all duration-300
          "
        >
          Explore More
        </button>
      </div>
    </div>
  );
}

export default ExperienceCard;