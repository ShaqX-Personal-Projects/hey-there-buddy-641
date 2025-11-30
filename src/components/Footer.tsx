import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { globalSettings } from "@/data/globals";
import { contactPageData } from "@/data/contact";
import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { dict } = useLanguage();
  const { siteTitle, primaryCTA, businessInfo } = globalSettings;
  const { address, phone, email, hours, social } = contactPageData;

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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
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

          {/* Contact & Hours */}
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4">{dict.footer.contactTitle}</h4>
            <div className="flex flex-col gap-3 text-primary-foreground/80 font-inter text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <div>{address.street}</div>
                  <div>{address.city}</div>
                </div>
              </div>
              <a href={`tel:${phone.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>{phone}</span>
              </a>
              <a href={`mailto:${email}`} className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>{email}</span>
              </a>
              
              <div className="mt-3">
                <h5 className="font-playfair font-semibold mb-2 text-primary-foreground">{dict.footer.hoursTitle}</h5>
                <div className="space-y-1">
                  <div className="flex justify-between gap-4">
                    <span className="flex-shrink-0">{dict.footer.monday} - {dict.footer.friday}:</span>
                    <span className="text-right">{hours.monday}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="flex-shrink-0">{dict.footer.saturday}:</span>
                    <span className="text-right">{hours.saturday}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="flex-shrink-0">{dict.footer.sunday}:</span>
                    <span className="text-right">{dict.footer.closed}</span>
                  </div>
                </div>
              </div>

              <div className="mt-3">
                <h5 className="font-playfair font-semibold mb-2 text-primary-foreground">{dict.footer.followUs}</h5>
                <div className="flex gap-3">
                  <a
                    href={social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary-foreground transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href={social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary-foreground transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4">{dict.footer.bookSection.title}</h4>
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
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-primary-foreground/60 font-inter text-sm">
            © {currentYear} {dict.footer.creditPrefix} {businessInfo.credit}. {siteTitle} CVR: {businessInfo.cvr}. {dict.footer.ownedBy} {businessInfo.owner}. {dict.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
