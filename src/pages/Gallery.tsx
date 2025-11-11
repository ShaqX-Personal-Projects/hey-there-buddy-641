import GalleryItem from "@/components/GalleryItem";
import SectionHeading from "@/components/SectionHeading";

const Gallery = () => {
  const portfolioItems = [
    { src: "/placeholder.svg", caption: "Sharp bob with gloss seal" },
    { src: "/placeholder.svg", caption: "Soft waves — red-carpet finish" },
    { src: "/placeholder.svg", caption: "Men's cut — pure minimalism" },
    { src: "/placeholder.svg", caption: "Balayage — multi-dimensional depth" },
    { src: "/placeholder.svg", caption: "Classic chignon — timeless elegance" },
    { src: "/placeholder.svg", caption: "Textured layers — modern sophistication" },
    { src: "/placeholder.svg", caption: "Platinum blonde — icy perfection" },
    { src: "/placeholder.svg", caption: "Sleek ponytail — polished power" },
    { src: "/placeholder.svg", caption: "Curly blowout — voluminous bounce" },
    { src: "/placeholder.svg", caption: "Precision fade — sharp geometry" },
    { src: "/placeholder.svg", caption: "Bridal updo — romantic detail" },
    { src: "/placeholder.svg", caption: "Long layers — effortless movement" },
    { src: "/placeholder.svg", caption: "Color correction — flawless transition" },
    { src: "/placeholder.svg", caption: "Textured crop — contemporary edge" },
    { src: "/placeholder.svg", caption: "Hollywood waves — vintage glamour" },
  ];

  return (
    <div className="py-20 px-4">
      <div className="container mx-auto">
        <SectionHeading
          eyebrow="Portfolio"
          title="Gallery"
          subtitle="A showcase of our work — precision, artistry, and uncompromising finish"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <GalleryItem key={index} imageSrc={item.src} caption={item.caption} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
