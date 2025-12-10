import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { globalSettings } from "@/data/globals";

const FooterCTA = () => {
  const { dict } = useLanguage();
  const { primaryCTA } = globalSettings;

  return (
    <div>
      <h4 className="text-lg font-playfair font-semibold mb-4">
        {dict.footer.bookSection.title}
      </h4>
      <p className="text-primary-foreground/80 font-inter text-sm mb-4">
        {dict.footer.bookSection.text}
      </p>
      <Button
        asChild
        className="bg-gold text-gold-foreground hover:bg-gold/90 font-inter font-medium min-h-[44px] text-sm sm:text-base"
      >
        <a href={primaryCTA.url} target="_blank" rel="noopener noreferrer">
          {dict.footer.bookSection.cta}
        </a>
      </Button>
    </div>
  );
};

export default FooterCTA;
