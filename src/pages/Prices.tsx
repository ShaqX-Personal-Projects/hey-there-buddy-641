import { useState, useEffect } from "react";
import CTAButton from "@/components/CTAButton";
import SectionHeading from "@/components/SectionHeading";
import { pricesPageData } from "@/data/prices";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSEO } from "@/hooks/useSEO";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Prices = () => {
  const { dict } = useLanguage();
  useSEO("prices");
  const [openSection, setOpenSection] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("prices-open-section") || "item-0";
    }
    return "item-0";
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("prices-open-section", openSection);
    }
  }, [openSection]);

  return (
    <div>
      {/* Hero Section with Chair Detail Image */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bw-image"
          style={{ backgroundImage: "url('/salon/salon-4.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="text-center max-w-4xl">
            <p className="eyebrow-text mb-4 text-white/90">{dict.prices.eyebrow}</p>
            <h1 className="font-playfair font-semibold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
              {dict.prices.title}
            </h1>
            <p className="text-white/80 font-inter text-lg max-w-2xl mx-auto">
              {dict.prices.subtitle}
            </p>
          </div>
        </div>
      </section>

      <div className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <Accordion 
            type="single" 
            collapsible 
            value={openSection}
            onValueChange={setOpenSection}
            className="space-y-4 mb-12"
          >
            {pricesPageData.categories.map((category, index) => {
              const translatedCategory = dict.prices.priceData.categories[index];
              return (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-gold/20 rounded-2xl overflow-hidden bg-card"
                >
                  <AccordionTrigger className="px-4 sm:px-6 py-4 sm:py-5 hover:no-underline hover:bg-muted/30 transition-colors">
                    <div className="text-left">
                      <h3 className="font-playfair text-lg sm:text-xl md:text-2xl font-semibold">
                        {translatedCategory?.category || category.category}
                      </h3>
                      <p className="font-inter text-xs sm:text-sm text-muted-foreground mt-1">
                        {dict.prices.startingPrices}
                      </p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 sm:px-6 pb-4 sm:pb-6">
                    <div className="space-y-3 sm:space-y-4 pt-2">
                      {category.items.map((item, itemIndex) => {
                        const translatedItem = translatedCategory?.items[itemIndex];
                        return (
                          <div key={itemIndex} className="space-y-1">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-4">
                              <div className="flex-1">
                                <div className="flex items-baseline gap-2 flex-wrap">
                                  <span className="font-inter text-sm sm:text-base text-foreground font-medium">
                                    {translatedItem?.name || item.name}
                                  </span>
                                  <span className="font-inter text-xs text-muted-foreground">
                                    {item.duration} min.
                                  </span>
                                </div>
                              </div>
                              <span className="font-inter text-sm text-gold font-medium whitespace-nowrap price-figure">
                                fra {item.fromPriceDKK.toLocaleString()} kr
                              </span>
                            </div>
                            {(translatedItem?.description || item.description) && (
                              <p className="font-inter text-xs text-muted-foreground leading-relaxed">
                                {translatedItem?.description || item.description}
                              </p>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>

          <div className="bg-muted/30 rounded-2xl p-8 mb-12">
            <h3 className="text-xl font-playfair font-semibold mb-4 text-center">
              {dict.prices.note.title}
            </h3>
            <div className="space-y-3 text-muted-foreground font-inter text-sm max-w-3xl mx-auto">
              {dict.prices.note.points.map((line, index) => (
                <p key={index}>• {line}</p>
              ))}
            </div>
          </div>

          <div className="text-center">
            <CTAButton href={pricesPageData.cta.url}>
              {dict.cta.bookAppointment}
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prices;
