import { useState, useCallback } from "react";
import GalleryItem from "@/components/GalleryItem";
import GalleryLightbox from "@/components/GalleryLightbox";
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
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const goToNext = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev + 1) % galleryImages.length : null
    );
  }, []);

  const goToPrev = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null
    );
  }, []);

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
            <div key={index} onClick={() => openLightbox(index)}>
              <GalleryItem
                imageSrc={image}
                caption={captions[index]}
                width={800}
                height={1000}
              />
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="https://www.instagram.com/hairbygashi_/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-muted text-foreground rounded-xl gold-hairline hover:bg-gold hover:text-gold-foreground transition-colors font-inter font-medium"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clipRule="evenodd"
              />
            </svg>
            {language === "da" ? "Følg os på Instagram" : "Follow us on Instagram"}
          </a>
        </div>
      </div>

      <GalleryLightbox
        images={galleryImages}
        captions={captions}
        selectedIndex={selectedIndex}
        onClose={closeLightbox}
        onNext={goToNext}
        onPrev={goToPrev}
      />
    </div>
  );
};

export default Gallery;
