import CTAButton from "@/components/CTAButton";
import GalleryItem from "@/components/GalleryItem";
import SectionHeading from "@/components/SectionHeading";
import TrustChip from "@/components/TrustChip";
import { Sparkles, Lock, Image, Award } from "lucide-react";
import { homePageData } from "@/data/home";
import { globalSettings } from "@/data/globals";

const Index = () => {
  const iconMap: Record<string, any> = {
    Sparkles,
    Lock,
    Image,
    Award,
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center px-4 py-20">
        <div className="container mx-auto text-center max-w-4xl">
          <p className="text-gold text-xs uppercase tracking-widest font-inter font-medium mb-6">
            {homePageData.eyebrow}
          </p>
          <h1 className="text-5xl md:text-7xl font-playfair font-semibold mb-6 text-foreground leading-tight">
            {homePageData.h1}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-inter mb-10 max-w-3xl mx-auto leading-relaxed">
            {homePageData.subtext}
          </p>
          <CTAButton href={globalSettings.primaryCTA.url}>
            {globalSettings.primaryCTA.label}
          </CTAButton>
        </div>
      </section>

      {/* Trust Chips */}
      <section className="py-16 px-4 border-y border-gold/20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
            {homePageData.trustChips.map((chip, index) => {
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
            title="Featured Work"
            subtitle="A selection of our recent creations, showcasing precision and artistry"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {homePageData.featuredWork.map((item, index) => (
              <GalleryItem key={index} imageSrc={item.image} caption={item.caption} />
            ))}
          </div>
          <div className="text-center mt-12">
            <CTAButton href="/gallery" variant="secondary">
              View Full Gallery
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-6 text-foreground">
            {homePageData.ctaSection.heading}
          </h2>
          <p className="text-muted-foreground font-inter mb-8">
            {homePageData.ctaSection.subtext}
          </p>
          <CTAButton href={globalSettings.primaryCTA.url}>
            {globalSettings.primaryCTA.label}
          </CTAButton>
        </div>
      </section>
    </div>
  );
};

export default Index;
