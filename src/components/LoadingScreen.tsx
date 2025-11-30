import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { LockKeyhole } from "lucide-react";
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
      >
        {/* Left lock bolt */}
        <motion.div
          initial={{ x: 0, opacity: 1 }}
          exit={{ x: -80, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-20 h-2 bg-gold/40"
        >
          <div className="absolute right-0 w-6 h-6 bg-gold/60 rounded-full -translate-y-1/2 top-1/2" />
        </motion.div>
      </motion.div>
      
      <motion.div
        initial={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
        className="fixed inset-y-0 right-0 w-1/2 z-50 bg-background border-l border-gold/20"
      >
        {/* Right lock bolt */}
        <motion.div
          initial={{ x: 0, opacity: 1 }}
          exit={{ x: 80, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-20 h-2 bg-gold/40"
        >
          <div className="absolute left-0 w-6 h-6 bg-gold/60 rounded-full -translate-y-1/2 top-1/2" />
        </motion.div>
      </motion.div>

      {/* Central lock mechanism */}
      <motion.div
        initial={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[51]"
      >
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, -15, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          <LockKeyhole 
            className="w-12 h-12 text-gold/80" 
            strokeWidth={1.5}
          />
          {/* Lock glow */}
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 blur-xl bg-gold/30 rounded-full"
          />
        </motion.div>
      </motion.div>

      {/* Main loading content */}
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
        className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
        style={{
          background: resolvedTheme === "light" 
            ? "radial-gradient(ellipse at center, hsl(0 0% 100%) 0%, hsl(0 0% 98%) 100%)" 
            : "radial-gradient(ellipse at center, hsl(0 0% 5%) 0%, hsl(0 0% 2%) 100%)",
        }}
      >
        {/* Refined texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, ${resolvedTheme === "light" ? "rgba(0,0,0,0.02)" : "rgba(255,255,255,0.02)"} 2px, ${resolvedTheme === "light" ? "rgba(0,0,0,0.02)" : "rgba(255,255,255,0.02)"} 4px)`,
          }}
        />
        
        {/* Subtle shimmer sweep */}
        <motion.div
          animate={{
            x: ["-200%", "200%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 1,
          }}
          className="absolute inset-0 w-1/3"
          style={{
            background: `linear-gradient(90deg, transparent 0%, ${resolvedTheme === "light" ? "rgba(212, 175, 55, 0.03)" : "rgba(212, 175, 55, 0.05)"} 50%, transparent 100%)`,
          }}
        />

        {/* Elegant geometric accent lines with shimmer */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.2, ease: [0.65, 0, 0.35, 1] }}
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
        >
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.5 }}
            className="h-full w-1/4 bg-gradient-to-r from-transparent via-gold/60 to-transparent"
          />
        </motion.div>
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.2, ease: [0.65, 0, 0.35, 1] }}
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
        >
          <motion.div
            animate={{ x: ["100%", "-100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.5 }}
            className="h-full w-1/4 bg-gradient-to-r from-transparent via-gold/60 to-transparent"
          />
        </motion.div>

        {/* Center content */}
        <div className="relative z-10 flex flex-col items-center gap-16 px-6">
          {/* Logo/Brand with refined entrance */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 1.2, 
              delay: 0.3, 
              ease: [0.65, 0, 0.35, 1],
            }}
            className="text-center flex flex-col items-center"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative"
            >
              <img 
                src={logoImage} 
                alt="Hair by Gashi" 
                className="h-32 md:h-48 w-auto dark:invert"
              />
              {/* Subtle reflection effect */}
              <motion.div
                animate={{ x: ["-200%", "200%"] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent dark:via-white/5"
                style={{ transform: "skewX(-20deg)" }}
              />
            </motion.div>
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.8, ease: [0.65, 0, 0.35, 1] }}
              className="h-px w-64 mx-auto bg-gradient-to-r from-transparent via-gold to-transparent mt-8 relative overflow-hidden"
            >
              <motion.div
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.3 }}
                className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-gold/80 to-transparent"
              />
            </motion.div>
          </motion.div>

          {/* Refined progress indicator */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col items-center gap-6"
          >
            {/* Elegant animated line with dual sweep */}
            <div className="relative w-64 h-px bg-border/30 overflow-hidden rounded-full">
              <motion.div
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: [0.65, 0, 0.35, 1],
                }}
                className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-gold/80 to-transparent"
              />
              <motion.div
                animate={{
                  x: ["100%", "-100%"],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: [0.65, 0, 0.35, 1],
                  delay: 0.9,
                }}
                className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-gold/40 to-transparent"
              />
            </div>

            {/* Sophisticated dot sequence */}
            <div className="flex gap-3">
              {[0, 1, 2, 3].map((index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0.15, scale: 0.8 }}
                  animate={{
                    opacity: [0.15, 1, 0.15],
                    scale: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: [0.65, 0, 0.35, 1],
                  }}
                  className="w-1.5 h-1.5 rounded-full bg-gold"
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Refined status text with typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.65, 0, 0.35, 1] }}
          className="absolute bottom-8 left-8 text-xs font-inter text-muted-foreground/80 tracking-[0.2em] uppercase"
        >
          {text}
        </motion.div>

        {/* Refined corner accents with subtle animation */}
        {["top-left", "top-right", "bottom-left", "bottom-right"].map((corner, idx) => (
          <motion.div
            key={corner}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 + idx * 0.1, ease: [0.65, 0, 0.35, 1] }}
            className={`absolute w-16 h-16 border-gold/30 ${
              corner.includes("top") ? "border-t" : "border-b"
            } ${corner.includes("left") ? "border-l left-6" : "border-r right-6"} ${
              corner.includes("top") ? "top-6" : "bottom-6"
            }`}
          />
        ))}
      </motion.div>
    </>
  );
};

export default LoadingScreen;
