import GalleryItem from "@/components/GalleryItem";
import SectionHeading from "@/components/SectionHeading";
import { galleryPageData } from "@/data/gallery";

const Gallery = () => {

  return (
    <div className="py-20 px-4">
      <div className="container mx-auto">
        <SectionHeading
          eyebrow="Portfolio"
          title="Gallery"
          subtitle="A showcase of our work — precision, artistry, and uncompromising finish"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryPageData.items.map((item, index) => (
            <GalleryItem 
              key={index} 
              imageSrc={item.image} 
              caption={item.caption}
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
