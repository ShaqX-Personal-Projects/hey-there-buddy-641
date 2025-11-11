import { useState, useEffect } from "react";
import CTAButton from "@/components/CTAButton";
import SectionHeading from "@/components/SectionHeading";
import { pricesPageData } from "@/data/prices";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Prices = () => {
  const { dict } = useLanguage();
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
    <div className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={dict.prices.eyebrow}
          title={dict.prices.title}
          subtitle={dict.prices.subtitle}
        />

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
                <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-muted/30 transition-colors">
                  <div className="text-left">
                    <h3 className="font-playfair text-2xl font-semibold">
                      {translatedCategory?.category || category.category}
                    </h3>
                    <p className="font-inter text-sm text-muted-foreground mt-1">
                      {dict.prices.startingPrices}
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="space-y-4 pt-2">
                    {category.items.map((item, itemIndex) => {
                      const translatedItem = translatedCategory?.items[itemIndex];
                      return (
                        <div key={itemIndex} className="space-y-1">
                          <div className="flex justify-between items-baseline gap-4">
                            <div className="flex-1">
                              <div className="flex items-baseline gap-2 flex-wrap">
                                <span className="font-inter text-foreground font-medium">
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
  );
};

export default Prices;
