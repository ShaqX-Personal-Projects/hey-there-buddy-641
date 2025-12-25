import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { useLanguage } from "@/contexts/LanguageContext";

// All 22 salon images
const salonImages = Array.from({ length: 22 }, (_, i) => `/salon/salon-${i + 1}.jpg`);

// Localized captions for salon images
const salonCaptions = {
  da: [
    "Elegant salonindretning",
    "Moderne barberstole",
    "Symmetriske stole",
    "Stol detalje",
    "Salon atmosfære",
    "Facade motion blur",
    "Facade aften",
    "Salon stemning",
    "Interiør detaljer",
    "Luksus indretning",
    "Salon atmosphere",
    "Moderne design",
    "Salon mood",
    "Glasdøre atmosfære",
    "Interiør stemning",
    "Wideshot salon",
    "Salon panorama",
    "Skægtrimning action",
    "Arbejdende frisør",
    "Granit arbejder",
    "Professionel klipning",
    "Hair by Gashi salon",
  ],
  en: [
    "Elegant salon interior",
    "Modern barber chairs",
    "Symmetrical chairs",
    "Chair detail",
    "Salon atmosphere",
    "Facade motion blur",
    "Facade evening",
    "Salon mood",
    "Interior details",
    "Luxury decor",
    "Salon atmosphere",
    "Modern design",
    "Salon mood",
    "Glass doors atmosphere",
    "Interior mood",
    "Wideshot salon",
    "Salon panorama",
    "Beard trimming action",
    "Working hairdresser",
    "Granit at work",
    "Professional haircut",
    "Hair by Gashi salon",
  ],
};

const SalonCarousel = () => {
  const { language } = useLanguage();
  const captions = salonCaptions[language];

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {salonImages.map((image, index) => (
          <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
            <div className="relative group overflow-hidden rounded-2xl">
              <picture>
                <source 
                  srcSet={image.replace('.jpg', '.webp')} 
                  type="image/webp" 
                />
                <img
                  src={image}
                  alt={captions[index]}
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-[4/3] object-cover bw-image transition-transform duration-500 group-hover:scale-105"
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="absolute bottom-4 left-4 right-4 text-white font-inter text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {captions[index]}
              </p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4 bg-background/80 backdrop-blur-sm border-gold/30 hover:bg-background hover:border-gold" />
      <CarouselNext className="right-4 bg-background/80 backdrop-blur-sm border-gold/30 hover:bg-background hover:border-gold" />
    </Carousel>
  );
};

export default SalonCarousel;
