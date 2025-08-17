import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./components/ProjectCard";
import { projects } from "./projects";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { ProjectsType } from "./types/ProjectsTypes";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectsType | null>(
    null
  );

  return (
    <motion.section
      id="portfolio"
      className="py-20 bg-background"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-text text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Portfolio
        </motion.h2>

        {/* Карточки */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} onClick={() => setSelectedProject(project)}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>

      {/* Модал */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-surface rounded-xl p-8 max-w-4xl w-full relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Кнопка закрытия */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-text hover:text-accent transition"
              >
                ✕
              </button>

              {/* Заголовок */}
              <h3 className="text-2xl font-bold text-text mb-2">
                {selectedProject.title}{" "}
                {selectedProject.company && (
                  <span className="text-accent">
                    ({selectedProject.company})
                  </span>
                )}
              </h3>

              {/* Слайдер */}
              {selectedProject.images && selectedProject.images.length > 0 && (
                <Swiper
                  modules={[Navigation]}
                  navigation
                  spaceBetween={20}
                  slidesPerView={1}
                  className="rounded-xl mb-6"
                >
                  {selectedProject.images.map((img: string, idx: number) => (
                    <SwiperSlide key={idx}>
                      <img
                        src={img}
                        alt={`${selectedProject.title} screenshot ${idx + 1}`}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}

              {/* Описание */}
              <p className="text-textSecondary mb-4">
                {selectedProject.description}
              </p>

              {/* Роль */}
              {selectedProject.role && (
                <p className="text-sm text-text mb-4">
                  <strong>My role:</strong> {selectedProject.role}
                </p>
              )}

              {/* Технологии */}
              <h4 className="text-lg font-semibold text-text mb-1">
                Technologies:
              </h4>
              <ul className="flex flex-wrap gap-2 mb-4">
                {selectedProject.technologies.map((tech: string, i: number) => (
                  <li
                    key={i}
                    className="px-3 py-1 text-xs bg-background rounded-full text-textSecondary"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              {/* Кнопки */}
              <div className="flex space-x-4">
                {selectedProject.liveLink && (
                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-full bg-primary text-white hover:bg-opacity-80 transition"
                  >
                    Link
                  </a>
                )}
                {selectedProject.githubLink && (
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-full bg-surface text-text border hover:bg-background transition"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Portfolio;
