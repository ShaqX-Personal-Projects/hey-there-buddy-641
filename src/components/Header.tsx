import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { NavLink } from "./NavLink";
import { globalSettings } from "@/data/globals";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { logo, navLinks, primaryCTA } = globalSettings;

  return (
    <header className="sticky top-0 z-50 glass-effect">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="text-2xl font-playfair font-semibold tracking-tight">
            {logo}
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

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button
              asChild
              className="bg-gold text-gold-foreground hover:bg-gold/90 font-inter font-medium"
            >
              <a href={primaryCTA.url} target="_blank" rel="noopener noreferrer">
                {primaryCTA.label}
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
            <Button
              asChild
              className="bg-gold text-gold-foreground hover:bg-gold/90 font-inter font-medium mt-2"
            >
              <a href={primaryCTA.url} target="_blank" rel="noopener noreferrer">
                {primaryCTA.label}
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
