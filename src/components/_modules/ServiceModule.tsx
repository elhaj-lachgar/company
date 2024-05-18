import {
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
} from "@chakra-ui/react";
import { TService } from "../../constant/types";
import { X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useDirectionContext } from "../../context/DirectionContextProvider";
import { motion } from "framer-motion";

function ServiceModule({ service }: { service: TService }) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [t] = useTranslation("global");
  const lg: "en" | "fr" | "ar" = t("value");
  const { dir } = useDirectionContext();

  return (
    <>
      <motion.button
        initial={{ opacity: 0.9 }}
        whileHover={{
          scale: 1.05,
          opacity: 1,
        }}
        className="text-white rounded-md bg-blue-500 p-2"
        onClick={onOpen}
      >
        {t("element.btn")}
      </motion.button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay dir={dir} />
        <ModalContent>
          <div className="flex justify-between px-5 py-4 text-lg font-medium h-fit">
            {service.name[lg].length < 20
              ? service.name[lg]
              : service.name[lg].substring(0, 25) + "..."}
            <X
              className="text-white bg-red-500 rounded-md w-7 h-7 cursor-pointer"
              onClick={onClose}
            />
          </div>
          <hr />
          <div className="flex flex-col items-center p-4 gap-y-4">
            <img
              src={service.img}
              alt="service image"
              className="h-[200px] w-full rounded-lg"
            />
            <div className="flex flex-col gap-y-1 w-full">
              <h2 className="text-xl font-semibold">{t("element.title")}:</h2>
              <h2 className="w-full font-medium ml-2">{service.name[lg]}</h2>
            </div>
            <div className="flex flex-col gap-y-1">
              <h2 className="text-xl font-semibold">{t("element.prdesc")} :</h2>
              <div className="overflow-auto italic gap-y-2 flex flex-col  min-h-[100px] no-scrollbar border  p-2 bg-gray-100 rounded-xl ">
                {service.description[lg].map((description) => (
                  <p key={service.description.en[0]}>{"-  " + description}</p>
                ))}
              </div>
            </div>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ServiceModule;
