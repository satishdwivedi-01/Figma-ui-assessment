function SectionTitle({
  topText,
  highlightText,
  align = "center",
  dark = false,
}) {
  return (
    <div className={`text-${align}`}>
      <h2
        className={`
          uppercase
          font-black
          leading-none
          tracking-tight
          ${dark ? "text-[#2f1800]" : "text-white"}
          text-[82px]
        `}
      >
        {topText}
      </h2>

      <div className="inline-block bg-[#f2b223] skew-x-[-12deg] px-7 py-2 mt-2">
        <div className="skew-x-[12deg]">
          <span className="uppercase font-black text-[70px] leading-none text-black">
            {highlightText}
          </span>
        </div>
      </div>
    </div>
  );
}

export default SectionTitle;