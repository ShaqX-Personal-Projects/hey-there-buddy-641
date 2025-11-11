import { ReactNode, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LoadingScreen from "./LoadingScreen";

interface AnimatedLayoutProps {
  children: ReactNode;
}

const AnimatedLayout = ({ children }: AnimatedLayoutProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate minimum loading time for smooth experience
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ 
          opacity: isLoading ? 0 : 1,
          scale: isLoading ? 0.98 : 1
        }}
        transition={{ 
          duration: 0.8, 
          delay: 0.2,
          ease: [0.43, 0.13, 0.23, 0.96]
        }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default AnimatedLayout;
