import bookNowIcon from "../../assets/navbar/bookNow.png";
function TicketButton() {
  return (
    <button className="relative h-[102px] w-[96px]">

      <img src={bookNowIcon} alt="Book Now" className="h-full w-auto object-contain" />
      
    </button>
  );
}

export default TicketButton;