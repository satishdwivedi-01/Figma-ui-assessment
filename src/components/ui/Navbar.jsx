import navItems from "../../data/navData";
import NavMenuItem from "./NavMenuItem";
import TicketButton from "./TicketButton";
import logo from "../../assets/navbar/Logo.png";

function Navbar() {
  return (
    <header className="absolute left-0 top-0 z-[100] h-[88px] w-full ">

      {/* LOGO */}
      <div className="absolute left-[60px] top-[10px]">

        {/* Replace with actual logo */}
        <img src={logo} alt="Logo" className="h-[60px] w-[144px] rounded-[10px]" />
      </div>

      {/* CENTER NAV */}
      <nav
        className="
          absolute
          left-1/2
          top-[12px]
          flex
          h-[66px]
          w-[613px]
          -translate-x-1/2
          items-center
          justify-center
          gap-[44px]
          rounded-full
          border border-white/30
          bg-[linear-gradient(189.14deg,#FFFFFF_58.9%,#FAE7C6_134.32%)]
          px-[48px]
          backdrop-blur-[10px]
        "
      >

        {navItems.map((item) => (
          <NavMenuItem
            key={item.label}
            item={item}
          />
        ))}
      </nav>

      {/* TICKET */}
      <div className="absolute right-[60px] top-[-24px]">
        <TicketButton />
      </div>
    </header>
  );
}

export default Navbar;