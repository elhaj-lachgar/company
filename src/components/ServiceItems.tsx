import { useTranslation } from "react-i18next";
import { TService } from "../constant/types";
import ServiceModule from "./_modules/ServiceModule";
import { motion } from "framer-motion";

function ServiceItems({
  service,
  index,
}: {
  service: TService;
  index: number;
}) {
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
      className="flex  flex-col w-[320px] h-[350px] justify-between gap-y-4  no-scrollbar border shadow-2xl rounded-lg p-4"
    >
      <div className="flex flex-col  gap-y-2">
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
          src={service.img}
          alt="service image"
          className="h-[170px] rounded-lg"
        />
        <p className="text-bold text-xl text-gray-500 ">{service.name[lg]}</p>
      </div>
      <ServiceModule service={service} />
    </motion.div>
  );
}

export default ServiceItems;
