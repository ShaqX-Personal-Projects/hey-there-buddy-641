import { PricesPageData } from "@/types/cms";

export const pricesPageData: PricesPageData = {
  categories: [
    {
      category: "Cuts",
      items: [
        { name: "Precision Cut", fromPriceDKK: 1200 },
        { name: "Consultation Cut", fromPriceDKK: 1500 },
        { name: "Men's Cut", fromPriceDKK: 900 },
        { name: "Fringe Trim", fromPriceDKK: 400 },
      ],
    },
    {
      category: "Colour",
      items: [
        { name: "Couture Colour — Full", fromPriceDKK: 2400 },
        { name: "Balayage", fromPriceDKK: 2800 },
        { name: "Root Touch-up", fromPriceDKK: 1400 },
        { name: "Toner & Gloss", fromPriceDKK: 800 },
      ],
    },
    {
      category: "Styling",
      items: [
        { name: "Red-Carpet Blow-Dry", fromPriceDKK: 900 },
        { name: "Updo / Special Occasion", fromPriceDKK: 1200 },
        { name: "Bridal Hair", fromPriceDKK: 2500 },
        { name: "Blow-Dry Bar", fromPriceDKK: 600 },
      ],
    },
    {
      category: "Treatments",
      items: [
        { name: "Deep Conditioning Treatment", fromPriceDKK: 500 },
        { name: "Keratin Treatment", fromPriceDKK: 2000 },
        { name: "Scalp Treatment", fromPriceDKK: 600 },
        { name: "Olaplex Treatment", fromPriceDKK: 700 },
      ],
    },
  ],
  note: [
    "All prices are indicative and subject to confirmation after consultation",
    "Final pricing depends on hair length, density, and condition",
    "We use only premium products and advanced techniques",
    "Complimentary consultation included with all color services",
    "Deposit required for bookings over 2,000 DKK",
  ],
  cta: {
    label: "Book Consultation",
    url: "https://www.hairbygashi.dk/",
  },
};
