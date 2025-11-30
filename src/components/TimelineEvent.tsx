import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface TimelineEventProps {
  date: string;
  title: string;
  description: string;
  imageSrc?: string;
  side: "left" | "right";
  index: number;
}

const TimelineEvent = ({ date, title, description, imageSrc, side, index }: TimelineEventProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 lg:gap-16 ${
        side === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } mb-12 md:mb-16 lg:mb-24`}
    >
      {/* Content Side */}
      <div className={`w-full md:flex-1 ${side === "left" ? "md:text-right" : "md:text-left"}`}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="bg-background/50 backdrop-blur-sm border border-gold/20 rounded-2xl p-6 md:p-8 hover-lift-smooth"
        >
          <p className="text-gold text-xs sm:text-sm font-inter uppercase tracking-wider mb-2 sm:mb-3">
            {date}
          </p>
          <h3 className="font-playfair text-xl sm:text-2xl md:text-3xl mb-3 md:mb-4 text-foreground">
            {title}
          </h3>
          <p className="text-muted-foreground font-inter text-sm sm:text-base leading-relaxed">
            {description}
          </p>
        </motion.div>
      </div>

      {/* Timeline Dot - Hidden on mobile, shown on md+ */}
      <div className="hidden md:block relative flex-shrink-0">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
          className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-gold shadow-[0_0_20px_rgba(212,175,55,0.5)] relative z-10"
        />
      </div>

      {/* Image Side */}
      <div className="w-full md:flex-1">
        {imageSrc ? (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="relative overflow-hidden rounded-2xl aspect-[4/3] card-shadow hover:card-shadow-hover"
          >
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-full object-cover bw-image"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
          </motion.div>
        ) : (
          <div className="h-full" />
        )}
      </div>
    </motion.div>
  );
};

export default TimelineEvent;
