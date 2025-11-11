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
        <p className="eyebrow-text mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className="text-4xl md:text-5xl font-playfair font-semibold mb-4 text-foreground" style={{ lineHeight: '1.15', letterSpacing: '-0.01em' }}>
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
