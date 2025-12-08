import { TeamPageData } from "@/types/cms";

export const teamPageData: TeamPageData = {
  members: [
    {
      name: "Gashi",
      role: "Founder & Master Stylist",
      portrait: "/philosophy-hero.png",
      bio: "Med mange års erfaring bag stolen har Gashi perfektioneret kunsten at kombinere moderne teknikker med tidløs elegance.",
      specialties: ["Precision Cutting", "Couture Colour", "Bridal Styling"],
      certifications: [],
    },
    {
      name: "Coming Soon",
      role: "Senior Colourist",
      portrait: "/placeholder.svg",
      bio: "We're expanding our team. This position will be filled by an experienced professional who shares our commitment to excellence.",
      specialties: ["Balayage", "Color Correction", "Creative Colour"],
      certifications: [],
    },
  ],
  joinTeam: {
    heading: "Join Our Team",
    text: "We're always looking for talented professionals who share our passion for excellence and luxury haircare.",
  },
};
