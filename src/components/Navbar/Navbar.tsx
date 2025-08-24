"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { NameHeader } from "./components/NameHeader";

interface NavbarProps {
  toggleTheme: () => void;
  theme: "light" | "dark";
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const navVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    !isHomePage && (
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
            <Link
              href="/about"
              className="text-text hover:text-accent transition duration-300"
            >
              About
            </Link>
            <Link
              href="/portfolio"
              className="text-text hover:text-accent transition duration-300"
            >
              Portfolio
            </Link>
            <Link
              href="/contact"
              className="text-text hover:text-accent transition duration-300"
            >
              Contact
            </Link>
            <button
              onClick={toggleTheme}
              className="text-text hover:text-accent transition duration-300"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </motion.header>
    )
  );
};

export default Navbar;
