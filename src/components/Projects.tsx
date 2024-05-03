import { useTranslation } from "react-i18next";
import { PROJECT_ITEMS } from "../constant";
import ProjectItem from "./ProjectItem";

function Projects() {
  const [t] = useTranslation('global');
  const lg: "en" | "fr" = t("value");

  return (
    <div id="projects" className="flex flex-col  w-full items-center  p-4 ">
      <h1 className="text-4xl ">{t('projects.title')}</h1>
      <hr className="w-24 h-1 mx-auto my-4 md:my-6 bg-white border-0 rounded  dark:bg-blue-400" />
      <div className="flex flex-wrap gap-8 justify-center px-5 py-4 my-4">
        {PROJECT_ITEMS.map((item) => (
          <ProjectItem project={item} key={item.name[lg]} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
