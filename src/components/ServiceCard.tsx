interface ServiceCardProps {
  title: string;
  description: string;
  priceFrom: string;
}

const ServiceCard = ({ title, description, priceFrom }: ServiceCardProps) => {
  return (
    <div className="gold-hairline rounded-2xl p-8 card-shadow hover-lift-smooth hover:card-shadow-hover hover:gold-hairline-hover">
      <h3 className="text-2xl font-playfair font-semibold mb-4 text-foreground">
        {title}
      </h3>
      <p className="text-muted-foreground font-inter mb-6 leading-relaxed">
        {description}
      </p>
      <p className="text-sm font-inter text-gold font-medium price-figure">
        {priceFrom}
      </p>
    </div>
  );
};

export default ServiceCard;
