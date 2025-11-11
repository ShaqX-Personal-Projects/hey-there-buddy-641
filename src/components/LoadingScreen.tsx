import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const LoadingScreen = () => {
  const [text, setText] = useState("");
  const fullText = "Initiating Luxury Experience";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at center, hsl(var(--background)) 0%, hsl(0 0% 0%) 100%)",
      }}
    >
      {/* Animated gradient mesh background */}
      <motion.div
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(circle at 20% 50%, hsl(var(--gold) / 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, hsl(var(--gold) / 0.1) 0%, transparent 50%)",
        }}
      />

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-gold"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0,
          }}
          animate={{
            y: [null, Math.random() * window.innerHeight],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 3,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "linear",
          }}
        />
      ))}

      {/* Glass container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-10 px-12 py-16 rounded-3xl backdrop-blur-2xl border border-gold/20"
        style={{
          background: "linear-gradient(135deg, hsl(var(--background) / 0.1) 0%, hsl(var(--background) / 0.05) 100%)",
          boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 0 60px 0 hsl(var(--gold) / 0.05)",
        }}
      >
        <div className="flex flex-col items-center gap-8">
          {/* Logo with shimmer effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center relative"
          >
            <motion.div
              animate={{
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 blur-xl bg-gold/20 rounded-full"
            />
            <h1 className="text-4xl md:text-6xl font-playfair text-foreground mb-3 relative z-10">
              <motion.span
                animate={{
                  textShadow: [
                    "0 0 10px hsl(var(--gold) / 0.5)",
                    "0 0 20px hsl(var(--gold) / 0.8)",
                    "0 0 10px hsl(var(--gold) / 0.5)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Hair by Gashi
              </motion.span>
            </h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="h-px w-48 mx-auto bg-gradient-to-r from-transparent via-gold to-transparent"
            />
          </motion.div>

          {/* Typewriter text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-center"
          >
            <p className="text-sm md:text-base font-inter text-muted-foreground tracking-wider">
              {text}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block ml-1"
              >
                |
              </motion.span>
            </p>
          </motion.div>

          {/* Animated progress dots */}
          <div className="flex gap-3">
            {[0, 1, 2, 3, 4].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0.2, scale: 0.8 }}
                animate={{
                  opacity: [0.2, 1, 0.2],
                  scale: [0.8, 1.2, 0.8],
                  boxShadow: [
                    "0 0 0px hsl(var(--gold) / 0.5)",
                    "0 0 15px hsl(var(--gold) / 0.8)",
                    "0 0 0px hsl(var(--gold) / 0.5)",
                  ],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: index * 0.15,
                  ease: "easeInOut",
                }}
                className="w-2 h-2 rounded-full bg-gold"
              />
            ))}
          </div>

          {/* Scanning line effect */}
          <motion.div
            animate={{
              scaleX: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-64 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-60"
          />
        </div>
      </motion.div>

      {/* Corner accents */}
      {["top-left", "top-right", "bottom-left", "bottom-right"].map((corner) => (
        <motion.div
          key={corner}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute w-20 h-20 border-gold/40 ${
            corner.includes("top") ? "border-t-2" : "border-b-2"
          } ${corner.includes("left") ? "border-l-2 left-8" : "border-r-2 right-8"} ${
            corner.includes("top") ? "top-8" : "bottom-8"
          }`}
        />
      ))}
    </motion.div>
  );
};

export default LoadingScreen;
