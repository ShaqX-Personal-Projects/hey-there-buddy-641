import { Link } from "react-router-dom";
import { Instagram, Facebook } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { globalSettings } from "@/data/globals";

const Footer = () => {
  const { dict } = useLanguage();
  const { siteTitle, businessInfo } = globalSettings;

  const legalLinks = [
    { to: "/privacy-policy", label: dict.nav.home === "Hjem" ? "Privatlivspolitik" : "Privacy Policy" },
    { to: "/cookie-policy", label: dict.nav.home === "Hjem" ? "Cookiepolitik" : "Cookie Policy" },
    { to: "/terms-conditions", label: dict.nav.home === "Hjem" ? "Handelsbetingelser" : "Terms & Conditions" },
  ];

  const isDanish = dict.nav.home === "Hjem";

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-10">
        {/* Logo/Navn */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-playfair font-semibold tracking-wide">
            {siteTitle}
          </h3>
        </div>

        {/* Adresse + Telefon */}
        <div className="text-center mb-4">
          <p className="text-primary-foreground/80 font-inter text-sm">
            Boulevarden 22, 9000 Aalborg
            <span className="mx-3 text-gold/50">•</span>
            26 23 22 49
          </p>
        </div>

        {/* Åbningstider */}
        <div className="text-center mb-6">
          <p className="text-primary-foreground/70 font-inter text-sm">
            {isDanish ? "Man-Fre" : "Mon-Fri"}: 09:00-21:00
            <span className="mx-2 text-gold/50">•</span>
            {dict.footer.saturday}: 09:00-19:00
            <span className="mx-2 text-gold/50">•</span>
            {dict.footer.sunday}: {dict.footer.closed}
          </p>
        </div>

        {/* Social ikoner */}
        <div className="flex justify-center gap-4 mb-8">
          <a
            href="https://www.instagram.com/hairbygashi_/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-foreground/70 hover:text-gold transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://www.facebook.com/hairbygashi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-foreground/70 hover:text-gold transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-gold/20 mb-6" />

        {/* Juridiske links */}
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          {legalLinks.map((link, index) => (
            <span key={link.to} className="flex items-center">
              <Link
                to={link.to}
                className="text-primary-foreground/60 hover:text-primary-foreground font-inter text-xs transition-colors"
              >
                {link.label}
              </Link>
              {index < legalLinks.length - 1 && (
                <span className="ml-4 text-gold/30">•</span>
              )}
            </span>
          ))}
        </div>

        {/* Copyright + CVR */}
        <div className="text-center mb-2">
          <p className="text-primary-foreground/50 font-inter text-xs">
            © {new Date().getFullYear()} {siteTitle}. {dict.footer.copyright}
            <span className="mx-2">•</span>
            CVR: {businessInfo.cvr}
          </p>
        </div>

        {/* ShaqX credit */}
        <div className="text-center">
          <p className="text-primary-foreground/40 font-inter text-xs">
            {isDanish ? "Hjemmeside af" : "Website by"}{" "}
            <a
              href="https://shaqx.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold/70 hover:text-gold transition-colors"
            >
              ShaqX
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
