import CTAButton from "@/components/CTAButton";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { treatmentsPageData } from "@/data/treatments";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSEO } from "@/hooks/useSEO";

const Treatments = () => {
  const { dict, language } = useLanguage();
  useSEO("treatments");

  // Localized price text
  const priceText = {
    da: {
      precisionCut: "Fra 200 DKK",
      coutureColor: "Fra 350 DKK",
      blowDry: "Fra 450 DKK",
    },
    en: {
      precisionCut: "From 200 DKK",
      coutureColor: "From 350 DKK",
      blowDry: "From 450 DKK",
    },
  };

  const prices = priceText[language];

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
            priceFrom={prices.precisionCut}
          />
          <ServiceCard
            title={dict.treatments.coutureColor.name}
            description={dict.treatments.coutureColor.blurb}
            priceFrom={prices.coutureColor}
          />
          <ServiceCard
            title={dict.treatments.blowDry.name}
            description={dict.treatments.blowDry.blurb}
            priceFrom={prices.blowDry}
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
