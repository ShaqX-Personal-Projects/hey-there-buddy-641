import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { globalSettings } from "@/data/globals";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { dict } = useLanguage();
  const { siteTitle, primaryCTA } = globalSettings;

  const navLinks = [
    { to: "/", label: dict.nav.home },
    { to: "/treatments", label: dict.nav.treatments },
    { to: "/gallery", label: dict.nav.gallery },
    { to: "/philosophy", label: dict.nav.philosophy },
    { to: "/booking", label: dict.nav.booking },
    { to: "/contact", label: dict.nav.contact },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Summary */}
          <div>
            <h3 className="text-2xl font-playfair font-semibold mb-4">{siteTitle}</h3>
            <p className="text-primary-foreground/80 font-inter text-sm leading-relaxed">
              {dict.footer.summary}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4">{dict.footer.navigation}</h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-primary-foreground/80 hover:text-primary-foreground font-inter text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4">{dict.footer.bookSection.title}</h4>
            <p className="text-primary-foreground/80 font-inter text-sm mb-4">
              {dict.footer.bookSection.text}
            </p>
            <Button
              asChild
              variant="outline"
              className="border-gold text-primary-foreground hover:bg-gold hover:text-gold-foreground font-inter font-medium"
            >
              <a href={primaryCTA.url} target="_blank" rel="noopener noreferrer">
                {dict.footer.bookSection.cta}
              </a>
            </Button>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-primary-foreground/60 font-inter text-sm">
            © {currentYear} {siteTitle}. {dict.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
