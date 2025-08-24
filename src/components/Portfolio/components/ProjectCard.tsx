import { motion } from "framer-motion";
import Image from "next/image";

type ProjectCardProps = {
  title: string;
  company?: string;
  imageUrl: string;
};

const ProjectCard = ({ title, company, imageUrl }: ProjectCardProps) => {
  return (
    <motion.div
      className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition duration-300 cursor-pointer"
      whileHover={{ scale: 1.02 }}
    >
      <Image
        src={imageUrl}
        alt={title}
        width={400}
        height={224}
        className="w-full h-56 object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-70 transition flex items-center justify-center">
        <h3 className="text-white text-lg font-semibold text-center px-2">
          {title} {company && <span className="text-accent">({company})</span>}
        </h3>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
