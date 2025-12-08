import { PricesPageData } from "@/types/cms";

export const pricesPageData: PricesPageData = {
  categories: [
    {
      category: "Herre Klip",
      items: [
        { name: "Herreklip", duration: 30, fromPriceDKK: 200, description: "En \"All Around\" klipning" },
        { name: "Skinfade", duration: 30, fromPriceDKK: 200, description: "Her fokuser vi kun på skinfade" },
        { name: "Skæg Barbering + Line Up", duration: 30, fromPriceDKK: 150, description: "Stand Alone Skæg barbering og trimning" },
        { name: "Den Fulde Pakke", duration: 90, fromPriceDKK: 500, description: "Her får du den fulde oplevelse over 1,5 time. Inkludere: Skinfade, Herreklip, Skæg, Vask og Føn, Styling, Ret Bryn, Hårfjerning med voks" },
        { name: "Hold Bookning for Den Fulde Pakke", duration: 240, fromPriceDKK: 2000, description: "Gælder for 4 personer. Uden skinfade koster det 400,- kr mindre. 400,- kr + 1 Time ekstra pr person" },
        { name: "Permanent Krøller", duration: 60, fromPriceDKK: 850, description: "Inklusiv Styling. Prisen varier efter hårets længde (650 - 1250 kr)" },
      ],
    },
    {
      category: "Dame Klip",
      items: [
        { name: "Dame Klip", duration: 60, fromPriceDKK: 450 },
        { name: "Permanent Krøller + Klipning & Styling", duration: 60, fromPriceDKK: 1225, description: "Prisen er mellem 1225 - 1725,- kr efter hårets længde" },
      ],
    },
    {
      category: "Dame Farvning",
      items: [
        { name: "Bundfarve Touch-up + Let Føn", duration: 30, fromPriceDKK: 350 },
        { name: "Helfarve + Styling", duration: 60, fromPriceDKK: 650, description: "Prisen er mellem 650 - 1150,- kr efter hårets længde" },
        { name: "Bundfarve + Let føn", duration: 60, fromPriceDKK: 550 },
        { name: "Gloss + Let Føn", duration: 60, fromPriceDKK: 550, description: "Prisen er mellem 550 - 950,- kr efter hårets længde" },
        { name: "Striber Touch-up + Let føn", duration: 60, fromPriceDKK: 575 },
        { name: "Striber + Styling", duration: 60, fromPriceDKK: 650, description: "Prisen er mellem 650 - 1550,- kr efter hårets længde" },
        { name: "Babylights Touch-up + Let Føn", duration: 60, fromPriceDKK: 950 },
        { name: "Balayage Touch-up + Gloss & Styling", duration: 60, fromPriceDKK: 1150, description: "Prisen er mellem 1150 - 1450,- kr efter hårets længde" },
        { name: "Ombre Colormelting + Styling", duration: 60, fromPriceDKK: 1150, description: "Prisen er mellem 1150 - 1550,- kr efter hårets længde" },
        { name: "Babylights + Styling", duration: 60, fromPriceDKK: 1250, description: "Prisen er mellem 1250 - 1550,- kr efter hårets længde" },
        { name: "Striber i hele bunden + Styling", duration: 60, fromPriceDKK: 1250 },
        { name: "Balayage + Gloss & Styling", duration: 45, fromPriceDKK: 1450, description: "Prisen er mellem 1450 - 1950,- kr efter hårets længde" },
      ],
    },
    {
      category: "Behandlinger",
      items: [
        { name: "Farve, Protein, Hår kur + Styling", duration: 45, fromPriceDKK: 650 },
        { name: "Olaplex Stand Alone + Let Føn", duration: 45, fromPriceDKK: 650 },
      ],
    },
    {
      category: "Ansigt",
      items: [
        { name: "Vippe- og brynfarve + Retning", duration: 30, fromPriceDKK: 175 },
        { name: "Vippefarve", duration: 30, fromPriceDKK: 100 },
        { name: "Ansigtsmaske", duration: 30, fromPriceDKK: 50 },
        { name: "Brynfarve + Retning", duration: 30, fromPriceDKK: 125 },
      ],
    },
  ],
  note: [
    "Alle priser er vejledende og afhænger af bekræftelse efter konsultation",
    "Endelig pris afhænger af hårlængde, tæthed og tilstand",
    "Vi bruger kun premium produkter og avancerede teknikker",
    "Gratis konsultation inkluderet i alle farveservices",
    "Depositum påkrævet for bookinger over 2.000 DKK",
  ],
  cta: {
    label: "Book Consultation",
    url: "https://hair-by-gashi.planway.com/",
  },
};
