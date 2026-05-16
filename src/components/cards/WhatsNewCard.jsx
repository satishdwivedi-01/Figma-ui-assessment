// src/components/cards/WhatsNewCard.jsx

function WhatsNewCard({
  tag,
  number,
  title,
  description,
  image,
  variant = "large",
}) {
  const variants = {
    large: {
      wrapper: "w-[353px] h-[454px] opacity-100",
      image: "w-[344px] h-[445px]",
      content: "w-[313px]",
      number: "text-[46px] leading-[48px]",
      title: "text-[24px] leading-[26px]",
      desc: "text-[16px] leading-[18px] w-[277px]",
      button: "w-[313px]",
    },

    medium: {
      wrapper: "w-[325px] h-[418px] opacity-80",
      image: "w-[316px] h-[409px]",
      content: "w-[281px]",
      number: "text-[38px] leading-[53px]",
      title: "text-[20px] leading-[20px]",
      desc: "text-[12px] leading-[15px] w-[217px]",
      button: "w-[281px]",
    },

    small: {
      wrapper: "w-[297px] h-[382px] opacity-60",
      image: "w-[288px] h-[373px]",
      content: "w-[261px]",
      number: "text-[32px] leading-[38px]",
      title: "text-[16px] leading-[20px]",
      desc: "text-[12px] leading-[15px] w-[217px]",
      button: "w-[261px]",
    },
  };

  const current = variants[variant];

  return (
    <div
      className={`
        relative
        rounded-[14px]
        overflow-hidden
        bg-[#0E4EA7]
        ${current.wrapper}
      `}
    >
      {/* IMAGE */}
      <div
        className={`
          absolute
          left-1/2
          top-[4px]
          -translate-x-1/2
          rounded-[14px]
          overflow-hidden
          ${current.image}
        `}
      >
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-[#3A69B5]" />
        )}

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#03599B]/95 via-[#03599B]/40 to-transparent" />
      </div>

      {/* TAG */}
      <div
        className="
          absolute
          left-1/2
          top-[2px]
          -translate-x-1/2
          w-[118px]
          h-[26px]
          bg-white
          rounded-b-[18px]
          flex
          items-center
          justify-center
        "
      >
        <span
          className="
            font-['Quicksand']
            font-semibold
            text-[14px]
            leading-[18px]
            tracking-[-0.005em]
            text-[#110A02]
          "
        >
          {tag}
        </span>
      </div>

      {/* CONTENT */}
      <div
        className={`
          absolute
          left-1/2
          bottom-[20px]
          -translate-x-1/2
          flex
          flex-col
          gap-3
          ${current.content}
        `}
      >
        {/* NUMBER */}
        <div
          className={`
            font-['Paytone_One']
            tracking-[-0.005em]
            uppercase
            text-white
            ${current.number}
          `}
        >
          {number}
        </div>

        {/* TEXT */}
        <div className="flex flex-col gap-[6px]">
          
          <h3
            className={`
              font-['Paytone_One']
              tracking-[-0.005em]
              text-white
              ${current.title}
            `}
          >
            {title}
          </h3>

          <p
            className={`
              font-['Quicksand']
              font-bold
              text-[#F9E6CF]
              tracking-[-0.005em]
              ${current.desc}
            `}
          >
            {description}
          </p>
        </div>

        {/* BUTTON */}
        <button
          className={`
            h-[42px]
            rounded-full
            border
            border-white
            flex
            items-center
            justify-center
            font-['Quicksand']
            font-bold
            text-[16px]
            leading-[20px]
            tracking-[-0.005em]
            text-white
            ${current.button}
          `}
        >
          Explore More
        </button>
      </div>
    </div>
  );
}

export default WhatsNewCard;