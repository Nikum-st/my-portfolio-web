import { Metadata } from "next";
import Navbar from "../../components/Navbar/Navbar";
import { useTheme } from "../../hooks/useTheme";
import Portfolio from "../../components/Portfolio/Portfolio";

export const metadata: Metadata = {
  title: "Portfolio - Nikita Umanskii",
  description: "View my projects and work experience",
};

export default function Page() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background text-text" data-theme={theme}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Portfolio />
    </div>
  );
}
