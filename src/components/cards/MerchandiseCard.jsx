// src/components/cards/MerchandiseCard.jsx

const MerchandiseCard = ({ item }) => {
  return (
    <div className="relative h-[277px] w-[287px] overflow-hidden rounded-[12px] border border-[#F7C259] bg-[#FBF0E5]">
      {/* CIRCLE BACKGROUND */}
      <div
        className="absolute left-1/2 top-[34px] h-[160px] w-[160px] -translate-x-1/2 rounded-full"
        style={{ background: item.color }}
      />

      {/* PRODUCT IMAGE */}
      <div className="absolute left-1/2 top-[24px] h-[170px] w-[165px] -translate-x-1/2 rounded-[16px] overflow-hidden bg-white shadow-inner">
        {item.image ? (
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="h-full w-full bg-red-300 flex items-center justify-center text-red-500 text-xs">
            No Image
          </div>
        )}
      </div>

      {/* TITLE */}
      <h3 className="absolute bottom-[40px] left-1/2 w-full -translate-x-1/2 text-center font-['Quicksand'] text-[16px] font-semibold leading-[20px] tracking-[-0.005em] text-[#4B3825]">
        {item.title}
      </h3>
    </div>
  );
};

export default MerchandiseCard;