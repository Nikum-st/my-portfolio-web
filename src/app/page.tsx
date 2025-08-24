import Navbar from "../components/Navbar/Navbar";
import { useTheme } from "../hooks/useTheme";
import Home from "../components/Home/Home";
import { AnimatePresence } from "framer-motion";

export default function HomePage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background text-text" data-theme={theme}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <AnimatePresence mode="wait">
        <Home
          name="Nikita Umanskii"
          title="Frontend Developer"
          backgroundImageUrl="/img/12.png"
        />
      </AnimatePresence>
    </div>
  );
}
