import CTAButton from "@/components/CTAButton";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";

const Treatments = () => {
  const services = [
    {
      title: "Precision Cut",
      description: "Sculptural cutting with clean lines and a tailored finish. Each cut is designed to complement your natural features and lifestyle.",
      priceFrom: "From 1,200 DKK",
    },
    {
      title: "Couture Colour",
      description: "Multi-dimensional tones with depth and shine. Using premium color techniques for results that speak sophistication.",
      priceFrom: "From 2,400 DKK",
    },
    {
      title: "Red-Carpet Blow-Dry",
      description: "Polished, photo-ready styling for special occasions. Immaculate finish with long-lasting hold and radiant shine.",
      priceFrom: "From 900 DKK",
    },
  ];

  return (
    <div className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Services"
          title="Treatments"
          subtitle="Every service begins with a personal consultation and color analysis"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              priceFrom={service.priceFrom}
            />
          ))}
        </div>

        <div className="text-center mb-12">
          <p className="text-sm text-muted-foreground font-inter italic">
            Prices are indicative. Final price is confirmed after consultation.
          </p>
        </div>

        <div className="text-center">
          <CTAButton href="https://www.hairbygashi.dk/">
            Book Consultation
          </CTAButton>
        </div>
      </div>
    </div>
  );
};

export default Treatments;
