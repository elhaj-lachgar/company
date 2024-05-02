import {
  Modal,
  ModalOverlay,
  ModalContent,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { TService } from "../../constant/types";
import { X } from "lucide-react";
import { useTranslation } from "react-i18next";

function ServiceModule({ service }: { service: TService }) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [t] = useTranslation("global");
  const lg: "en" | "fr" = t("value");


  return (
    <>
      <Button colorScheme="blue" onClick={onOpen}>
        {t("element.btn")}
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
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
              <h2 className="text-xl font-semibold">Description :</h2>
              <div className="overflow-auto italic gap-y-2 flex flex-col  h-[100px] no-scrollbar border  p-2 bg-gray-100 rounded-xl ">
                {service.description[lg].map((description) => (
                  <p>{"-  " + description}</p>
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
