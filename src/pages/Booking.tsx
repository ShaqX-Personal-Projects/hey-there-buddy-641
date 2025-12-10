import { Link } from "react-router-dom";
import CTAButton from "@/components/CTAButton";
import SectionHeading from "@/components/SectionHeading";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { bookingPageData } from "@/data/booking";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSEO } from "@/hooks/useSEO";

const Booking = () => {
  const { dict } = useLanguage();
  useSEO("booking");

  return (
    <div className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading
          eyebrow={dict.booking.eyebrow}
          title="Book din tid hos Hair by Gashi"
          subtitle=""
        />

        <div className="text-center mb-16">
          <p className="text-muted-foreground font-inter mb-6 max-w-2xl mx-auto">
            Alle bookinger håndteres sikkert gennem Planway. Klik på knappen herunder for at vælge behandling, 
            tidspunkt og frisør. Dine personoplysninger behandles fortroligt og i overensstemmelse med vores{" "}
            <Link to="/privatlivspolitik" className="text-gold hover:underline">privatlivspolitik</Link>.
          </p>
          <CTAButton href={bookingPageData.primaryCTA.url}>
            Book via Planway
          </CTAButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-gold/20">
            <CardHeader>
              <CardTitle className="font-playfair">{dict.booking.policies.appointment.title}</CardTitle>
              <CardDescription className="font-inter">{dict.booking.policies.appointment.description}</CardDescription>
            </CardHeader>
            <CardContent className="font-inter text-sm space-y-3">
              {dict.booking.policies.appointment.points.map((point, pointIndex) => (
                <p key={pointIndex}>{point}</p>
              ))}
            </CardContent>
          </Card>
          <Card className="border-gold/20">
            <CardHeader>
              <CardTitle className="font-playfair">{dict.booking.policies.cancellation.title}</CardTitle>
              <CardDescription className="font-inter">{dict.booking.policies.cancellation.description}</CardDescription>
            </CardHeader>
            <CardContent className="font-inter text-sm space-y-3">
              {dict.booking.policies.cancellation.points.map((point, pointIndex) => (
                <p key={pointIndex}>{point}</p>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground font-inter text-sm">
            {dict.booking.contactNote}{" "}
            <Link to="/contact" className="text-gold hover:underline">
              {dict.booking.contactLink}
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Booking;
