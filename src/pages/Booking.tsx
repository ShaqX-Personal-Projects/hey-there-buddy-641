import { Link } from "react-router-dom";
import CTAButton from "@/components/CTAButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { bookingPageData } from "@/data/booking";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSEO } from "@/hooks/useSEO";

const Booking = () => {
  const { dict, language } = useLanguage();
  useSEO("booking");

  return (
    <div>
      {/* Hero Section with Salon Image */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bw-image"
          style={{ backgroundImage: "url('/salon/salon-5.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="text-center max-w-4xl">
            <p className="eyebrow-text mb-4 text-white/90">{dict.booking.eyebrow}</p>
            <h1 className="font-playfair font-semibold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
              {language === "da" ? "Book din tid hos Hair by Gashi" : "Book your appointment at Hair by Gashi"}
            </h1>
          </div>
        </div>
      </section>

      <div className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <p className="text-muted-foreground font-inter mb-6 max-w-2xl mx-auto">
              {language === "da" 
                ? "Alle bookinger håndteres sikkert gennem Planway. Klik på knappen herunder for at vælge behandling, tidspunkt og frisør. Dine personoplysninger behandles fortroligt og i overensstemmelse med vores "
                : "All bookings are handled securely through Planway. Click the button below to select treatment, time and stylist. Your personal information is treated confidentially in accordance with our "}
              <Link to="/privatlivspolitik" className="text-gold hover:underline">
                {language === "da" ? "privatlivspolitik" : "privacy policy"}
              </Link>.
            </p>
            <CTAButton href={bookingPageData.primaryCTA.url}>
              {language === "da" ? "Book via Planway" : "Book via Planway"}
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
    </div>
  );
};

export default Booking;
