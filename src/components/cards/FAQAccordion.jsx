const FAQAccordion = ({ item }) => {
  return (
    <div className="rounded-[14px] bg-[#F4D47A] p-[1px]">

      <div className="overflow-hidden rounded-[13px] bg-[#EFEFEF]">

        {/* HEADER */}
        <button
          className="
            flex
            w-full
            items-center
            justify-between
            px-[22px]
            py-[18px]
            text-left
          "
        >
          <span
            className="
              text-[16px]
              font-medium
              text-[#2B241D]
            "
          >
            {item.question}
          </span>

          <span
            className="
              text-[24px]
              font-semibold
              text-[#5B4318]
            "
          >
            {item.expanded ? "−" : "+"}
          </span>
        </button>

        {/* BODY */}
        {item.expanded && (
          <div className="px-[22px] pb-[20px]">

            <p
              className="
                max-w-[90%]
                text-[14px]
                leading-[22px]
                text-[#5C5246]
              "
            >
              {item.answer}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQAccordion;