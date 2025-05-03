import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const nameText = "Lakshay Singla";

function TypingEffect() {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedText((prev) => {
        if (prev.length < nameText.length) {
          return nameText.slice(0, prev.length + 1);
        } else {
          return "";
        }
      });
      setIndex((prevIndex) => (prevIndex + 1) % (nameText.length + 1));
    }, 200); // Adjust typing speed here

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.h1
      className="text-2xl font-bold text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {displayedText}
      <span className="animate-blink">|</span> {/* Blinking cursor */}
    </motion.h1>
  );
}

export default TypingEffect;
