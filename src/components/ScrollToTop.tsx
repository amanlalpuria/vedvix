import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when user scrolls down beyond the Hero height (approx 600px)
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          id="scroll-to-top"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ 
            scale: 1.1,
            y: -4,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full glass-card hover-glow flex items-center justify-center cursor-pointer group shadow-[0_10px_30px_rgba(0,0,0,0.5)] focus:outline-none focus-visible:outline-2 focus-visible:outline-accent-brand focus-visible:outline-offset-4"
          aria-label="Scroll to top"
        >
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            }}
            className="text-text-primary group-hover:text-accent-brand transition-colors duration-300"
          >
            <ArrowUp size={20} className="stroke-[2.5]" />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
