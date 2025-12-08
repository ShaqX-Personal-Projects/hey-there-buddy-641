import { motion } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import logoImage from "@/assets/logo.png";

const LoadingScreen = () => {
  const { dict } = useLanguage();
  const { resolvedTheme } = useTheme();
  const [text, setText] = useState("");
  const fullText = dict.loading.message;

  // Memoize particle positions to avoid recalculation
  const particles = useMemo(() => 
    [...Array(4)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      yOffset: Math.random() * -200 - 100,
      duration: 3 + Math.random() * 2,
      delay: i * 0.5,
    })), []
  );

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 60);

    return () => clearInterval(timer);
  }, [fullText]);

  const isLight = resolvedTheme === "light";

  return (
    <>
      {/* Split panels for box-opening animation */}
      <motion.div
        initial={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
        className="fixed inset-y-0 left-0 w-1/2 z-50 bg-background border-r border-gold/20"
        style={{ willChange: "transform" }}
      />
      <motion.div
        initial={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
        className="fixed inset-y-0 right-0 w-1/2 z-50 bg-background border-l border-gold/20"
        style={{ willChange: "transform" }}
      />

      {/* Main loading content */}
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
        className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
        style={{
          background: isLight 
            ? "radial-gradient(ellipse at center, hsl(0 0% 100%) 0%, hsl(45 15% 97%) 50%, hsl(0 0% 96%) 100%)" 
            : "radial-gradient(ellipse at center, hsl(0 0% 6%) 0%, hsl(0 0% 3%) 50%, hsl(0 0% 1%) 100%)",
        }}
      >
        {/* Single shimmer sweep */}
        <motion.div
          animate={{ x: ["-200%", "200%"] }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: [0.65, 0, 0.35, 1],
            repeatDelay: 1,
          }}
          className="absolute inset-0 w-1/3"
          style={{
            background: `linear-gradient(90deg, transparent 0%, ${isLight ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.15)"} 50%, transparent 100%)`,
            willChange: "transform",
          }}
        />
        
        {/* Floating particles - reduced to 4 */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{ opacity: 0 }}
            animate={{
              y: [0, particle.yOffset],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeOut",
            }}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              boxShadow: `0 0 12px 3px ${isLight ? "rgba(255, 255, 255, 0.5)" : "rgba(255, 255, 255, 0.7)"}`,
              willChange: "transform, opacity",
            }}
          />
        ))}

        {/* Top accent line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.6, delay: 0.2, ease: [0.65, 0, 0.35, 1] }}
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background: `linear-gradient(90deg, transparent 0%, ${isLight ? "rgba(255, 255, 255, 0.6)" : "rgba(255, 255, 255, 0.5)"} 50%, transparent 100%)`,
          }}
        />
        
        {/* Bottom accent line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.6, delay: 0.2, ease: [0.65, 0, 0.35, 1] }}
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background: `linear-gradient(90deg, transparent 0%, ${isLight ? "rgba(255, 255, 255, 0.6)" : "rgba(255, 255, 255, 0.5)"} 50%, transparent 100%)`,
          }}
        />

        {/* Center content */}
        <div className="relative z-10 flex flex-col items-center gap-16 px-6">
          {/* Logo with refined entrance */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.4, delay: 0.3, ease: [0.65, 0, 0.35, 1] }}
            className="text-center flex flex-col items-center"
          >
            <div className="relative">
              <img 
                src={logoImage} 
                alt="Hair by Gashi" 
                className="h-32 md:h-48 w-auto dark:invert relative z-10"
                width={192}
                height={192}
              />
            </div>
            
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 1.4, delay: 0.9, ease: [0.65, 0, 0.35, 1] }}
              className="h-px w-64 mx-auto mt-8"
              style={{
                background: `linear-gradient(90deg, transparent 0%, ${isLight ? "rgba(255, 255, 255, 0.7)" : "rgba(255, 255, 255, 0.8)"} 50%, transparent 100%)`,
              }}
            />
          </motion.div>

          {/* Progress indicator */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="flex flex-col items-center gap-6"
          >
            {/* Animated progress line */}
            <div className="relative w-72 h-0.5 bg-border/20 overflow-hidden rounded-full">
              <motion.div
                animate={{ x: ["-100%", "100%"] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: [0.65, 0, 0.35, 1],
                }}
                className="absolute inset-y-0 w-1/2"
                style={{
                  background: `linear-gradient(90deg, transparent 0%, ${isLight ? "rgba(212, 175, 55, 0.8)" : "rgba(212, 175, 55, 1)"} 50%, transparent 100%)`,
                  willChange: "transform",
                }}
              />
            </div>

            {/* Dot sequence */}
            <div className="flex gap-4">
              {[0, 1, 2, 3, 4].map((index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0.1, scale: 0.7 }}
                  animate={{
                    opacity: [0.1, 1, 0.1],
                    scale: [0.7, 1.2, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: [0.65, 0, 0.35, 1],
                  }}
                  className="w-1.5 h-1.5 rounded-full bg-gold"
                  style={{ willChange: "transform, opacity" }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Corner accents */}
        {["top-left", "top-right", "bottom-left", "bottom-right"].map((corner, idx) => (
          <motion.div
            key={corner}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5 + idx * 0.1, ease: [0.65, 0, 0.35, 1] }}
            className={`absolute w-16 h-16 ${
              corner.includes("top") ? "border-t" : "border-b"
            } ${corner.includes("left") ? "border-l left-8" : "border-r right-8"} ${
              corner.includes("top") ? "top-8" : "bottom-8"
            }`}
            style={{
              borderColor: isLight ? "rgba(212, 175, 55, 0.4)" : "rgba(212, 175, 55, 0.5)",
            }}
          />
        ))}
      </motion.div>
    </>
  );
};

export default LoadingScreen;