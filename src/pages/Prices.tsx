import CTAButton from "@/components/CTAButton";
import SectionHeading from "@/components/SectionHeading";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Prices = () => {
  const services = [
    {
      category: "Cuts",
      items: [
        { name: "Precision Cut", price: "From 1,200 DKK" },
        { name: "Consultation Cut", price: "From 1,500 DKK" },
        { name: "Men's Cut", price: "From 900 DKK" },
        { name: "Fringe Trim", price: "From 400 DKK" },
      ],
    },
    {
      category: "Colour",
      items: [
        { name: "Couture Colour — Full", price: "From 2,400 DKK" },
        { name: "Balayage", price: "From 2,800 DKK" },
        { name: "Root Touch-up", price: "From 1,400 DKK" },
        { name: "Toner & Gloss", price: "From 800 DKK" },
      ],
    },
    {
      category: "Styling",
      items: [
        { name: "Red-Carpet Blow-Dry", price: "From 900 DKK" },
        { name: "Updo / Special Occasion", price: "From 1,200 DKK" },
        { name: "Bridal Hair", price: "From 2,500 DKK" },
        { name: "Blow-Dry Bar", price: "From 600 DKK" },
      ],
    },
    {
      category: "Treatments",
      items: [
        { name: "Deep Conditioning Treatment", price: "From 500 DKK" },
        { name: "Keratin Treatment", price: "From 2,000 DKK" },
        { name: "Scalp Treatment", price: "From 600 DKK" },
        { name: "Olaplex Treatment", price: "From 700 DKK" },
      ],
    },
  ];

  return (
    <div className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Investment"
          title="Prices"
          subtitle="Every service begins with a personal consultation and color analysis"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((category, index) => (
            <Card key={index} className="border-gold/20">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl">{category.category}</CardTitle>
                <CardDescription className="font-inter">Starting prices</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex justify-between items-baseline">
                      <span className="font-inter text-foreground">{item.name}</span>
                      <span className="font-inter text-sm text-gold font-medium ml-4">
                        {item.price}
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
            Important Information
          </h3>
          <div className="space-y-3 text-muted-foreground font-inter text-sm max-w-3xl mx-auto">
            <p>
              • All prices are indicative and subject to confirmation after consultation
            </p>
            <p>
              • Final pricing depends on hair length, density, and condition
            </p>
            <p>
              • We use only premium products and advanced techniques
            </p>
            <p>
              • Complimentary consultation included with all color services
            </p>
            <p>
              • Deposit required for bookings over 2,000 DKK
            </p>
          </div>
        </div>

        <div className="text-center">
          <CTAButton href="https://www.hairbygashi.dk/">
            Book Consultation
          </CTAButton>
        </div>
      </div>
    </div>
  );
};

export default Prices;
