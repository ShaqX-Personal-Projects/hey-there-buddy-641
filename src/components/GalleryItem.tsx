interface GalleryItemProps {
  imageSrc: string;
  caption: string;
  width?: number;
  height?: number;
}

const GalleryItem = ({ imageSrc, caption, width = 800, height = 1000 }: GalleryItemProps) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl hover-lift-smooth cursor-pointer card-shadow hover:card-shadow-hover" style={{ aspectRatio: `${width}/${height}` }}>
      <img
        src={imageSrc}
        srcSet={`${imageSrc} 1x, ${imageSrc} 2x`}
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        alt={caption}
        width={width}
        height={height}
        className="w-full h-full object-cover bw-image group-hover:scale-105"
        style={{ transition: 'transform 400ms ease-out' }}
        loading="lazy"
        decoding="async"
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
