import CTAButton from "@/components/CTAButton";
import SectionHeading from "@/components/SectionHeading";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { bookingPageData } from "@/data/booking";

const Booking = () => {
  return (
    <div className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Schedule"
          title="Book Your Appointment"
          subtitle="Experience exclusive luxury haircare in Copenhagen"
        />

        <div className="text-center mb-16">
          <CTAButton href={bookingPageData.primaryCTA.url}>
            {bookingPageData.primaryCTA.label}
          </CTAButton>
          <p className="text-sm text-muted-foreground font-inter mt-4">
            {bookingPageData.ctaSubtext}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {bookingPageData.policies.map((policy, index) => (
            <Card key={index} className="border-gold/20">
              <CardHeader>
                <CardTitle className="font-playfair">{policy.title}</CardTitle>
                <CardDescription className="font-inter">{policy.description}</CardDescription>
              </CardHeader>
              <CardContent className="font-inter text-sm space-y-3">
                {policy.points.map((point, pointIndex) => (
                  <p key={pointIndex}>{point}</p>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground font-inter text-sm">
            For any questions regarding booking or our policies, please{" "}
            <a href="/contact" className="text-gold hover:underline">
              contact us
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Booking;
