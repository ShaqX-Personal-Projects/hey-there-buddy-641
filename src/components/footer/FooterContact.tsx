import { useLanguage } from "@/contexts/LanguageContext";
import { contactPageData } from "@/data/contact";
import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";

const FooterContact = () => {
  const { dict } = useLanguage();
  const { address, phone, email, hours, social } = contactPageData;

  return (
    <div>
      <h4 className="text-lg font-playfair font-semibold mb-4">{dict.footer.contactTitle}</h4>
      <div className="flex flex-col gap-3 text-primary-foreground/80 font-inter text-sm">
        {/* Address */}
        <div className="flex items-start gap-2">
          <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
          <div>
            <div>{address.street}</div>
            <div>{address.city}</div>
          </div>
        </div>

        {/* Phone */}
        <a 
          href={`tel:${phone.replace(/\s/g, '')}`} 
          className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
        >
          <Phone className="w-4 h-4 flex-shrink-0" />
          <span>{phone}</span>
        </a>

        {/* Email */}
        <a 
          href={`mailto:${email}`} 
          className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
        >
          <Mail className="w-4 h-4 flex-shrink-0" />
          <span>{email}</span>
        </a>

        {/* Hours */}
        <div className="mt-3">
          <h5 className="font-playfair font-semibold mb-2 text-primary-foreground">
            {dict.footer.hoursTitle}
          </h5>
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

        {/* Social */}
        <div className="mt-3">
          <h5 className="font-playfair font-semibold mb-2 text-primary-foreground">
            {dict.footer.followUs}
          </h5>
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
  );
};

export default FooterContact;
