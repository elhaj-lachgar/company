import { useTranslation } from "react-i18next";
import { TProject } from "../constant/types";
import ProjectModule from "./_modules/ProjectModule";

function ProjectItem({ project }: { project: TProject }) {
  const [t] = useTranslation('global');
  const lg: "en" | "fr" = t("value");

  return (
    <div className="flex flex-col  w-[320px] h-[350px] justify-between gap-y-4  no-scrollbar hover:border shadow-2xl rounded-lg p-4">
      <div className="flex flex-col  gap-y-2">
        <div className="border rounded-xl">
          <img
            src={project.img}
            alt="service image"
            className="h-[170px] rounded-xl"
          />
        </div>
        <p className="text-bold text-xl text-gray-500 ">{project.name[lg]}</p>
      </div>
      <ProjectModule project={project} />
    </div>
  );
}

export default ProjectItem;
