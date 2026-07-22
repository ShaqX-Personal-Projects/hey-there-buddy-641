import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { bookingPageData } from "@/data/booking";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSEO } from "@/hooks/useSEO";
import { useState } from "react";

const Booking = () => {
  const { dict, language } = useLanguage();
  const [iframeLoaded, setIframeLoaded] = useState(false);
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
          <div className="text-center mb-8">
            <p className="text-muted-foreground font-inter mb-6 max-w-2xl mx-auto">
              {language === "da" 
                ? "Alle bookinger håndteres sikkert gennem Planway. Vælg din behandling, tidspunkt og frisør direkte herunder. Dine personoplysninger behandles fortroligt og i overensstemmelse med vores "
                : "All bookings are handled securely through Planway. Choose your treatment, time and stylist directly below. Your personal information is treated confidentially in accordance with our "}
              <Link to="/privatlivspolitik" className="text-gold hover:underline">
                {language === "da" ? "privatlivspolitik" : "privacy policy"}
              </Link>.
            </p>
            <Button
              asChild
              className="bg-gold text-gold-foreground hover:bg-gold/90 font-inter font-medium"
            >
              <a
                href={bookingPageData.primaryCTA.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {language === "da" ? "Åbn booking i nyt vindue" : "Open booking in new window"}
              </a>
            </Button>
          </div>
        </div>

        {/* Planway Booking Iframe — wider on desktop */}
        <div className="container mx-auto max-w-7xl px-4 mb-16">
          <div className="relative border border-gold/20 rounded-sm overflow-hidden bg-card shadow-lg">
            {!iframeLoaded && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-background/95 backdrop-blur-sm">
                <div className="w-10 h-10 border-2 border-gold border-t-transparent rounded-full animate-spin mb-4" />
                <p className="text-muted-foreground font-inter text-sm">
                  {language === "da" ? "Indlæser booking-system..." : "Loading booking system..."}
                </p>
              </div>
            )}
            <iframe
              src={bookingPageData.primaryCTA.url}
              title={language === "da" ? "Book tid hos Hair by Gashi" : "Book appointment at Hair by Gashi"}
              width="100%"
              height="1100"
              className="w-full h-[700px] md:h-[1000px] lg:h-[1100px]"
              style={{ border: 0 }}
              loading="lazy"
              allow="fullscreen"
              onLoad={() => setIframeLoaded(true)}
            />
          </div>
        </div>

        <div className="container mx-auto max-w-4xl">

          <div className="text-center mb-16">
            <p className="text-muted-foreground font-inter text-sm">
              {language === "da" ? "Virker booking-vinduet ikke? " : "Booking window not working? "}
              <a 
                href={bookingPageData.primaryCTA.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gold hover:underline"
              >
                {language === "da" ? "Åbn booking i nyt vindue" : "Open booking in new window"}
              </a>.
            </p>
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
