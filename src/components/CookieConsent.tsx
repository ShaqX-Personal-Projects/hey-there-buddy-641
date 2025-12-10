import { motion, AnimatePresence } from "framer-motion";
import { Cookie, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { useCookieConsent } from "@/contexts/CookieConsentContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import CookieSettings from "./CookieSettings";

const CookieConsent = () => {
  const { showBanner, showSettings, acceptAll, acceptNecessary, openSettings } = useCookieConsent();
  const { dict } = useLanguage();
  const isDanish = dict.nav.home === "Hjem";

  const text = {
    title: isDanish ? "Vi bruger cookies" : "We use cookies",
    description: isDanish
      ? "Vi bruger cookies for at forbedre din oplevelse på vores website."
      : "We use cookies to improve your experience on our website.",
    learnMore: isDanish ? "Læs mere i vores" : "Learn more in our",
    cookiePolicy: isDanish ? "cookiepolitik" : "cookie policy",
    acceptAll: isDanish ? "Accepter alle" : "Accept all",
    acceptNecessary: isDanish ? "Kun nødvendige" : "Necessary only",
    customize: isDanish ? "Tilpas" : "Customize",
  };

  return (
    <>
      <AnimatePresence>
        {showBanner && !showSettings && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />
            
            {/* Centered popup */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <div className="bg-card border-2 border-gold/30 rounded-2xl p-6 md:p-8 shadow-2xl max-w-md w-full">
                {/* Icon & Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Cookie className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-foreground">
                    {text.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {text.description}{" "}
                  <Link
                    to="/cookiepolitik"
                    onClick={acceptNecessary}
                    className="text-gold hover:text-gold/80 underline underline-offset-2 transition-colors"
                  >
                    {text.learnMore} {text.cookiePolicy}
                  </Link>
                </p>

                {/* Buttons - stacked on all screens */}
                <div className="flex flex-col gap-2">
                  <Button
                    onClick={acceptAll}
                    className="bg-gold hover:bg-gold/90 text-gold-foreground font-medium w-full"
                  >
                    {text.acceptAll}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={acceptNecessary}
                    className="border-muted-foreground/30 text-muted-foreground hover:bg-muted w-full"
                  >
                    {text.acceptNecessary}
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={openSettings}
                    className="text-muted-foreground hover:text-foreground hover:bg-muted/50 gap-2 w-full"
                  >
                    <Settings className="w-4 h-4" />
                    {text.customize}
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Settings Modal */}
      <CookieSettings />
    </>
  );
};

export default CookieConsent;
