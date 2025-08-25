"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDownCircle } from "lucide-react";
import { NavigationLink } from "../NavigationLink/NavigationLink";

interface HomeProps {
  name: string;
  title: string;
  backgroundImageUrl: string;
}

const Home: React.FC<HomeProps> = ({ name, title, backgroundImageUrl }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1, staggerChildren: 0.5 },
    },
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.75, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h1
          className="text-6xl md:text-8xl font-extrabold text-white mb-4"
          variants={textVariants}
        >
          {name}
        </motion.h1>
        <motion.p
          className="text-2xl md:text-3xl text-gray-300 mb-8"
          variants={textVariants}
        >
          {title}
        </motion.p>
        <motion.div
          className="text-white hover:text-purple-500 "
          variants={textVariants}
        >
          <NavigationLink
            href="/about"
            className="flex items-center justify-center gap-2"
          >
            <ArrowDownCircle />
            <span>Explore</span>
          </NavigationLink>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Home;
