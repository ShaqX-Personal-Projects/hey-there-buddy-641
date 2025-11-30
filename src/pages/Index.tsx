import CTAButton from "@/components/CTAButton";
import GalleryItem from "@/components/GalleryItem";
import SectionHeading from "@/components/SectionHeading";
import TrustChip from "@/components/TrustChip";
import { Sparkles, Lock, Image, Award } from "lucide-react";
import { homePageData } from "@/data/home";
import { globalSettings } from "@/data/globals";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { dict } = useLanguage();
  
  const iconMap: Record<string, any> = {
    Sparkles,
    Lock,
    Image,
    Award,
  };
  
  const trustChipsWithIcons = [
    { text: dict.home.trustChips.handpicked, icon: "Sparkles" },
    { text: dict.home.trustChips.luxury, icon: "Lock" },
    { text: dict.home.trustChips.aesthetic, icon: "Image" },
    { text: dict.home.trustChips.best, icon: "Award" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center px-4 py-16 sm:py-20 overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover grayscale"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Content */}
        <div className="relative z-10 container mx-auto text-center max-w-4xl">
          <p className="eyebrow-text mb-4 sm:mb-6 text-xs sm:text-sm text-white/90">
            {dict.home.eyebrow}
          </p>
          <h1 className="font-playfair font-semibold mb-4 sm:mb-6 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
            {dict.home.h1}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/80 font-inter mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed">
            {dict.home.subtext}
          </p>
          <CTAButton href={globalSettings.primaryCTA.url}>
            {dict.cta.bookAppointment}
          </CTAButton>
        </div>
      </section>

      {/* Trust Chips */}
      <section className="py-16 px-4" style={{ borderTop: '1px solid hsl(var(--gold) / 0.12)', borderBottom: '1px solid hsl(var(--gold) / 0.12)' }}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
            {trustChipsWithIcons.map((chip, index) => {
              const IconComponent = chip.icon ? iconMap[chip.icon] : undefined;
              return (
                <TrustChip
                  key={index}
                  text={chip.text}
                  icon={IconComponent ? <IconComponent size={18} /> : undefined}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title={dict.home.featuredWork.title}
            subtitle={dict.home.featuredWork.subtitle}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {homePageData.featuredWork.map((item, index) => (
              <GalleryItem 
                key={index} 
                imageSrc={item.image} 
                caption={item.caption}
                width={800}
                height={1000}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <CTAButton href="/gallery" variant="secondary">
              {dict.cta.viewGallery}
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 sm:py-20 px-4 bg-muted/30">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-semibold mb-4 sm:mb-6 text-foreground">
            {dict.home.ctaSection.heading}
          </h2>
          <p className="text-muted-foreground font-inter text-sm sm:text-base mb-6 sm:mb-8">
            {dict.home.ctaSection.subtext}
          </p>
          <CTAButton href={globalSettings.primaryCTA.url}>
            {dict.cta.bookAppointment}
          </CTAButton>
        </div>
      </section>
    </div>
  );
};

export default Index;
