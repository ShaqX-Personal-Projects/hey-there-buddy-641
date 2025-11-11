import { GlobalSettings } from "@/types/cms";

export const globalSettings: GlobalSettings = {
  siteTitle: "Hair by Gashi",
  logo: "Hair by Gashi", // Text logo for now
  navLinks: [
    { to: "/", label: "Home" },
    { to: "/treatments", label: "Treatments" },
    { to: "/gallery", label: "Gallery" },
    { to: "/philosophy", label: "Philosophy" },
    { to: "/team", label: "Team" },
    { to: "/prices", label: "Prices" },
    { to: "/booking", label: "Booking" },
    { to: "/contact", label: "Contact" },
  ],
  footerLinks: [
    { to: "/", label: "Home" },
    { to: "/treatments", label: "Treatments" },
    { to: "/gallery", label: "Gallery" },
    { to: "/philosophy", label: "Philosophy" },
    { to: "/booking", label: "Booking" },
    { to: "/contact", label: "Contact" },
  ],
  primaryCTA: {
    label: "Book Appointment",
    url: "https://www.hairbygashi.dk/",
  },
  businessInfo: {
    cvr: "43421212",
    owner: "Granit Gashi",
    credit: "ShaqX",
  },
};
