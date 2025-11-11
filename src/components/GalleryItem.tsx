interface GalleryItemProps {
  imageSrc: string;
  caption: string;
}

const GalleryItem = ({ imageSrc, caption }: GalleryItemProps) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl hover-lift cursor-pointer">
      <img
        src={imageSrc}
        alt={caption}
        className="w-full h-full object-cover bw-image transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
        <p className="text-primary-foreground font-inter text-sm p-6">
          {caption}
        </p>
      </div>
    </div>
  );
};

export default GalleryItem;
