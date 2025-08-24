import { motion } from "framer-motion";
import Image from "next/image";

import {
  FaReact,
  FaJs,
  FaCss3Alt,
  FaHtml5,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiRedux,
  SiVite,
  SiWebpack,
  SiBabel,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiJira,
} from "react-icons/si";

const skills = {
  Frontend: [
    { name: "React", icon: <FaReact className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "Framer Motion", icon: <SiFramer className="text-pink-500" /> },
    { name: "Redux Toolkit", icon: <SiRedux className="text-purple-500" /> },
    { name: "Vite", icon: <SiVite className="text-purple-400" /> },
    { name: "Webpack", icon: <SiWebpack className="text-blue-300" /> },
    { name: "Babel", icon: <SiBabel className="text-yellow-400" /> },
  ],
  Backend: [
    { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
    { name: "Express", icon: <SiExpress className="text-gray-500" /> },
    { name: "SQL", icon: <FaJs className="text-gray-400" /> }, // Можно заменить на подходящую
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
  ],
  "Tools & DevOps": [
    { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
    { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
    { name: "Jira", icon: <SiJira className="text-blue-400" /> },
    { name: "CI/CD", icon: <FaJs className="text-gray-500" /> }, // Можно кастомную иконку
  ],
};

const profileImageUrl = "/img/IMG_7039_jpg.jpg";

const aboutText1 = `
Hi! I’m Nikita, a Frontend Developer from Sakhalin Island, Russia — where winter feels like a boss fight.
 Now I code from sunny Italy, fueled by espresso and a love for clean, user-friendly interfaces. 
I have over 2 years of experience building responsive web applications, landing pages, and corporate websites using React, TypeScript, Redux Toolkit, and Tailwind CSS.

`;
const aboutText2 = `
I’ve worked at Nimax, creating landing pages and corporate sites like AAG and Letovo, and on other projects I built SPA applications. 
I also mentored junior developers at Result University and started my career at Zapal.agency, working on interactive sites like Senior Bay and Showbox. 
I love learning new tech, solving tricky bugs (sometimes at 2 a.m. with coffee ☕), and making code that not only works but also makes people smile.
`;

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.75, staggerChildren: 0.3 },
    },
  };

  const imageVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.75, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id="about"
      className="py-20 "
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div variants={imageVariants}>
            <Image
              src={profileImageUrl}
              alt="Profile"
              className="rounded-full shadow-lg"
            />
          </motion.div>
          <motion.div variants={textVariants}>
            <h2 className="text-4xl font-bold text-text mb-4">About Me</h2>
            <p className="text-textSecondary text-lg mb-8 ">{aboutText1}</p>
            <p className="text-textSecondary text-lg mb-8 ">{aboutText2}</p>
            <h3 className="text-2xl font-semibold text-text mb-2">Skills</h3>
            <div className="space-y-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <h4 className="text-xl font-bold mb-2">{category}</h4>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {items.map((skill, index) => (
                      <li key={index} className="flex items-center gap-2">
                        {skill.icon} {skill.name}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
