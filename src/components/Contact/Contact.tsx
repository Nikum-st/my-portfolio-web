import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";
import {
  containerVariants,
  formVariants,
  socialIconVariants,
} from "./utils/contsctVariants";
import { FormData } from "./components/FormData/FormData";

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
          <motion.div
            className="flex flex-col items-center justify-center space-y-6"
            variants={formVariants}
          >
            <motion.div variants={socialIconVariants}>
              <a
                href="mailto:your.email@example.com"
                className="flex items-center space-x-2 text-text hover:text-accent transition duration-300"
              >
                <Mail size={24} />
                <span>your.email@example.com</span>
              </a>
            </motion.div>
            <motion.div variants={socialIconVariants}>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-text hover:text-accent transition duration-300"
              >
                <Linkedin size={24} />
                <span>LinkedIn</span>
              </a>
            </motion.div>
            <motion.div variants={socialIconVariants}>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-text hover:text-accent transition duration-300"
              >
                <Github size={24} />
                <span>GitHub</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
