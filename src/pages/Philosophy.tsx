import CTAButton from "@/components/CTAButton";
import SectionHeading from "@/components/SectionHeading";
import { philosophyPageData } from "@/data/philosophy";

const Philosophy = () => {
  return (
    <div>
      {/* Main Philosophy Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="Our Approach"
            title={philosophyPageData.heading}
          />

          <div className="prose prose-lg max-w-none">
            {philosophyPageData.body.map((paragraph, index) => (
              <p
                key={index}
                className={`text-lg font-inter leading-relaxed mb-8 ${
                  index === 0 ? "md:text-xl text-foreground" : "text-muted-foreground"
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Private Appointments Strip */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center max-w-3xl">
          <h3 className="text-3xl md:text-4xl font-playfair font-semibold mb-6">
            {philosophyPageData.privateAppointmentsStrip.heading}
          </h3>
          <p className="text-primary-foreground/80 font-inter mb-8 text-lg">
            {philosophyPageData.privateAppointmentsStrip.text}
          </p>
          <CTAButton href={philosophyPageData.privateAppointmentsStrip.cta.url}>
            {philosophyPageData.privateAppointmentsStrip.cta.label}
          </CTAButton>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {philosophyPageData.values.map((value, index) => (
              <div key={index} className="text-center">
                <h4 className="text-2xl font-playfair font-semibold mb-4 text-foreground">
                  {value.title}
                </h4>
                <p className="text-muted-foreground font-inter">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Philosophy;
