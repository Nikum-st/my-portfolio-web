"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { NameHeader } from "./components/NameHeader";
import { NavigationLink } from "../NavigationLink/NavigationLink";
import { Loader } from "../Loader/Loader";
import { useNavigation } from "../../hooks/useNavigation";

interface NavbarProps {
  toggleTheme: () => void;
  theme: "light" | "dark";
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const { isNavigating } = useNavigation();

  const navVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <>
      {isNavigating && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-background p-6 rounded-lg shadow-lg">
            <Loader size="large" color="text-white" />
            <p className="mt-4 text-center text-white">Loading...</p>
          </div>
        </div>
      )}
      {!isHomePage && (
        <motion.header
          className={`fixed top-0 left-0 w-full shadow-md z-20 ${
            theme === "dark"
              ? "bg-[rgba(26,32,44,0.9)]"
              : "bg-[rgba(255,255,255,0.9)]"
          }`}
          variants={navVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-text">
              <NameHeader />
            </Link>
            <div className="flex items-center space-x-4">
              <NavigationLink href="/about">About</NavigationLink>
              <NavigationLink href="/portfolio">Portfolio</NavigationLink>
              <NavigationLink href="/contact">Contact</NavigationLink>
              <button
                onClick={toggleTheme}
                className="text-text hover:text-fuchsia-500 transition duration-300"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </motion.header>
      )}
    </>
  );
};

export default Navbar;
