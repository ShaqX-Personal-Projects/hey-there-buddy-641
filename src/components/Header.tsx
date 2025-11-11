import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { NavLink } from "./NavLink";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/treatments", label: "Treatments" },
    { to: "/gallery", label: "Gallery" },
    { to: "/philosophy", label: "Philosophy" },
    { to: "/team", label: "Team" },
    { to: "/prices", label: "Prices" },
    { to: "/booking", label: "Booking" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 glass-effect border-b border-gold/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="text-2xl font-playfair font-semibold tracking-tight">
            Hair by Gashi
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
              <a href="https://www.hairbygashi.dk/" target="_blank" rel="noopener noreferrer">
                Book Appointment
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
        <div className="lg:hidden glass-effect border-t border-gold/20">
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
              <a href="https://www.hairbygashi.dk/" target="_blank" rel="noopener noreferrer">
                Book Appointment
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
