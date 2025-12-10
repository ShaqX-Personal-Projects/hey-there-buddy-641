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
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
          >
            <div className="container mx-auto max-w-4xl">
              <div className="bg-card/95 backdrop-blur-xl border border-gold/20 rounded-2xl p-6 shadow-2xl">
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                  {/* Icon & Text */}
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <Cookie className="w-5 h-5 text-gold" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-playfair text-lg font-semibold text-foreground">
                        {text.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {text.description}{" "}
                        <Link
                          to="/cookiepolitik"
                          onClick={acceptNecessary}
                          className="text-gold hover:text-gold/80 underline underline-offset-2 transition-colors"
                        >
                          {text.learnMore} {text.cookiePolicy}
                        </Link>
                      </p>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2 md:gap-3 flex-shrink-0">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={openSettings}
                      className="border-gold/30 text-foreground hover:bg-gold/10 hover:border-gold/50 gap-2"
                    >
                      <Settings className="w-4 h-4" />
                      {text.customize}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={acceptNecessary}
                      className="border-muted-foreground/30 text-muted-foreground hover:bg-muted"
                    >
                      {text.acceptNecessary}
                    </Button>
                    <Button
                      size="sm"
                      onClick={acceptAll}
                      className="bg-gold hover:bg-gold/90 text-gold-foreground font-medium"
                    >
                      {text.acceptAll}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Settings Modal */}
      <CookieSettings />
    </>
  );
};

export default CookieConsent;
