import CTAButton from "@/components/CTAButton";
import SectionHeading from "@/components/SectionHeading";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
          <CTAButton href="https://www.hairbygashi.dk/">
            Book Appointment
          </CTAButton>
          <p className="text-sm text-muted-foreground font-inter mt-4">
            Click the button above to access our booking system
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-gold/20">
            <CardHeader>
              <CardTitle className="font-playfair">Appointment Policy</CardTitle>
              <CardDescription className="font-inter">Please note our booking guidelines</CardDescription>
            </CardHeader>
            <CardContent className="font-inter text-sm space-y-3">
              <p>
                <strong>By appointment only</strong> — We operate on a private appointment basis 
                to ensure your complete comfort and privacy.
              </p>
              <p>
                <strong>Consultation included</strong> — Every service begins with a personal 
                consultation and color analysis.
              </p>
              <p>
                <strong>Premium time blocks</strong> — We allocate sufficient time for each 
                appointment to guarantee an unhurried, exceptional experience.
              </p>
            </CardContent>
          </Card>

          <Card className="border-gold/20">
            <CardHeader>
              <CardTitle className="font-playfair">Cancellation Policy</CardTitle>
              <CardDescription className="font-inter">We kindly ask for your consideration</CardDescription>
            </CardHeader>
            <CardContent className="font-inter text-sm space-y-3">
              <p>
                <strong>48-hour notice required</strong> — Please provide at least 48 hours' notice 
                for cancellations or rescheduling.
              </p>
              <p>
                <strong>Late cancellations</strong> — Cancellations with less than 48 hours' notice 
                may incur a fee of 50% of the service price.
              </p>
              <p>
                <strong>No-show policy</strong> — Missed appointments without notice will be charged 
                at 100% of the service price.
              </p>
            </CardContent>
          </Card>
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
