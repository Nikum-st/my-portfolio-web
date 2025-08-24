import { Metadata } from "next";
import Navbar from "../../components/Navbar/Navbar";
import { useTheme } from "../../hooks/useTheme";
import { Contact } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact - Nikita Umanskii",
  description: "Get in touch with Nikita Umanskii",
};

export default function Page() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background text-text" data-theme={theme}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Contact />
    </div>
  );
}
