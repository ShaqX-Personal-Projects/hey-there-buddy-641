interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) => {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`${alignClass} mb-12`}>
      {eyebrow && (
        <p className="text-gold text-xs uppercase tracking-widest font-inter font-medium mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-4xl md:text-5xl font-playfair font-semibold mb-4 text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground font-inter text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
