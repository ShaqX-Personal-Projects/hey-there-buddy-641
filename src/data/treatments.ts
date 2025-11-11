import { TreatmentsPageData } from "@/types/cms";

export const treatmentsPageData: TreatmentsPageData = {
  introText: "Every service begins with a personal consultation and color analysis",
  services: [
    {
      name: "Precision Cut",
      blurb: "Sculptural cutting with clean lines and a tailored finish. Each cut is designed to complement your natural features and lifestyle.",
      fromPriceDKK: 1200,
    },
    {
      name: "Couture Colour",
      blurb: "Multi-dimensional tones with depth and shine. Using premium color techniques for results that speak sophistication.",
      fromPriceDKK: 2400,
    },
    {
      name: "Red-Carpet Blow-Dry",
      blurb: "Polished, photo-ready styling for special occasions. Immaculate finish with long-lasting hold and radiant shine.",
      fromPriceDKK: 900,
    },
  ],
  note: "Prices are indicative. Final price is confirmed after consultation.",
  cta: {
    label: "Book Consultation",
    url: "https://www.hairbygashi.dk/",
  },
};
