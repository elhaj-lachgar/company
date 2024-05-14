import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

function Banner() {
  const [t] = useTranslation("global");
  return (
    <motion.div
      id="home"
      className="relative flex flex-col text-gray-200 items-center  justify-center w-full h-[350px] md:h-[500px] lg:h-screen mt-[64px] lg:mt-0"
      initial={{
        opacity : 0
      }}
      whileInView={{
        opacity : 1
      }}
      transition={{
        duration : 1
      }}
    >
      <img
        src="/b_home.jpg"
        alt="brothers tech home image  "
        className="w-full h-full "
      />
      <div className="absolute top-[20%] right-auto flex flex-col gap-y-4 text-center">
        <h1 className=" text-xl md:text-6xl text-border-blue-1 md:text-border-blue-2   uppercase">
          {t("banner.title")}
        </h1>
        <h1 className=" text-2xl md:text-6xl text-border-blue-1  md:text-border-blue-2  uppercase font-bold">
          Brothers Tech !
        </h1>
        <hr className="w-48 h-1 mx-auto my-4 bg-blue-400 border-0 rounded md:my-10 dark:bg-blue-400" />
        <p className=" md:text-border-blue-1 w-11/12 mx-auto md:text-2xl  text-center">
          {t("banner.description")}
        </p>
      </div>
    </motion.div>
  );
}

export default Banner;
