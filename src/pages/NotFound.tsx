import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const text = {
    da: {
      title: "404",
      message: "Siden blev ikke fundet",
      button: "Tilbage til Forsiden",
    },
    en: {
      title: "404",
      message: "Page not found",
      button: "Return to Home",
    },
  };

  const t = text[language];

  return (
    <div className="flex min-h-screen items-center justify-center py-20 px-4">
      <div className="text-center max-w-md">
        <h1 className="mb-6 text-6xl font-playfair font-semibold text-foreground">{t.title}</h1>
        <p className="mb-8 text-xl font-inter text-muted-foreground">{t.message}</p>
        <Button asChild className="bg-gold text-gold-foreground hover:bg-gold/90">
          <a href="/">{t.button}</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
