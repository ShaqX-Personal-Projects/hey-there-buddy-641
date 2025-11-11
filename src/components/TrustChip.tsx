import { ReactNode } from "react";

interface TrustChipProps {
  text: string;
  icon?: ReactNode;
}

const TrustChip = ({ text, icon }: TrustChipProps) => {
  return (
    <div className="inline-flex items-center gap-2 px-6 py-3 border border-gold/30 rounded-full hover:border-gold/50 transition-colors">
      {icon && <span className="text-gold">{icon}</span>}
      <span className="text-sm font-inter text-foreground">{text}</span>
    </div>
  );
};

export default TrustChip;
