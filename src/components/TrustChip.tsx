import { ReactNode } from "react";

interface TrustChipProps {
  text: string;
  icon?: ReactNode;
  size?: "sm" | "xs";
}

const TrustChip = ({ text, icon, size = "sm" }: TrustChipProps) => {
  return (
    <div className="flex items-center justify-center gap-2 w-full md:w-auto px-6 py-3 gold-hairline rounded-full hover:gold-hairline-hover" style={{ transition: 'all 150ms ease-out' }}>
      {icon && <span className="text-gold">{icon}</span>}
      <span className={`${size === "xs" ? "text-xs" : "text-sm"} font-inter text-white dark:text-black`}>{text}</span>
    </div>
  );
};

export default TrustChip;
