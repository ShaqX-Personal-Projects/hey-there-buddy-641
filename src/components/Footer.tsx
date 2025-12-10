import FooterBrand from "./footer/FooterBrand";
import FooterNavigation from "./footer/FooterNavigation";
import FooterContact from "./footer/FooterContact";
import FooterCTA from "./footer/FooterCTA";
import FooterLegal from "./footer/FooterLegal";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <FooterBrand />
          <FooterNavigation />
          <FooterContact />
          <FooterCTA />
        </div>
        <FooterLegal />
      </div>
    </footer>
  );
};

export default Footer;
