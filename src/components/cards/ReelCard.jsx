import { Pause, VolumeX, Play } from "lucide-react";

const ReelCard = ({ item }) => {
  return (
    <div className="relative h-[473px] w-[285px] shrink-0 overflow-hidden rounded-[12px] bg-[#7b7b7b]">
      {/* IMAGE / THUMBNAIL */}
      <div className="absolute inset-0">
        {item.image ? (
          <img
            src={item.image}
            alt={item.username}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-b from-[#9f9f9f] to-[#676767]" />
        )}
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/20" />

      {/* TOP */}
      <div className="absolute left-[16px] top-[16px] z-20 flex w-[calc(100%-32px)] items-center justify-between">
        <div className="flex items-center gap-[5px]">
          <span className="text-[11px] font-semibold text-white">
            {item.username}
          </span>
        </div>

        <span className="text-[12px] font-semibold text-white">
          {item.views}
        </span>
      </div>

      {/* PLAY BUTTON */}
      <div className="absolute left-1/2 top-1/2 z-20 flex h-[59px] w-[59px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[rgba(136,152,177,0.65)] backdrop-blur-[2.6px]">
        <Play size={20} fill="#ECDFC7" color="#ECDFC7" />
      </div>

      {/* BOTTOM */}
      <div className="absolute bottom-[18px] left-[18px] right-[18px] z-20 flex items-center justify-between">
        <div className="flex items-center gap-[12px]">
          {/* MUTE */}
          <button className="flex h-[32px] w-[30px] items-center justify-center rounded-[8px] bg-black/10 backdrop-blur-[0.5px]">
            <VolumeX size={18} color="#fff" />
          </button>

          {/* PAUSE */}
          <button className="flex h-[32px] w-[30px] items-center justify-center rounded-[8px] bg-black/10 backdrop-blur-[0.5px]">
            <Pause size={18} color="#fff" />
          </button>

          {/* TIME */}
          <span className="text-[12px] text-white">00:10</span>

          {/* PROGRESS */}
          <div className="relative h-[2px] w-[75px] bg-white/40">
            <div className="absolute left-0 top-0 h-full w-[35px] bg-white" />
          </div>
        </div>

        <span className="text-[12px] text-white">{item.duration}</span>
      </div>
    </div>
  );
};

export default ReelCard;