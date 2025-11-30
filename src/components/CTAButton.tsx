import { ReactNode } from "react";
import { Button } from "./ui/button";

interface CTAButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

const CTAButton = ({ href, children, variant = "primary", className = "" }: CTAButtonProps) => {
  const isExternal = href.startsWith("http");

  if (variant === "secondary") {
    return (
      <Button
        asChild
        variant="outline"
        className={`gold-hairline bg-muted text-foreground hover:bg-gold hover:text-gold-foreground font-inter font-medium hover-lift-smooth min-h-[44px] px-6 text-sm sm:text-base ${className}`}
      >
        <a
          href={href}
          {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
        >
          {children}
        </a>
      </Button>
    );
  }

  return (
    <Button
      asChild
      className={`bg-gold text-gold-foreground hover:bg-gold/90 font-inter font-medium hover-lift-smooth min-h-[44px] px-6 text-sm sm:text-base ${className}`}
    >
      <a
        href={href}
        {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
      >
        {children}
      </a>
    </Button>
  );
};

export default CTAButton;
