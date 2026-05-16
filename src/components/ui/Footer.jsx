import footerData from "../../data/footerData";

import logo from "../../assets/navbar/Logo.png";
import castle from "../../assets/dining/castle.png";
import elephant from "../../assets/footer/elephant.png";
import lion from "../../assets/footer/lion.png";
import bear from "../../assets/footer/bear.png";


import {
  // Facebook,
  // Instagram,
  // Youtube,
  // Snapchat,
  // Linkedin,
  Mail,
  Headphones,
  Copy,
} from "lucide-react";

const FooterSection = () => {
  return (
    <footer
      className="
        relative
        overflow-hidden
        bg-[linear-gradient(180deg,#042858_5.43%,#075BBF_99.98%)]
        pt-[52px]
      "
    >
            {/* CASTLE BACKGROUND - Full Footer Background */}
      <img
        src={castle}
        alt="Castle Background"
        className="absolute bottom-0 left-0 h-full w-full object-cover opacity-30 pointer-events-none z-0"
      />


      {/* ATMOSPHERIC CENTER GLOW */}
      <div
        className="
          absolute
          left-1/2
          top-[260px]
          h-[340px]
          w-[540px]
          -translate-x-1/2
          rounded-full
          bg-[#6CA3D0]/40
          blur-[105px]
        "
      />

      {/* CASTLE BACKGROUND */}


      <div className="relative z-10 mx-auto max-w-[1366px] px-[80px]">

        {/* TOP GRID */}
        <div className="grid grid-cols-[340px_1fr_340px]">

          {/* LEFT */}
          <div>

            {/* LOGO */}
            <img
              src={logo}
              alt="Imagicaa Logo"
              className="h-[62px] w-[149px] object-contain"
            />

            {/* TAGLINE */}
            <p
              className="
                mt-[24px]
                text-[18px]
                font-semibold
                text-[#F0F0F0]
              "
            >
              {footerData.tagline}
            </p>

            {/* LINE */}
            <div className="mt-[18px] h-[1px] w-[255px] bg-white/10" />

            {/* SOCIALS */}
            {/* <div className="mt-[24px] flex items-center gap-[24px]">

              <Facebook
                size={24}
                color="#fff"
              />

              <Instagram
                size={24}
                color="#fff"
              />

              <Youtube
                size={24}
                color="#fff"
              />

              <Snapchat
                size={24}
                color="#fff"
              />

              <Linkedin
                size={24}
                color="#fff"
              />
            </div> */}

            {/* CONTACT */}
            <div className="mt-[46px]">

              <h3
                className="
                  text-[16px]
                  font-bold
                  uppercase
                  tracking-[-0.005em]
                  text-white/50
                "
              >
                EMAIL ID & CONTACT
              </h3>

              <div className="mt-[18px] space-y-[10px]">

                {/* EMAIL */}
                <div className="flex items-center gap-[6px]">

                  <div className="flex h-[26px] w-[26px] items-center justify-center">
                    <Mail
                      size={18}
                      color="#fff"
                    />
                  </div>

                  <span className="text-[16px] font-semibold text-white">
                    {footerData.email}
                  </span>

                  <Copy
                    size={16}
                    color="#fff"
                  />
                </div>

                {/* PHONE */}
                <div className="flex items-center gap-[7px]">

                  <div className="flex h-[26px] w-[26px] items-center justify-center">
                    <Headphones
                      size={18}
                      color="#fff"
                    />
                  </div>

                  <span className="text-[16px] font-semibold text-white">
                    {footerData.phone}
                  </span>

                  <Copy
                    size={16}
                    color="#fff"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* CENTER */}
          <div className="px-[120px]">

            <h3
              className="
                text-[16px]
                font-bold
                uppercase
                text-white/50
              "
            >
              PAGE LINKS
            </h3>

            <div className="mt-[18px]">

              {footerData.links.map((item) => (
                <div
                  key={item}
                  className="
                    flex
                    h-[48px]
                    items-center
                    justify-between
                    border-b
                    border-white/10
                  "
                >
                  <span className="text-[16px] font-semibold text-white">
                    {item}
                  </span>

                  <span className="text-[20px] font-bold text-white">
                    +
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="text-right">

            {/* ADDRESS */}
            <h3
              className="
                text-[16px]
                font-bold
                uppercase
                text-white/50
              "
            >
              ADDRESS & TIMINGS
            </h3>

            <p
              className="
                mt-[18px]
                text-[16px]
                font-semibold
                leading-[20px]
                text-white
              "
            >
              {footerData.address}
            </p>

            <div className="mt-[18px] space-y-[2px]">

              {footerData.timings.map((item) => (
                <p
                  key={item}
                  className="
                    text-[16px]
                    font-semibold
                    text-white
                  "
                >
                  {item}
                </p>
              ))}
            </div>

            {/* ESSENTIAL */}
            <div className="mt-[46px]">

              <h3
                className="
                  text-[16px]
                  font-bold
                  uppercase
                  text-white/50
                "
              >
                ESSTENIAL PAGES
              </h3>

              <div
                className="
                  mt-[18px]
                  flex
                  flex-wrap
                  justify-end
                  gap-x-[12px]
                  gap-y-[10px]
                "
              >
                {footerData.essentialPages.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-[12px]"
                  >
                    <span className="text-[16px] font-semibold text-white">
                      {item}
                    </span>

                    {index !== footerData.essentialPages.length - 1 && (
                      <div className="h-[18px] w-[1px] bg-white/20" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* MASCOTS */}
        <div className="relative mt-[10px] flex justify-center">
          <div className="relative h-[430px] w-[900px]">

            {/* LEFT - Elephant */}
            <div className="absolute bottom-0 left-[10px]  overflow-hidden rounded-[50px]">
              <img src={lion} alt="Elephant" className="h-[550px] w-[520px]  object-fill" />
            </div>

            {/* CENTER - Lion */}
            <div className="absolute bottom-0 left-1/2 z-50 -translate-x-1/2 rounded-[60px]">
              <img src={elephant} alt="Lion" className="h-[450px] w-[520px]  object-fill" />
            </div>

            {/* RIGHT - Bear */}
            <div className="absolute bottom-0 right-[10px] rounded-[50px]">
              <img src={bear} alt="Bear" className="h-[550px] w-[520px]  object-fill" />
            </div>

          </div>
        </div>

        {/* BOTTOM */}
        <div
          className="
            relative
            z-20
            -mt-[10px]
            flex
            items-center
            justify-between
       
          "
        >
          <p className="text-[16px] font-semibold text-[#F0F0F0]">
            {footerData.copyright}
          </p>

          <div className="flex items-center gap-[6px]">

            <span className="text-[16px] font-semibold text-white/50">
              Carefully crafted by
            </span>

            <span className="text-[20px] font-bold text-white">
              3minds
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;