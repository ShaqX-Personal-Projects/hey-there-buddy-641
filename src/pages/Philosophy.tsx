import CTAButton from "@/components/CTAButton";
import SectionHeading from "@/components/SectionHeading";

const Philosophy = () => {
  return (
    <div>
      {/* Main Philosophy Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="Our Approach"
            title="Philosophy"
          />

          <div className="prose prose-lg max-w-none">
            <p className="text-lg md:text-xl text-foreground font-inter leading-relaxed mb-8">
              We combine modern technique with classic taste. Each session is calm, focused and 
              uncompromising—for a result that speaks softly and carries far.
            </p>

            <p className="text-lg text-muted-foreground font-inter leading-relaxed mb-8">
              At Hair by Gashi, luxury is not about excess. It's about precision, attention to 
              detail, and a deep understanding of how hair should move, shine, and complement 
              your natural beauty.
            </p>

            <p className="text-lg text-muted-foreground font-inter leading-relaxed">
              Every appointment is private, unhurried, and tailored to you. We work with the 
              finest products and techniques, creating results that are both contemporary and 
              timeless.
            </p>
          </div>
        </div>
      </section>

      {/* Private Appointments Strip */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center max-w-3xl">
          <h3 className="text-3xl md:text-4xl font-playfair font-semibold mb-6">
            Private appointments
          </h3>
          <p className="text-primary-foreground/80 font-inter mb-8 text-lg">
            Experience discreet luxury in our serene Copenhagen setting. By appointment only.
          </p>
          <CTAButton href="https://www.hairbygashi.dk/">
            Book Consultation
          </CTAButton>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <h4 className="text-2xl font-playfair font-semibold mb-4 text-foreground">
                Precision
              </h4>
              <p className="text-muted-foreground font-inter">
                Every cut, every color, executed with meticulous attention to detail and 
                technical excellence.
              </p>
            </div>

            <div className="text-center">
              <h4 className="text-2xl font-playfair font-semibold mb-4 text-foreground">
                Discretion
              </h4>
              <p className="text-muted-foreground font-inter">
                Private appointments in a calm environment where you can relax and trust the 
                process completely.
              </p>
            </div>

            <div className="text-center">
              <h4 className="text-2xl font-playfair font-semibold mb-4 text-foreground">
                Excellence
              </h4>
              <p className="text-muted-foreground font-inter">
                Uncompromising standards in products, technique, and service. Luxury that 
                speaks for itself.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Philosophy;
