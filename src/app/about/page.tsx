import { Metadata } from "next";
import Navbar from "../../components/Navbar/Navbar";
import About from "../../components/About/About";
import { useTheme } from "../../hooks/useTheme";

export const metadata: Metadata = {
  title: "About - Nikita Umanskii",
  description: "Learn more about Nikita Umanskii, Frontend Developer",
};

export default function AboutPage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background text-text" data-theme={theme}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <About />
    </div>
  );
}
