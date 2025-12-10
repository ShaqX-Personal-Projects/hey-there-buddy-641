import { useLanguage } from "@/contexts/LanguageContext";
import { globalSettings } from "@/data/globals";

const FooterBrand = () => {
  const { dict } = useLanguage();
  const { siteTitle } = globalSettings;

  return (
    <div>
      <h3 className="text-2xl font-playfair font-semibold mb-4">{siteTitle}</h3>
      <p className="text-primary-foreground/80 font-inter text-sm leading-relaxed">
        {dict.footer.summary}
      </p>
    </div>
  );
};

export default FooterBrand;
