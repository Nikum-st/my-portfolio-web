import React from "react";
import { motion } from "framer-motion";

import { containerVariants, formVariants } from "./utils/contsctVariants";
import { FormData } from "./components/FormData/FormData";
import { SocialMedia } from "./components/SocialMedia/SocialMedia";

const Contact: React.FC = () => {
  return (
    <motion.section
      id="contact"
      className="py-20 "
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-text text-center mb-12"
          variants={formVariants}
        >
          Contact Me
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FormData />
          <SocialMedia />
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
