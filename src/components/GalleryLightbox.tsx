import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useCallback } from "react";

interface GalleryLightboxProps {
  images: string[];
  captions: string[];
  selectedIndex: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const GalleryLightbox = ({
  images,
  captions,
  selectedIndex,
  onClose,
  onNext,
  onPrev,
}: GalleryLightboxProps) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    },
    [onClose, onNext, onPrev]
  );

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex, handleKeyDown]);

  if (selectedIndex === null) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-md"
        onClick={onClose}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors"
          aria-label="Luk"
        >
          <X className="w-6 h-6 text-foreground" />
        </button>

        {/* Previous button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-4 z-50 p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors"
          aria-label="Forrige"
        >
          <ChevronLeft className="w-6 h-6 text-foreground" />
        </button>

        {/* Next button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 z-50 p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors"
          aria-label="Næste"
        >
          <ChevronRight className="w-6 h-6 text-foreground" />
        </button>

        {/* Image container */}
        <motion.div
          key={selectedIndex}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.2 }}
          className="relative max-w-[90vw] max-h-[85vh] flex flex-col items-center"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={images[selectedIndex]}
            alt={captions[selectedIndex]}
            className="max-w-full max-h-[75vh] object-contain rounded-xl bw-image"
          />
          <p className="mt-4 text-foreground font-inter text-sm md:text-base text-center px-4">
            {captions[selectedIndex]}
          </p>
          <p className="mt-2 text-muted-foreground font-inter text-xs">
            {selectedIndex + 1} / {images.length}
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default GalleryLightbox;
