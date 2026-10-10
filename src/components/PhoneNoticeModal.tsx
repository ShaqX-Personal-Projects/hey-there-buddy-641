import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Instagram } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const STORAGE_KEY = "phoneNoticeDismissed";
const INSTAGRAM_URL = "https://www.instagram.com/hairbygashi_/";

const PhoneNoticeModal = () => {
  const { dict } = useLanguage();
  const [open, setOpen] = useState(false);
  const t = dict.phoneNotice;

  useEffect(() => {
    let dismissed = false;
    try {
      dismissed = sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      dismissed = false;
    }
    if (dismissed) return;

    const timer = setTimeout(() => setOpen(true), 400);
    return () => clearTimeout(timer);
  }, []);

  const close = () => {
    setOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // storage unavailable — modal simply shows again next load
    }
  };

  // Lock body scroll while open + close on Escape
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="fixed inset-0 z-[100] flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
          aria-label={t.title}
          onClick={close}
        >
          {/* Darkened + blurred backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="relative z-10 w-full max-w-md bg-card text-card-foreground border border-gold/25 card-shadow overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top gold hairline accent */}
            <div
              className="h-px w-full"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, hsl(var(--gold) / 0.6) 50%, transparent 100%)",
              }}
            />

            {/* Discreet close button */}
            <button
              onClick={close}
              aria-label="Luk"
              className="absolute top-3 right-3 p-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={16} strokeWidth={1.5} />
            </button>

            <div className="px-8 py-10 sm:px-10 sm:py-12 text-center flex flex-col items-center">
              {/* Icon */}
              <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-full border border-gold/30">
                <Instagram size={22} strokeWidth={1.25} className="text-gold" />
              </div>

              <p className="eyebrow-text mb-4">{t.eyebrow}</p>

              <h2 className="font-playfair font-semibold section-title text-xl sm:text-2xl mb-4">
                {t.title}
              </h2>

              <p className="text-sm sm:text-base text-muted-foreground font-inter leading-relaxed mb-8 max-w-xs">
                {t.body}{" "}
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:underline underline-offset-4 whitespace-nowrap"
                  onClick={close}
                >
                  {t.handle}
                </a>
              </p>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className="w-full inline-flex items-center justify-center gap-2 bg-gold text-gold-foreground px-6 py-3.5 text-xs font-inter font-semibold uppercase tracking-[0.2em] hover-lift-smooth"
              >
                <Instagram size={14} strokeWidth={1.75} />
                {t.cta}
              </a>
            </div>

            {/* Bottom gold hairline accent */}
            <div
              className="h-px w-full"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, hsl(var(--gold) / 0.4) 50%, transparent 100%)",
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PhoneNoticeModal;
