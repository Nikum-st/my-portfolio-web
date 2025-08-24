import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

interface LoaderProps {
  size?: "small" | "medium" | "large";
  color?: string;
  isForm?: boolean;
  fullScreen?: boolean;
}

export const Loader = ({
  size = "medium",
  color = "text-blue-500",
  isForm = false,
  fullScreen = false,
}: LoaderProps) => {
  const sizeValues = {
    small: 16,
    medium: 24,
    large: 32,
  };

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
        <div className="p-6 rounded-lg flex flex-col items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="inline-block"
          >
            <Loader2 size={sizeValues[size]} className={color} />
          </motion.div>
          {isForm && (
            <p className="mt-4 text-center text-white">Sending message...</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      className="inline-block"
    >
      <Loader2 size={sizeValues[size]} className={color} />
    </motion.div>
  );
};
