import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { NavLink } from "./NavLink";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import { globalSettings } from "@/data/globals";
import logoImage from "@/assets/logo.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const { dict } = useLanguage();
  const { primaryCTA } = globalSettings;
  const location = useLocation();

  const isActiveRoute = (paths: string[]) => {
    return paths.some(path => location.pathname === path);
  };

  return (
    <header className="sticky top-0 z-50 glass-effect">
      <div className="container mx-auto px-4">
        <div className="relative flex items-center justify-center h-20">
          {/* Logo */}
          <Link to="/" className="absolute left-0 block z-50">
            <img 
              src={logoImage} 
              alt="Hair by Gashi" 
              className="h-14 md:h-16 w-auto dark:invert transition-all"
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex flex-1 justify-center">
            <NavigationMenu>
              <NavigationMenuList className="flex items-center gap-1">
              {/* Hjem */}
              <NavigationMenuItem>
                <NavLink
                  to="/"
                  className="text-sm font-inter font-medium text-foreground/70 hover:text-foreground transition-all px-4 py-2 rounded-lg hover:bg-accent/10"
                  activeClassName="text-foreground"
                >
                  {dict.nav.home}
                </NavLink>
              </NavigationMenuItem>

              {/* Behandlinger Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger 
                  className={`text-sm font-inter font-medium transition-all px-4 py-2 h-auto rounded-lg
                    ${isActiveRoute(['/treatments', '/prices']) 
                      ? 'text-foreground bg-accent/10' 
                      : 'text-foreground/70 hover:text-foreground bg-transparent hover:bg-accent/10'
                    }
                    data-[state=open]:bg-accent/10 data-[state=open]:text-foreground`}
                >
                  {dict.nav.treatments}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="container mx-auto px-4 py-6">
                    <ul className="flex gap-8 justify-center">
                      <li>
                        <NavigationMenuLink asChild>
                          <NavLink
                            to="/treatments"
                            className="block px-6 py-3 text-base font-inter text-foreground/70 hover:text-foreground hover:bg-accent/10 rounded-lg transition-all"
                            activeClassName="text-foreground bg-accent/20 font-medium"
                          >
                            {dict.nav.treatments}
                          </NavLink>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <NavLink
                            to="/prices"
                            className="block px-6 py-3 text-base font-inter text-foreground/70 hover:text-foreground hover:bg-accent/10 rounded-lg transition-all"
                            activeClassName="text-foreground bg-accent/20 font-medium"
                          >
                            {dict.nav.prices}
                          </NavLink>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Galleri */}
              <NavigationMenuItem>
                <NavLink
                  to="/gallery"
                  className="text-sm font-inter font-medium text-foreground/70 hover:text-foreground transition-all px-4 py-2 rounded-lg hover:bg-accent/10"
                  activeClassName="text-foreground bg-accent/10"
                >
                  {dict.nav.gallery}
                </NavLink>
              </NavigationMenuItem>

              {/* Om salonen Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger 
                  className={`text-sm font-inter font-medium transition-all px-4 py-2 h-auto rounded-lg
                    ${isActiveRoute(['/about', '/philosophy', '/team']) 
                      ? 'text-foreground bg-accent/10' 
                      : 'text-foreground/70 hover:text-foreground bg-transparent hover:bg-accent/10'
                    }
                    data-[state=open]:bg-accent/10 data-[state=open]:text-foreground`}
                >
                  {dict.nav.aboutSalon}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="container mx-auto px-4 py-6">
                    <ul className="flex gap-8 justify-center">
                      <li>
                        <NavigationMenuLink asChild>
                          <NavLink
                            to="/about"
                            className="block px-6 py-3 text-base font-inter text-foreground/70 hover:text-foreground hover:bg-accent/10 rounded-lg transition-all"
                            activeClassName="text-foreground bg-accent/20 font-medium"
                          >
                            {dict.nav.about}
                          </NavLink>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <NavLink
                            to="/philosophy"
                            className="block px-6 py-3 text-base font-inter text-foreground/70 hover:text-foreground hover:bg-accent/10 rounded-lg transition-all"
                            activeClassName="text-foreground bg-accent/20 font-medium"
                          >
                            {dict.nav.philosophy}
                          </NavLink>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <NavLink
                            to="/team"
                            className="block px-6 py-3 text-base font-inter text-foreground/70 hover:text-foreground hover:bg-accent/10 rounded-lg transition-all"
                            activeClassName="text-foreground bg-accent/20 font-medium"
                          >
                            {dict.nav.team}
                          </NavLink>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Kontakt */}
              <NavigationMenuItem>
                <NavLink
                  to="/contact"
                  className="text-sm font-inter font-medium text-foreground/70 hover:text-foreground transition-all px-4 py-2 rounded-lg hover:bg-accent/10"
                  activeClassName="text-foreground bg-accent/10"
                >
                  {dict.nav.contact}
                </NavLink>
              </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Desktop Controls */}
          <div className="absolute right-0 hidden lg:flex items-center gap-2 z-50">
            <ThemeToggle />
            <LanguageSwitcher />
            <Button
              asChild
              className="bg-gold text-gold-foreground hover:bg-gold/90 font-inter font-medium min-h-[44px] text-sm sm:text-base"
            >
              <a href={primaryCTA.url} target="_blank" rel="noopener noreferrer">
                {dict.nav.booking}
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 absolute right-0"
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
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-2">
            {/* Hjem */}
            <NavLink
              to="/"
              className="text-base font-inter font-medium text-foreground/80 hover:text-foreground transition-colors py-2 px-3 rounded-lg hover:bg-muted/50"
              activeClassName="text-foreground bg-muted"
              onClick={() => setMobileMenuOpen(false)}
            >
              {dict.nav.home}
            </NavLink>

            {/* Behandlinger Dropdown */}
            <div>
              <button
                onClick={() => setTreatmentsOpen(!treatmentsOpen)}
                className="w-full flex items-center justify-between text-base font-inter font-medium text-foreground/80 hover:text-foreground transition-colors py-2 px-3 rounded-lg hover:bg-muted/50"
              >
                {dict.nav.treatments}
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    treatmentsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {treatmentsOpen && (
                <div className="ml-4 mt-1 flex flex-col gap-1">
                  <NavLink
                    to="/treatments"
                    className="text-sm font-inter text-foreground/80 hover:text-foreground transition-colors py-2 px-3 rounded-lg hover:bg-muted/50"
                    activeClassName="text-foreground bg-muted"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {dict.nav.treatments}
                  </NavLink>
                  <NavLink
                    to="/prices"
                    className="text-sm font-inter text-foreground/80 hover:text-foreground transition-colors py-2 px-3 rounded-lg hover:bg-muted/50"
                    activeClassName="text-foreground bg-muted"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {dict.nav.prices}
                  </NavLink>
                </div>
              )}
            </div>

            {/* Galleri */}
            <NavLink
              to="/gallery"
              className="text-base font-inter font-medium text-foreground/80 hover:text-foreground transition-colors py-2 px-3 rounded-lg hover:bg-muted/50"
              activeClassName="text-foreground bg-muted"
              onClick={() => setMobileMenuOpen(false)}
            >
              {dict.nav.gallery}
            </NavLink>

            {/* Om salonen Dropdown */}
            <div>
              <button
                onClick={() => setAboutOpen(!aboutOpen)}
                className="w-full flex items-center justify-between text-base font-inter font-medium text-foreground/80 hover:text-foreground transition-colors py-2 px-3 rounded-lg hover:bg-muted/50"
              >
                {dict.nav.aboutSalon}
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    aboutOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {aboutOpen && (
                <div className="ml-4 mt-1 flex flex-col gap-1">
                  <NavLink
                    to="/about"
                    className="text-sm font-inter text-foreground/80 hover:text-foreground transition-colors py-2 px-3 rounded-lg hover:bg-muted/50"
                    activeClassName="text-foreground bg-muted"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {dict.nav.about}
                  </NavLink>
                  <NavLink
                    to="/philosophy"
                    className="text-sm font-inter text-foreground/80 hover:text-foreground transition-colors py-2 px-3 rounded-lg hover:bg-muted/50"
                    activeClassName="text-foreground bg-muted"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {dict.nav.philosophy}
                  </NavLink>
                  <NavLink
                    to="/team"
                    className="text-sm font-inter text-foreground/80 hover:text-foreground transition-colors py-2 px-3 rounded-lg hover:bg-muted/50"
                    activeClassName="text-foreground bg-muted"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {dict.nav.team}
                  </NavLink>
                </div>
              )}
            </div>

            {/* Kontakt */}
            <NavLink
              to="/contact"
              className="text-base font-inter font-medium text-foreground/80 hover:text-foreground transition-colors py-2 px-3 rounded-lg hover:bg-muted/50"
              activeClassName="text-foreground bg-muted"
              onClick={() => setMobileMenuOpen(false)}
            >
              {dict.nav.contact}
            </NavLink>

            {/* Mobile Controls */}
            <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gold/20">
              <ThemeToggle />
              <LanguageSwitcher />
            </div>

            {/* Book Tid CTA */}
            <Button
              asChild
              className="bg-gold text-gold-foreground hover:bg-gold/90 font-inter font-medium mt-2 min-h-[44px] text-sm sm:text-base"
            >
              <a href={primaryCTA.url} target="_blank" rel="noopener noreferrer">
                {dict.nav.booking}
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
