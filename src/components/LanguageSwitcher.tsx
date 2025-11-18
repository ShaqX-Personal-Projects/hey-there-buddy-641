import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const labels = {
    da: {
      ariaLabel: "Vælg sprog",
    },
    en: {
      ariaLabel: "Choose language",
    },
  };

  const t = labels[language];

  const toggleLanguage = () => {
    setLanguage(language === "da" ? "en" : "da");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-9 w-9"
      aria-label={t.ariaLabel}
      onClick={toggleLanguage}
    >
      <span className="text-sm font-medium">
        {language === "da" ? "🇩🇰" : "🇬🇧"}
      </span>
    </Button>
  );
}
