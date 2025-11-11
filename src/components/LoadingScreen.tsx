import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      <div className="flex flex-col items-center gap-8">
        {/* Animated logo/text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-playfair text-foreground mb-2">
            Hair by Gashi
          </h1>
          <div className="h-px w-32 mx-auto bg-gold opacity-60" />
        </motion.div>

        {/* Animated dots */}
        <div className="flex gap-3">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0.3, scale: 0.8 }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut",
              }}
              className="w-2 h-2 rounded-full bg-gold"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
