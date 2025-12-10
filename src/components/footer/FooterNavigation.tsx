import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const FooterNavigation = () => {
  const { dict } = useLanguage();

  const navLinks = [
    { to: "/", label: dict.nav.home },
    { to: "/treatments", label: dict.nav.treatments },
    { to: "/gallery", label: dict.nav.gallery },
    { to: "/philosophy", label: dict.nav.philosophy },
    { to: "/booking", label: dict.nav.booking },
    { to: "/contact", label: dict.nav.contact },
  ];

  return (
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
  );
};

export default FooterNavigation;
