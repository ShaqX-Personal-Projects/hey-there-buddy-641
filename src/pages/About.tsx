import SectionHeading from "@/components/SectionHeading";
import Timeline from "@/components/Timeline";
import { useLanguage } from "@/contexts/LanguageContext";
import { aboutPageData } from "@/data/about";

const About = () => {
  const { dict } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <div className="container-base py-12 md:py-20">
        <SectionHeading
          eyebrow={dict.about.eyebrow}
          title={dict.about.title}
          subtitle={dict.about.subtitle}
        />
      </div>

      <Timeline events={dict.about.timeline} />

      {/* Closing Statement */}
      <div className="container-base py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-playfair text-2xl md:text-3xl text-foreground mb-6 leading-relaxed">
            {dict.about.closingStatement}
          </p>
          <p className="text-muted-foreground font-inter text-lg">
            {dict.about.closingText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
