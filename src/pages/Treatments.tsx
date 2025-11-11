import CTAButton from "@/components/CTAButton";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { treatmentsPageData } from "@/data/treatments";
import { useLanguage } from "@/contexts/LanguageContext";

const Treatments = () => {
  const { dict } = useLanguage();

  return (
    <div className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={dict.treatments.eyebrow}
          title={dict.treatments.title}
          subtitle={dict.treatments.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <ServiceCard
            title={dict.treatments.precisionCut.name}
            description={dict.treatments.precisionCut.blurb}
            priceFrom="From 1.200 DKK"
          />
          <ServiceCard
            title={dict.treatments.coutureColor.name}
            description={dict.treatments.coutureColor.blurb}
            priceFrom="From 2.400 DKK"
          />
          <ServiceCard
            title={dict.treatments.blowDry.name}
            description={dict.treatments.blowDry.blurb}
            priceFrom="From 900 DKK"
          />
        </div>

        <div className="text-center mb-12">
          <p className="text-sm text-muted-foreground font-inter italic">
            {dict.treatments.note}
          </p>
        </div>

        <div className="text-center">
          <CTAButton href={treatmentsPageData.cta.url}>
            {dict.cta.bookConsultation}
          </CTAButton>
        </div>
      </div>
    </div>
  );
};

export default Treatments;
