import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { globalSettings } from "@/data/globals";

const FooterLegal = () => {
  const currentYear = new Date().getFullYear();
  const { dict, language } = useLanguage();
  const { siteTitle, businessInfo } = globalSettings;

  const legalLinks = [
    { to: "/privatlivspolitik", label: language === "da" ? "Privatlivspolitik" : "Privacy Policy" },
    { to: "/cookiepolitik", label: language === "da" ? "Cookiepolitik" : "Cookie Policy" },
    { to: "/handelsbetingelser", label: language === "da" ? "Handelsbetingelser" : "Terms & Conditions" },
  ];

  return (
    <div className="border-t border-primary-foreground/20 pt-8">
      {/* Legal Links */}
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 mb-4 text-primary-foreground/60 font-inter text-sm">
        {legalLinks.map((link, index) => (
          <span key={link.to} className="flex items-center gap-4">
            <Link 
              to={link.to} 
              className="hover:text-primary-foreground transition-colors"
            >
              {link.label}
            </Link>
            {index < legalLinks.length - 1 && (
              <span className="text-primary-foreground/40">•</span>
            )}
          </span>
        ))}
      </div>

      {/* Copyright */}
      <div className="text-center text-primary-foreground/60 font-inter text-sm space-y-2">
        <p>
          © {currentYear} {dict.footer.creditPrefix}{" "}
          <a 
            href="https://shaqx.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-primary-foreground transition-colors underline"
          >
            {businessInfo.credit}
          </a>
        </p>
        <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
          <span>{siteTitle}</span>
          <span className="text-primary-foreground/40">•</span>
          <span>CVR: {businessInfo.cvr}</span>
          <span className="text-primary-foreground/40">•</span>
          <span>{dict.footer.ownedBy} {businessInfo.owner}</span>
        </p>
        <p>{dict.footer.copyright}</p>
      </div>
    </div>
  );
};

export default FooterLegal;
