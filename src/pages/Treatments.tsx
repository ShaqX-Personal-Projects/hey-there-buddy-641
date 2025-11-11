import CTAButton from "@/components/CTAButton";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { treatmentsPageData } from "@/data/treatments";

const Treatments = () => {

  return (
    <div className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Services"
          title="Treatments"
          subtitle={treatmentsPageData.introText}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {treatmentsPageData.services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.name}
              description={service.blurb}
              priceFrom={`From ${service.fromPriceDKK.toLocaleString()} DKK`}
            />
          ))}
        </div>

        <div className="text-center mb-12">
          <p className="text-sm text-muted-foreground font-inter italic">
            {treatmentsPageData.note}
          </p>
        </div>

        <div className="text-center">
          <CTAButton href={treatmentsPageData.cta.url}>
            {treatmentsPageData.cta.label}
          </CTAButton>
        </div>
      </div>
    </div>
  );
};

export default Treatments;
