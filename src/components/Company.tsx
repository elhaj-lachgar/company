import { useTranslation } from "react-i18next";
import { motion} from "framer-motion";

function Company() {
  const [t] = useTranslation("global");

  return (
    <motion.div
      id="about"
      className="flex flex-col  w-full items-center pb-[100px]  p-6 bg-[#008FD5] text-gray-200"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
    >
      <h1 className="text-4xl ">{t("company.title")}</h1>

      <hr className="w-24 h-1 mx-auto my-4 md:my-6 bg-white border-0 rounded  dark:bg-white" />
      <p className="w-10/12 md:3/4 lg:w-1/2   md:text-2xl text-center mt-2">
        {t("company.normalText")}{" "}
        <span className="font-bold text-xl  md:text-2xl text-blue-800 text-border-dark ">
          {" "}
          Brothers Tech{" "}
        </span>{" "}
        {t("company.firstText")}
      </p>
      <p className="w-10/12 md:3/4 lg:w-1/2    md:text-2xl  text-center mt-4">
        {t("company.secondText")}
      </p>
      <p className="w-10/12 md:3/4 lg:w-1/2    md:text-2xl  text-center mt-3">
        {t("company.lastText")}
      </p>
    </motion.div>
  );
}

export default Company;
