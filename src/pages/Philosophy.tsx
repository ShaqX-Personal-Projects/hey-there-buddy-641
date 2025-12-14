import CTAButton from "@/components/CTAButton";
import SectionHeading from "@/components/SectionHeading";
import { philosophyPageData } from "@/data/philosophy";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSEO } from "@/hooks/useSEO";
// Using public salon image for hero

const Philosophy = () => {
  const { dict } = useLanguage();
  useSEO("philosophy");

  return (
    <div>
      {/* Main Philosophy Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                eyebrow={dict.philosophy.eyebrow}
                title={dict.philosophy.title}
                align="left"
              />

              <div className="prose prose-lg max-w-none">
                <p className="text-lg md:text-xl font-inter leading-relaxed mb-8 text-foreground">
                  {dict.philosophy.body1}
                </p>
                <p className="text-lg font-inter leading-relaxed mb-8 text-muted-foreground">
                  {dict.philosophy.body2}
                </p>
                <p className="text-lg font-inter leading-relaxed mb-8 text-muted-foreground">
                  {dict.philosophy.body3}
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="/salon/salon-14.jpg"
                alt="Hair by Gashi - Professional hairdressing"
                className="w-full h-auto rounded-2xl bw-image card-shadow hover-lift-smooth"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Private Appointments Strip */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center max-w-3xl">
          <h3 className="text-3xl md:text-4xl font-playfair font-semibold mb-6">
            {dict.philosophy.strip.heading}
          </h3>
          <p className="text-primary-foreground/80 font-inter mb-8 text-lg">
            {dict.philosophy.strip.text}
          </p>
          <CTAButton href={philosophyPageData.privateAppointmentsStrip.cta.url}>
            {dict.cta.bookAppointment}
          </CTAButton>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <h4 className="text-2xl font-playfair font-semibold mb-4 text-foreground">
                {dict.philosophy.values.precision.title}
              </h4>
              <p className="text-muted-foreground font-inter">
                {dict.philosophy.values.precision.description}
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-2xl font-playfair font-semibold mb-4 text-foreground">
                {dict.philosophy.values.discretion.title}
              </h4>
              <p className="text-muted-foreground font-inter">
                {dict.philosophy.values.discretion.description}
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-2xl font-playfair font-semibold mb-4 text-foreground">
                {dict.philosophy.values.excellence.title}
              </h4>
              <p className="text-muted-foreground font-inter">
                {dict.philosophy.values.excellence.description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Philosophy;
