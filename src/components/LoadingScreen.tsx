import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import logoImage from "@/assets/logo.png";

const LoadingScreen = () => {
  const { dict } = useLanguage();
  const { resolvedTheme } = useTheme();
  const [text, setText] = useState("");
  const fullText = dict.loading.message;

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
  }, []);

  return (
    <>
      {/* Split panels for box-opening animation */}
      <motion.div
        initial={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
        className="fixed inset-y-0 left-0 w-1/2 z-50 bg-background border-r border-gold/20"
      />
      <motion.div
        initial={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
        className="fixed inset-y-0 right-0 w-1/2 z-50 bg-background border-l border-gold/20"
      />

      {/* Main loading content */}
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
        className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
        style={{
          background: resolvedTheme === "light" 
            ? "radial-gradient(ellipse at center, hsl(0 0% 100%) 0%, hsl(45 15% 97%) 50%, hsl(0 0% 96%) 100%)" 
            : "radial-gradient(ellipse at center, hsl(0 0% 6%) 0%, hsl(0 0% 3%) 50%, hsl(0 0% 1%) 100%)",
        }}
      >
        {/* Refined texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, ${resolvedTheme === "light" ? "rgba(0,0,0,0.02)" : "rgba(255,255,255,0.02)"} 2px, ${resolvedTheme === "light" ? "rgba(0,0,0,0.02)" : "rgba(255,255,255,0.02)"} 4px)`,
          }}
        />
        
        {/* Multiple shimmer sweeps for depth */}
        <motion.div
          animate={{
            x: ["-200%", "200%"],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: [0.65, 0, 0.35, 1],
            repeatDelay: 1,
          }}
          className="absolute inset-0 w-1/3"
          style={{
            background: `linear-gradient(90deg, transparent 0%, ${resolvedTheme === "light" ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.15)"} 50%, transparent 100%)`,
          }}
        />
        <motion.div
          animate={{
            x: ["200%", "-200%"],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: [0.65, 0, 0.35, 1],
            repeatDelay: 0.5,
          }}
          className="absolute inset-0 w-1/4"
          style={{
            background: `linear-gradient(90deg, transparent 0%, ${resolvedTheme === "light" ? "rgba(255, 255, 255, 0.15)" : "rgba(255, 255, 255, 0.1)"} 50%, transparent 100%)`,
          }}
        />
        
        {/* Elegant light beams from center */}
        <motion.div
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at center, ${resolvedTheme === "light" ? "rgba(255, 255, 255, 0.25)" : "rgba(255, 255, 255, 0.2)"} 0%, transparent 60%)`,
          }}
        />
        
        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0 
            }}
            animate={{
              y: [null, Math.random() * -200 - 100],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeOut",
            }}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              boxShadow: `0 0 12px 3px ${resolvedTheme === "light" ? "rgba(255, 255, 255, 0.5)" : "rgba(255, 255, 255, 0.7)"}`,
            }}
          />
        ))}

        {/* Elegant geometric accent lines with enhanced shimmer */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.6, delay: 0.2, ease: [0.65, 0, 0.35, 1] }}
          className="absolute top-0 left-0 right-0 h-px overflow-hidden"
          style={{
            background: `linear-gradient(90deg, transparent 0%, ${resolvedTheme === "light" ? "rgba(255, 255, 255, 0.6)" : "rgba(255, 255, 255, 0.5)"} 50%, transparent 100%)`,
            boxShadow: `0 0 8px ${resolvedTheme === "light" ? "rgba(255, 255, 255, 0.4)" : "rgba(255, 255, 255, 0.5)"}`,
          }}
        >
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: [0.65, 0, 0.35, 1], repeatDelay: 0.5 }}
            className="h-full w-1/4"
            style={{
              background: `linear-gradient(90deg, transparent 0%, ${resolvedTheme === "light" ? "rgba(255, 255, 255, 0.9)" : "rgba(255, 255, 255, 1)"} 50%, transparent 100%)`,
              boxShadow: `0 0 20px 6px ${resolvedTheme === "light" ? "rgba(255, 255, 255, 0.7)" : "rgba(255, 255, 255, 0.9)"}`,
            }}
          />
        </motion.div>
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.6, delay: 0.2, ease: [0.65, 0, 0.35, 1] }}
          className="absolute bottom-0 left-0 right-0 h-px overflow-hidden"
          style={{
            background: `linear-gradient(90deg, transparent 0%, ${resolvedTheme === "light" ? "rgba(255, 255, 255, 0.6)" : "rgba(255, 255, 255, 0.5)"} 50%, transparent 100%)`,
            boxShadow: `0 0 8px ${resolvedTheme === "light" ? "rgba(255, 255, 255, 0.4)" : "rgba(255, 255, 255, 0.5)"}`,
          }}
        >
          <motion.div
            animate={{ x: ["100%", "-100%"] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: [0.65, 0, 0.35, 1], repeatDelay: 0.5 }}
            className="h-full w-1/4"
            style={{
              background: `linear-gradient(90deg, transparent 0%, ${resolvedTheme === "light" ? "rgba(255, 255, 255, 0.9)" : "rgba(255, 255, 255, 1)"} 50%, transparent 100%)`,
              boxShadow: `0 0 20px 6px ${resolvedTheme === "light" ? "rgba(255, 255, 255, 0.7)" : "rgba(255, 255, 255, 0.9)"}`,
            }}
          />
        </motion.div>

        {/* Center content */}
        <div className="relative z-10 flex flex-col items-center gap-16 px-6">
          {/* Logo/Brand with refined entrance */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 1.4, 
              delay: 0.3, 
              ease: [0.65, 0, 0.35, 1],
            }}
            className="text-center flex flex-col items-center"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="relative"
            >
              {/* Logo glow aura */}
              <motion.div
                animate={{ 
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 blur-3xl rounded-full"
                style={{
                  background: `radial-gradient(circle, ${resolvedTheme === "light" ? "rgba(255, 255, 255, 0.4)" : "rgba(255, 255, 255, 0.5)"} 0%, transparent 70%)`,
                }}
              />
              
              <img 
                src={logoImage} 
                alt="Hair by Gashi" 
                className="h-32 md:h-48 w-auto dark:invert relative z-10"
              />
              
              {/* Enhanced reflection effect */}
              <motion.div
                animate={{ x: ["-200%", "200%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: [0.65, 0, 0.35, 1], repeatDelay: 1.5 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent dark:via-white/10 z-20"
                style={{ transform: "skewX(-20deg)" }}
              />
            </motion.div>
            
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 1.4, delay: 0.9, ease: [0.65, 0, 0.35, 1] }}
              className="h-px w-64 mx-auto mt-8 relative overflow-hidden"
              style={{
                background: `linear-gradient(90deg, transparent 0%, ${resolvedTheme === "light" ? "rgba(255, 255, 255, 0.7)" : "rgba(255, 255, 255, 0.8)"} 50%, transparent 100%)`,
                boxShadow: `0 0 12px ${resolvedTheme === "light" ? "rgba(255, 255, 255, 0.5)" : "rgba(255, 255, 255, 0.7)"}`,
              }}
            >
              <motion.div
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: [0.65, 0, 0.35, 1], repeatDelay: 0.5 }}
                className="absolute inset-0 w-1/3"
                style={{
                  background: `linear-gradient(90deg, transparent 0%, ${resolvedTheme === "light" ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 1)"} 50%, transparent 100%)`,
                  boxShadow: `0 0 24px 6px ${resolvedTheme === "light" ? "rgba(255, 255, 255, 0.9)" : "rgba(255, 255, 255, 1)"}`,
                }}
              />
            </motion.div>
          </motion.div>

          {/* Ultra-refined progress indicator */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="flex flex-col items-center gap-6"
          >
            {/* Elegant animated line with multiple sweeps and glow */}
            <div className="relative w-72 h-0.5 bg-border/20 overflow-hidden rounded-full">
              {/* Base glow */}
              <motion.div
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 blur-sm"
                style={{
                  background: `linear-gradient(90deg, transparent 0%, ${resolvedTheme === "light" ? "rgba(212, 175, 55, 0.3)" : "rgba(212, 175, 55, 0.4)"} 50%, transparent 100%)`,
                }}
              />
              
              {/* Primary sweep */}
              <motion.div
                animate={{ x: ["-100%", "100%"] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: [0.65, 0, 0.35, 1],
                }}
                className="absolute inset-y-0 w-1/2"
                style={{
                  background: `linear-gradient(90deg, transparent 0%, ${resolvedTheme === "light" ? "rgba(212, 175, 55, 0.8)" : "rgba(212, 175, 55, 1)"} 50%, transparent 100%)`,
                  boxShadow: `0 0 16px 4px ${resolvedTheme === "light" ? "rgba(212, 175, 55, 0.6)" : "rgba(212, 175, 55, 0.8)"}`,
                }}
              />
              
              {/* Secondary sweep */}
              <motion.div
                animate={{ x: ["100%", "-100%"] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: [0.65, 0, 0.35, 1],
                  delay: 1,
                }}
                className="absolute inset-y-0 w-1/3"
                style={{
                  background: `linear-gradient(90deg, transparent 0%, ${resolvedTheme === "light" ? "rgba(212, 175, 55, 0.5)" : "rgba(212, 175, 55, 0.6)"} 50%, transparent 100%)`,
                  boxShadow: `0 0 12px 2px ${resolvedTheme === "light" ? "rgba(212, 175, 55, 0.4)" : "rgba(212, 175, 55, 0.5)"}`,
                }}
              />
            </div>

            {/* Enhanced dot sequence with glow */}
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
                  className="relative w-1.5 h-1.5 rounded-full bg-gold"
                  style={{
                    boxShadow: `0 0 12px 3px ${resolvedTheme === "light" ? "rgba(212, 175, 55, 0.5)" : "rgba(212, 175, 55, 0.7)"}`,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Refined corner accents */}
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
              borderColor: resolvedTheme === "light" ? "rgba(212, 175, 55, 0.4)" : "rgba(212, 175, 55, 0.5)",
            }}
          />
        ))}
      </motion.div>
    </>
  );
};

export default LoadingScreen;
