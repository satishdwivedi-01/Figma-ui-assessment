// src/components/cards/ReviewCard.jsx

const ReviewCard = ({ item, className = "" }) => {
  return (
    <div
      className={`
        rounded-[12px]
        px-[22px]
        py-[22px]
        ${className}
      `}
      style={{
        background: item.background,
      }}
    >
      <div className="flex flex-col gap-[20px]">
        {/* TEXT */}
        <div className="flex flex-col gap-[12px]">
          <h3
            className="
              font-['Paytone_One']
              text-[24px]
              leading-[26px]
              tracking-[-0.005em]
            "
            style={{
              color: item.accent,
            }}
          >
            “{item.title}”
          </h3>

          <p
            className="
              font-['Quicksand']
              text-[16px]
              font-semibold
              leading-[20px]
              tracking-[-0.005em]
              text-[#53441A]
            "
          >
            {item.content}
          </p>
        </div>

        {/* AUTHOR */}
        <div className="flex flex-col gap-[12px]">
          <div className="h-px w-full bg-black/10" />

          <div className="flex flex-col gap-[2px]">
            <h4
              className="
                font-['Quicksand']
                text-[18px]
                font-semibold
                leading-[22px]
                text-[#101F3B]
              "
            >
              {item.author}
            </h4>

            <p
              className="
                font-['Quicksand']
                text-[14px]
                font-semibold
                leading-[18px]
                tracking-[-0.005em]
                text-[#3A3937]
              "
            >
              {item.role}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;