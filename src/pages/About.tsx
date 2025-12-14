import SectionHeading from "@/components/SectionHeading";
import Timeline from "@/components/Timeline";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSEO } from "@/hooks/useSEO";

const About = () => {
  const { dict } = useLanguage();
  useSEO("about");

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Salon Image */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bw-image"
          style={{ backgroundImage: "url('/salon/salon-11.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="text-center max-w-4xl">
            <p className="eyebrow-text mb-4 text-white/90">{dict.about.eyebrow}</p>
            <h1 className="font-playfair font-semibold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
              {dict.about.title}
            </h1>
            <p className="text-white/80 font-inter text-lg max-w-2xl mx-auto">
              {dict.about.subtitle}
            </p>
          </div>
        </div>
      </section>

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
