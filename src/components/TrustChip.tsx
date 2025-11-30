import { ReactNode } from "react";

interface TrustChipProps {
  text: string;
  icon?: ReactNode;
}

const TrustChip = ({ text, icon }: TrustChipProps) => {
  return (
    <div className="inline-flex items-center gap-2 px-6 py-3 gold-hairline rounded-full hover:gold-hairline-hover" style={{ transition: 'all 150ms ease-out' }}>
      {icon && <span className="text-gold">{icon}</span>}
      <span className="text-sm font-inter text-white dark:text-black">{text}</span>
    </div>
  );
};

export default TrustChip;
