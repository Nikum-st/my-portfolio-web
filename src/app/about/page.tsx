"use client";

import { Metadata } from "next";
import Navbar from "../../components/Navbar/Navbar";
import About from "../../components/About/About";
import { useTheme } from "../../hooks/useTheme";
import { Loader } from "../../components/Loader/Loader";
import { useNavigation } from "@/hooks/useNavigation";

const metadata: Metadata = {
  title: "About - Nikita Umanskii",
  description: "Learn more about Nikita Umanskii, Frontend Developer",
};

export default function AboutPage() {
  const { isNavigating, startNavigation } = useNavigation();
  const { theme, toggleTheme } = useTheme();

  return isNavigating ? (
    <Loader size="large" color="text-white" fullScreen />
  ) : (
    <div className="min-h-screen bg-background text-text" data-theme={theme}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <About />
    </div>
  );
}
