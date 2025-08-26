import { motion } from "framer-motion";
import Image from "next/image";
import skills from "./utils/skils";
import {
  containerVariants,
  imageVariants,
  textVariants,
} from "./utils/motion-variants";
import { aboutText1, aboutText2, profileImageUrl } from "./utils/text-image";

const About = () => {
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
              width={800}
              height={800}
              src={profileImageUrl}
              alt="Profile"
              className="rounded-full shadow-lg"
            />
          </motion.div>
          {/* Right column wrapper: text shows on mount, skills reveal on scroll */}
          <div>
            <motion.div variants={textVariants}>
              <h2 className="text-4xl font-bold text-text mb-4">About Me</h2>
              <p className="text-textSecondary text-lg mb-8 ">{aboutText1}</p>
              <p className="text-textSecondary text-lg mb-8 ">{aboutText2}</p>
            </motion.div>
            <motion.div
              initial="off"
              whileInView="on"
              viewport={{ once: true, amount: 0.35 }}
              variants={{
                off: { opacity: 0, y: 40 },
                on: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: "easeOut" },
                },
              }}
            >
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
      </div>
    </motion.section>
  );
};

export default About;
