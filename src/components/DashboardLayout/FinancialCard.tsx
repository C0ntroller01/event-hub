import { EyeIcon } from "lucide-react";

interface FinancialCardProps {
  name: string;
  info: string;
  quantity: number;
}

function FinancialCard({ name, info, quantity }: FinancialCardProps) {
  return (
    <div
      className="
        group relative
        w-full min-h-40
        shrink-0
        overflow-hidden
        rounded-lg
        border border-borderGray
        p-4
        transition-all duration-300 ease-in
        hover:cursor-pointer
        hover:scale-105
        hover:bg-[#2F2F47]
        hover:text-white
      "
    >
      {/* Decorative circles */}
      <div className="absolute top-[-68.5px] left-34.5 h-[152.887px] w-[152.887px] rounded-full bg-[#D9D9D90D] opacity-50" />

      <div className="absolute top-[28.61px] left-[214.11px] h-[152.887px] w-[152.887px] rounded-full bg-[#D9D9D90D] opacity-50" />

      {/* Content */}
      <div className="relative flex flex-col gap-4">
        <div className="flex w-full items-center justify-between">
          <span className="truncate">{name}</span>

          <EyeIcon size={18} className="shrink-0" />
        </div>

        <div className="text-4xl font-bold truncate">
          ₦ {quantity.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </div>

        <div className="text-textGray group-hover:text-[#FFFFFF99]">
          {info}
        </div>
      </div>
    </div>
  );
}

export default FinancialCard;