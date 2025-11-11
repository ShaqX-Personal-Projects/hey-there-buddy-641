import { Languages } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const labels = {
    da: {
      ariaLabel: "Vælg sprog",
      danish: "Dansk",
      english: "English",
    },
    en: {
      ariaLabel: "Choose language",
      danish: "Dansk",
      english: "English",
    },
  };

  const t = labels[language];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9"
          aria-label={t.ariaLabel}
        >
          <Languages className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="gold-hairline">
        <DropdownMenuItem
          onClick={() => setLanguage("da")}
          className={language === "da" ? "bg-muted" : ""}
        >
          <span className="mr-2">🇩🇰</span>
          <span>{t.danish}</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLanguage("en")}
          className={language === "en" ? "bg-muted" : ""}
        >
          <span className="mr-2">🇬🇧</span>
          <span>{t.english}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
