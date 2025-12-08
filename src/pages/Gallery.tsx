import GalleryItem from "@/components/GalleryItem";
import SectionHeading from "@/components/SectionHeading";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSEO } from "@/hooks/useSEO";

// Localized gallery captions
const galleryCaptions = {
  da: [
    "Skarp bob med glans forsegling",
    "Bløde bølger — rødløber finish",
    "Herreklip — ren minimalisme",
    "Balayage — multidimensionel dybde",
    "Klassisk chignon — tidløs elegance",
    "Teksturerede lag — moderne sofistikering",
    "Platin blond — iskold perfektion",
    "Glat hestehale — poleret power",
    "Krøllet føn — voluminøs bounce",
    "Præcisions fade — skarp geometri",
    "Brudeopsætning — romantiske detaljer",
    "Lange lag — ubesværet bevægelse",
    "Farvekorrektion — fejlfri overgang",
    "Tekstureret crop — moderne kant",
    "Hollywood bølger — vintage glamour",
  ],
  en: [
    "Sharp bob with gloss seal",
    "Soft waves — red-carpet finish",
    "Men's cut — pure minimalism",
    "Balayage — multi-dimensional depth",
    "Classic chignon — timeless elegance",
    "Textured layers — modern sophistication",
    "Platinum blonde — icy perfection",
    "Sleek ponytail — polished power",
    "Curly blowout — voluminous bounce",
    "Precision fade — sharp geometry",
    "Bridal updo — romantic detail",
    "Long layers — effortless movement",
    "Color correction — flawless transition",
    "Textured crop — contemporary edge",
    "Hollywood waves — vintage glamour",
  ],
};

// Gallery images (placeholder - replace with actual images)
const galleryImages = [
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
];

const Gallery = () => {
  const { dict, language } = useLanguage();
  useSEO("gallery");

  const captions = galleryCaptions[language];

  return (
    <div className="py-20 px-4">
      <div className="container mx-auto">
        <SectionHeading
          eyebrow={dict.gallery.eyebrow}
          title={dict.gallery.title}
          subtitle={dict.gallery.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <GalleryItem 
              key={index} 
              imageSrc={image} 
              caption={captions[index]}
              width={800}
              height={1000}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
