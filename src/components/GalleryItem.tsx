interface GalleryItemProps {
  imageSrc: string;
  caption: string;
}

const GalleryItem = ({ imageSrc, caption }: GalleryItemProps) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl hover-lift-smooth cursor-pointer card-shadow hover:card-shadow-hover">
      <img
        src={imageSrc}
        alt={caption}
        className="w-full h-full object-cover bw-image group-hover:scale-105"
        style={{ transition: 'transform 400ms ease-out' }}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 flex items-end" style={{ transition: 'opacity 180ms ease-out' }}>
        <p className="text-primary-foreground font-inter text-sm p-6">
          {caption}
        </p>
      </div>
    </div>
  );
};

export default GalleryItem;
