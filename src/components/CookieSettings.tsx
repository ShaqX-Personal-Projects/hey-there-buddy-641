import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Cookie, Shield, BarChart3, Megaphone, Settings2 } from "lucide-react";
import { useCookieConsent } from "@/contexts/CookieConsentContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

interface CookieCategory {
  id: "functional" | "analytics" | "marketing";
  icon: React.ReactNode;
  title: string;
  description: string;
  enabled: boolean;
}

const CookieSettings = () => {
  const { showSettings, closeSettings, savePreferences, consent } = useCookieConsent();
  const { dict } = useLanguage();
  const isDanish = dict.nav.home === "Hjem";

  const [preferences, setPreferences] = useState({
    functional: consent?.functional ?? false,
    analytics: consent?.analytics ?? false,
    marketing: consent?.marketing ?? false,
  });

  // Sync with consent when it changes
  useEffect(() => {
    if (consent) {
      setPreferences({
        functional: consent.functional,
        analytics: consent.analytics,
        marketing: consent.marketing,
      });
    }
  }, [consent]);

  const text = {
    title: isDanish ? "Cookie-indstillinger" : "Cookie Settings",
    subtitle: isDanish
      ? "Vælg hvilke cookies du vil acceptere"
      : "Choose which cookies you want to accept",
    necessary: {
      title: isDanish ? "Nødvendige cookies" : "Necessary cookies",
      description: isDanish
        ? "Disse cookies er nødvendige for at websitet kan fungere og kan ikke slås fra. De bruges til at gemme dine præferencer som tema og sprog."
        : "These cookies are essential for the website to function and cannot be disabled. They are used to store your preferences like theme and language.",
    },
    functional: {
      title: isDanish ? "Funktionelle cookies" : "Functional cookies",
      description: isDanish
        ? "Disse cookies gør det muligt for websitet at huske valg du foretager og give forbedret funktionalitet."
        : "These cookies enable the website to remember choices you make and provide enhanced functionality.",
    },
    analytics: {
      title: isDanish ? "Statistiske cookies" : "Analytics cookies",
      description: isDanish
        ? "Disse cookies hjælper os med at forstå hvordan besøgende bruger vores website, så vi kan forbedre oplevelsen."
        : "These cookies help us understand how visitors use our website so we can improve the experience.",
    },
    marketing: {
      title: isDanish ? "Marketing cookies" : "Marketing cookies",
      description: isDanish
        ? "Disse cookies bruges til at vise dig relevante annoncer på andre websites."
        : "These cookies are used to show you relevant advertisements on other websites.",
    },
    save: isDanish ? "Gem valg" : "Save preferences",
    acceptAll: isDanish ? "Accepter alle" : "Accept all",
    alwaysActive: isDanish ? "Altid aktiv" : "Always active",
  };

  const categories: CookieCategory[] = [
    {
      id: "functional",
      icon: <Settings2 className="w-5 h-5" />,
      title: text.functional.title,
      description: text.functional.description,
      enabled: preferences.functional,
    },
    {
      id: "analytics",
      icon: <BarChart3 className="w-5 h-5" />,
      title: text.analytics.title,
      description: text.analytics.description,
      enabled: preferences.analytics,
    },
    {
      id: "marketing",
      icon: <Megaphone className="w-5 h-5" />,
      title: text.marketing.title,
      description: text.marketing.description,
      enabled: preferences.marketing,
    },
  ];

  const handleToggle = (id: "functional" | "analytics" | "marketing") => {
    setPreferences((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSave = () => {
    savePreferences(preferences);
  };

  const handleAcceptAll = () => {
    savePreferences({ functional: true, analytics: true, marketing: true });
  };

  return (
    <AnimatePresence>
      {showSettings && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-[60]"
            onClick={closeSettings}
          />

          {/* Modal - Full screen centered */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-[60] md:w-full md:max-w-xl flex items-center justify-center"
          >
            <div className="bg-background border-2 border-gold/30 rounded-2xl shadow-2xl w-full max-h-[85vh] flex flex-col overflow-hidden">
              {/* Header */}
              <div className="bg-gold/5 border-b border-gold/20 p-5 md:p-6 flex-shrink-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                      <Cookie className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h2 className="font-playfair text-xl md:text-2xl font-semibold text-foreground">
                        {text.title}
                      </h2>
                      <p className="text-sm text-muted-foreground mt-0.5">{text.subtitle}</p>
                    </div>
                  </div>
                  <button
                    onClick={closeSettings}
                    className="w-10 h-10 rounded-full bg-muted hover:bg-destructive/20 flex items-center justify-center transition-colors group"
                  >
                    <X className="w-5 h-5 text-muted-foreground group-hover:text-destructive" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 md:p-6 space-y-4 overflow-y-auto flex-1">
                {/* Necessary - Always Active */}
                <div className="bg-gold/5 border border-gold/20 rounded-xl p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3 flex-1">
                      <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                        <Shield className="w-5 h-5 text-gold" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-foreground">{text.necessary.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                          {text.necessary.description}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-gold bg-gold/20 px-3 py-1.5 rounded-full whitespace-nowrap flex-shrink-0">
                      {text.alwaysActive}
                    </span>
                  </div>
                </div>

                {/* Toggleable Categories */}
                {categories.map((category) => (
                  <div
                    key={category.id}
                    className="bg-muted/30 border border-border rounded-xl p-4 hover:border-gold/30 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-3 flex-1">
                        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                          <span className="text-foreground">{category.icon}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-foreground">{category.title}</h3>
                          <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                            {category.description}
                          </p>
                        </div>
                      </div>
                      <Switch
                        checked={category.enabled}
                        onCheckedChange={() => handleToggle(category.id)}
                        className="data-[state=checked]:bg-gold flex-shrink-0 scale-110"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="bg-gold/5 border-t border-gold/20 p-5 md:p-6 flex-shrink-0">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    variant="outline"
                    onClick={handleSave}
                    className="flex-1 h-11 border-gold/40 hover:bg-gold/10 hover:border-gold text-foreground font-medium"
                  >
                    {text.save}
                  </Button>
                  <Button
                    onClick={handleAcceptAll}
                    className="flex-1 h-11 bg-gold hover:bg-gold/90 text-gold-foreground font-semibold"
                  >
                    {text.acceptAll}
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CookieSettings;
