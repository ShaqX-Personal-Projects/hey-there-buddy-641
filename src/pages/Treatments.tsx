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
    <div>
      {/* Hero Section with Salon Image */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bw-image"
          style={{ backgroundImage: "url('/salon/salon-16.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="text-center max-w-4xl">
            <p className="eyebrow-text mb-4 text-white/90">{dict.treatments.eyebrow}</p>
            <h1 className="font-playfair font-semibold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
              {dict.treatments.title}
            </h1>
            <p className="text-white/80 font-inter text-lg max-w-2xl mx-auto">
              {dict.treatments.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Services */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
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
              {/* CTA Card */}
              <div className="gold-hairline rounded-2xl p-6 sm:p-8 card-shadow hover-lift-smooth hover:card-shadow-hover hover:gold-hairline-hover flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-playfair font-semibold mb-3 sm:mb-4 text-foreground">
                    {dict.treatments.yourTurn.name}
                  </h3>
                  <p className="text-muted-foreground font-inter text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                    {dict.treatments.yourTurn.blurb}
                  </p>
                </div>
                <CTAButton href={treatmentsPageData.cta.url}>
                  {dict.cta.bookAppointment}
                </CTAButton>
              </div>
            </div>
            
            {/* Right Column - Accent Image (Desktop) */}
            <div className="hidden lg:block">
              <img
                src="/salon/salon-18.jpg"
                alt="Hair by Gashi - Beard trimming"
                className="w-full h-full object-cover rounded-2xl bw-image card-shadow"
              />
            </div>
          </div>

          {/* Mobile Accent Image */}
          <div className="lg:hidden mt-8">
            <img
              src="/salon/salon-18.jpg"
              alt="Hair by Gashi - Salon atmosphere"
              className="w-full h-64 object-cover rounded-2xl bw-image card-shadow"
            />
          </div>

          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground font-inter italic">
              {dict.treatments.note}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Treatments;
