import GalleryItem from "@/components/GalleryItem";
import SectionHeading from "@/components/SectionHeading";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSEO } from "@/hooks/useSEO";

// Localized gallery captions
const galleryCaptions = {
  da: [
    "Præcisions fade — skarp geometri",
    "Balayage — multidimensionel dybde",
    "Klassisk fade — ren linje",
    "Krøllet tekstur — naturlig bevægelse",
    "Blød fade — elegant finish",
    "Kreativt design — kunstnerisk udtryk",
    "Platin blond — iskold perfektion",
    "Gyldne bølger — varm glans",
    "Tekstureret klip — moderne kant",
  ],
  en: [
    "Precision fade — sharp geometry",
    "Balayage — multi-dimensional depth",
    "Classic fade — clean line",
    "Curly texture — natural movement",
    "Soft fade — elegant finish",
    "Creative design — artistic expression",
    "Platinum blonde — icy perfection",
    "Golden waves — warm shine",
    "Textured cut — modern edge",
  ],
};

// Gallery images
const galleryImages = [
  "/gallery/gallery-1.png",
  "/gallery/gallery-2.png",
  "/gallery/gallery-3.png",
  "/gallery/gallery-4.png",
  "/gallery/gallery-5.png",
  "/gallery/gallery-6.png",
  "/gallery/gallery-7.png",
  "/gallery/gallery-8.png",
  "/gallery/gallery-9.png",
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
