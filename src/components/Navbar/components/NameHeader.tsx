import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export const NameHeader = () => {
  const [isMobile, setIsMobile] = useState(false);
  const leftText = "NIKITA".split("");
  const rightText = "UMANSKII".split("");

  // Проверка размера экрана
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) {
    return (
      <motion.div className="flex items-center text-2xl font-bold">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          N
        </motion.span>

        <span className="text-purple-500 mx-3">|</span>

        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          U
        </motion.span>
      </motion.div>
    );
  }

  return (
    <motion.div className="flex items-center text-2xl font-bold">
      {leftText.map((letter, i) => (
        <motion.span
          key={`left-${i}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.06 }}
        >
          {letter}
        </motion.span>
      ))}

      <span className="text-purple-500 mx-5">|</span>

      {rightText.map((letter, i) => (
        <motion.span
          key={`right-${i}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: (i + leftText.length) * 0.06 }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};
