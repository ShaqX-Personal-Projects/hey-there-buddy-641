import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const LoadingScreen = () => {
  const { dict } = useLanguage();
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
        transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
        className="fixed inset-y-0 left-0 w-1/2 z-50 bg-background border-r border-gold/10"
      />
      <motion.div
        initial={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
        className="fixed inset-y-0 right-0 w-1/2 z-50 bg-background border-l border-gold/10"
      />

      {/* Main loading content */}
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, hsl(var(--background)) 0%, hsl(0 0% 3%) 100%)",
        }}
      >
        {/* Subtle texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"100\" height=\"100\" xmlns=\"http://www.w3.org/2000/svg\"/%3E')",
            backgroundSize: "100px 100px",
          }}
        />

        {/* Minimal geometric accent lines */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"
        />
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"
        />

        {/* Center content */}
        <div className="relative z-10 flex flex-col items-center gap-12 px-6">
          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-playfair text-foreground tracking-tight mb-4">
              Hair by Gashi
            </h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeInOut" }}
              className="h-px w-64 mx-auto bg-gradient-to-r from-transparent via-gold to-transparent"
            />
          </motion.div>

          {/* Progress indicator - minimal geometric */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col items-center gap-4"
          >
            {/* Animated line */}
            <div className="relative w-48 h-px bg-border overflow-hidden">
              <motion.div
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-gold to-transparent"
              />
            </div>

            {/* Minimal dots */}
            <div className="flex gap-2">
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0.2 }}
                  animate={{
                    opacity: [0.2, 1, 0.2],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: "easeInOut",
                  }}
                  className="w-1.5 h-1.5 bg-gold"
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Corner status text - optional typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute bottom-8 left-8 text-xs font-inter text-muted-foreground tracking-widest uppercase"
        >
          {text}
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block ml-1"
          >
            _
          </motion.span>
        </motion.div>

        {/* Minimal corner accents */}
        {["top-left", "top-right", "bottom-left", "bottom-right"].map((corner) => (
          <motion.div
            key={corner}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`absolute w-12 h-12 border-gold/20 ${
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
