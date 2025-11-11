import CTAButton from "@/components/CTAButton";
import GalleryItem from "@/components/GalleryItem";
import SectionHeading from "@/components/SectionHeading";
import TrustChip from "@/components/TrustChip";
import { Sparkles, Lock, Image, Award } from "lucide-react";

const Index = () => {
  const featuredImages = [
    { src: "/placeholder.svg", caption: "Sharp bob with gloss seal" },
    { src: "/placeholder.svg", caption: "Soft waves — red-carpet finish" },
    { src: "/placeholder.svg", caption: "Men's cut — pure minimalism" },
    { src: "/placeholder.svg", caption: "Balayage — multi-dimensional depth" },
    { src: "/placeholder.svg", caption: "Classic chignon — timeless elegance" },
    { src: "/placeholder.svg", caption: "Textured layers — modern sophistication" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center px-4 py-20">
        <div className="container mx-auto text-center max-w-4xl">
          <p className="text-gold text-xs uppercase tracking-widest font-inter font-medium mb-6">
            Exclusive Hairdresser
          </p>
          <h1 className="text-5xl md:text-7xl font-playfair font-semibold mb-6 text-foreground leading-tight">
            Pure, understated luxury for your hair
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-inter mb-10 max-w-3xl mx-auto leading-relaxed">
            Tailor-made treatments, couture color and precision cuts in serene surroundings. 
            Minimal, uncompromising, with a focus on immaculate finish.
          </p>
          <CTAButton href="https://www.hairbygashi.dk/">
            Book Appointment
          </CTAButton>
        </div>
      </section>

      {/* Trust Chips */}
      <section className="py-16 px-4 border-y border-gold/20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
            <TrustChip text="Hand-picked products" icon={<Sparkles size={18} />} />
            <TrustChip text="Discreet luxury setting" icon={<Lock size={18} />} />
            <TrustChip text="Black/white aesthetic" icon={<Image size={18} />} />
            <TrustChip text="For those who want the best" icon={<Award size={18} />} />
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
            {featuredImages.map((image, index) => (
              <GalleryItem key={index} imageSrc={image.src} caption={image.caption} />
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
            Ready to experience excellence?
          </h2>
          <p className="text-muted-foreground font-inter mb-8">
            Book your appointment today and discover the art of tailored luxury haircare.
          </p>
          <CTAButton href="https://www.hairbygashi.dk/">
            Book Your Consultation
          </CTAButton>
        </div>
      </section>
    </div>
  );
};

export default Index;
