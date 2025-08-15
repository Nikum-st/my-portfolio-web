import { useState } from "react";
import { motion } from "framer-motion";
import { ProjectsType } from "./types/ProjectsTypes";
import { projects } from "./projects";
import {
  containerVariants,
  modalVariants,
  projectVariants,
} from "./utils/projectsVariantsMotion";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectsType | null>(
    null
  );

  return (
    <motion.section
      id="portfolio"
      className="py-20 bg-background"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-text text-center mb-12"
          variants={projectVariants}
        >
          Portfolio
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={projectVariants}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-70 transition duration-300 flex items-center justify-center">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-white text-xl font-semibold px-6 py-3 rounded-full bg-primary hover:bg-opacity-80 transition duration-300"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <motion.div
            className="bg-surface rounded-xl p-8 max-w-4xl w-full"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-text hover:text-accent transition duration-300"
            >
              Close
            </button>
            <h3 className="text-2xl font-bold text-text mb-2">
              {selectedProject.title}
            </h3>
            <p className="text-textSecondary mb-4">
              {selectedProject.description}
            </p>
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-text mb-1">
                Technologies:
              </h4>
              <ul className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech, index) => (
                  <li
                    key={index}
                    className="text-textSecondary bg-surface rounded-full px-3 py-1 text-sm"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex space-x-4">
              {selectedProject.liveLink && (
                <a
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 rounded-full bg-primary text-white hover:bg-opacity-80 transition duration-300"
                >
                  Live Demo
                </a>
              )}
              {selectedProject.githubLink && (
                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 rounded-full bg-surface text-text hover:bg-opacity-80 transition duration-300"
                >
                  GitHub
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </motion.section>
  );
};

export default Portfolio;
