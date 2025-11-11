import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/treatments", label: "Treatments" },
    { to: "/gallery", label: "Gallery" },
    { to: "/philosophy", label: "Philosophy" },
    { to: "/booking", label: "Booking" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Summary */}
          <div>
            <h3 className="text-2xl font-playfair font-semibold mb-4">Hair by Gashi</h3>
            <p className="text-primary-foreground/80 font-inter text-sm leading-relaxed">
              Pure, understated luxury haircare in Copenhagen. Tailor-made treatments, couture color 
              and precision cuts in serene surroundings.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4">Navigation</h4>
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
            <h4 className="text-lg font-playfair font-semibold mb-4">Book Your Appointment</h4>
            <p className="text-primary-foreground/80 font-inter text-sm mb-4">
              Experience exclusive luxury haircare. By appointment only.
            </p>
            <Button
              asChild
              variant="outline"
              className="border-gold text-primary-foreground hover:bg-gold hover:text-gold-foreground font-inter font-medium"
            >
              <a href="https://www.hairbygashi.dk/" target="_blank" rel="noopener noreferrer">
                Book Now
              </a>
            </Button>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-primary-foreground/60 font-inter text-sm">
            © {currentYear} Hair by Gashi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
