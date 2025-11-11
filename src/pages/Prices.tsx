import CTAButton from "@/components/CTAButton";
import SectionHeading from "@/components/SectionHeading";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { pricesPageData } from "@/data/prices";
import { useLanguage } from "@/contexts/LanguageContext";

const Prices = () => {
  const { dict } = useLanguage();

  return (
    <div className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={dict.prices.eyebrow}
          title={dict.prices.title}
          subtitle={dict.prices.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {pricesPageData.categories.map((category, index) => (
            <Card key={index} className="border-gold/20">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl">{category.category}</CardTitle>
                <CardDescription className="font-inter">{dict.prices.startingPrices}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex justify-between items-baseline">
                      <span className="font-inter text-foreground">{item.name}</span>
                      <span className="font-inter text-sm text-gold font-medium ml-4 price-figure">
                        From {item.fromPriceDKK.toLocaleString()} DKK
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

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
