// src/components/cards/RideCard.jsx
import { Play } from "lucide-react";

function RideCard({ title, description, image }) {
  // Check if the file is a video
  const isVideo = image && typeof image === "string" && image.endsWith(".mp4");

  return (
    <div className="relative w-[300px] h-[426px] overflow-hidden rounded-[10px] border-[3px] border-black/40 bg-[#0B2E63]">
      {/* MEDIA - Image or Video */}
      <div className="absolute inset-0">
        {isVideo ? (
          <video
            src={image}
            className="w-full h-full object-cover"
            muted
            loop
            playsInline
            // autoPlay can be added if you want, but better on hover for performance
          />
        ) : image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-[#1A4277]" />
        )}
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[linear-gradient(179.89deg,rgba(4,43,95,0)_66.66%,#042B5F_99.9%)]" />

      {/* BOTTOM BLUR */}
      <div className="absolute left-1/2 top-[307px] w-[458px] h-[238px] -translate-x-1/2 blur-[80px] rotate-180 bg-[#303A41] opacity-80" />

      {/* PLAY BUTTON - Optional: Hide on video or keep for style */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[53px] h-[53px] rounded-full bg-[linear-gradient(180deg,rgba(41,45,50,0.9)_0%,rgba(11,38,88,0.9)_100%)] flex items-center justify-center z-10">
        <Play size={18} fill="#ECDFC7" color="#ECDFC7" className="ml-[2px]" />
      </div>

      {/* CONTENT */}
      <div className="absolute bottom-[22px] left-1/2 -translate-x-1/2 w-[271px] flex flex-col items-center gap-[6px] z-20">
        <h3 className="text-center font-['Paytone_One'] text-[20px] leading-[20px] tracking-[-0.005em] text-white">
          {title}
        </h3>

        <p className="w-[232px] text-center font-['Quicksand'] font-semibold text-[12px] leading-[15px] text-white">
          {description}
        </p>
      </div>
    </div>
  );
}

export default RideCard;