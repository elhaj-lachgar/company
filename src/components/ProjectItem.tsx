import { useTranslation } from "react-i18next";
import { TProject } from "../constant/types";
import ProjectModule from "./_modules/ProjectModule";
import { motion } from "framer-motion";

function ProjectItem({ project, index }: { project: TProject; index: number }) {
  const [t] = useTranslation("global");
  const lg: "en" | "fr" | "ar" = t("value");

  return (
    <motion.div
      initial={{
        x: lg == "fr" || lg == "en" ? -50 : 50,
        opacity: 0,
        // y: lg == "fr" || lg == "en" ? -50 : 50,
      }}
      transition={{
        duration: 0.3,
        delay: index * 0.2,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      className="flex flex-col  w-[320px] h-[350px] justify-between gap-y-4  no-scrollbar border shadow-2xl rounded-lg p-4"
    >
      <div className="flex flex-col  gap-y-2">
        <div className="border rounded-xl">
          <motion.img
            initial={{
              scale: 1,
            }}
            transition={{
              duration: 0.25,
            }}
            whileHover={{
              scale: 1.05,
              borderRadius : 0
            }}
            src={project.img}
            alt="service image"
            className="h-[170px] rounded"
          />
        </div>
        <p className="text-bold text-xl text-gray-500 ">{project.name[lg]}</p>
      </div>
      <ProjectModule project={project} />
    </motion.div>
  );
}

export default ProjectItem;
