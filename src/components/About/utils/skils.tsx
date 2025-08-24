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
  SiNextdotjs,
} from "react-icons/si";

const skills = {
  Frontend: [
    { name: "React", icon: <FaReact className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-gray-500" /> },
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
    { name: "SQL", icon: null },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
  ],
  "Tools & DevOps": [
    { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
    { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
    { name: "Jira", icon: <SiJira className="text-blue-400" /> },
    { name: "CI/CD", icon: null },
  ],
};

export default skills;
