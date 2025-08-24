import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Download } from "lucide-react";
import { formVariants, socialIconVariants } from "../../utils/contsctVariants";
import { PiTelegramLogo } from "react-icons/pi";

export const SocialMedia = () => (
  <motion.div
    className="flex flex-col items-center justify-center space-y-6"
    variants={formVariants}
  >
    <motion.a
      href="/Nikita Umanskiy Frontend.pdf"
      download
      className="inline-flex items-center gap-2 px-8 py-4 mb-4 rounded-full shadow-lg  font-medium  hover:shadow-xl hover:scale-105 transition duration-300"
      whileHover={{ scale: 1.08 }}
    >
      <Download size={20} />
      Download CV
    </motion.a>
    <motion.div variants={socialIconVariants}>
      <a
        href="mailto:nik.uman.developer@gmail.com"
        className="flex items-center space-x-2 text-text hover:text-purple-500 transition duration-300"
      >
        <Mail size={24} />
        <span>nik.uman.developer@gmail.com</span>
      </a>
    </motion.div>
    <motion.div variants={socialIconVariants}>
      <a
        href="https://www.linkedin.com/in/nikita-umanskii-dev/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 text-text hover:text-purple-500 transition duration-300"
      >
        <Linkedin size={24} />
        <span>LinkedIn</span>
      </a>
    </motion.div>
    <motion.div variants={socialIconVariants}>
      <a
        href="https://github.com/Nikum-st"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 text-text hover:text-purple-500 transition duration-300"
      >
        <Github size={24} />
        <span>GitHub</span>
      </a>
    </motion.div>
    <motion.div variants={socialIconVariants}>
      <a
        href="https://t.me/nikum_st"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 text-text hover:text-purple-500 transition duration-300"
      >
        <PiTelegramLogo size={24} />
        <span>Telegram</span>
      </a>
    </motion.div>
  </motion.div>
);
