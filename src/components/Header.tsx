import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { NavLink } from "./NavLink";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import { globalSettings } from "@/data/globals";
import logoImage from "@/assets/logo.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { dict } = useLanguage();
  const { logo, primaryCTA } = globalSettings;

  const navLinks = [
    { to: "/", label: dict.nav.home },
    { to: "/treatments", label: dict.nav.treatments },
    { to: "/gallery", label: dict.nav.gallery },
    { to: "/philosophy", label: dict.nav.philosophy },
    { to: "/team", label: dict.nav.team },
    { to: "/prices", label: dict.nav.prices },
    { to: "/booking", label: dict.nav.booking },
    { to: "/contact", label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 glass-effect">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="block">
            <img 
              src={logoImage} 
              alt="Hair by Gashi" 
              className="h-14 md:h-16 w-auto dark:invert transition-all"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="text-sm font-inter font-medium text-foreground/80 hover:text-foreground transition-colors"
                activeClassName="text-foreground"
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Controls */}
          <div className="hidden lg:flex items-center gap-2">
            <ThemeToggle />
            <LanguageSwitcher />
            <Button
              asChild
              className="bg-gold text-gold-foreground hover:bg-gold/90 font-inter font-medium ml-2"
            >
              <a href={primaryCTA.url} target="_blank" rel="noopener noreferrer">
                {dict.cta.bookAppointment}
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-effect">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="text-base font-inter font-medium text-foreground/80 hover:text-foreground transition-colors py-2"
                activeClassName="text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <div className="flex items-center gap-2 mt-2 pb-2 border-b border-gold/20">
              <ThemeToggle />
              <LanguageSwitcher />
            </div>
            <Button
              asChild
              className="bg-gold text-gold-foreground hover:bg-gold/90 font-inter font-medium"
            >
              <a href={primaryCTA.url} target="_blank" rel="noopener noreferrer">
                {dict.cta.bookAppointment}
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
