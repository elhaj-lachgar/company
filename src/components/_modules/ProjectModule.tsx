import {
  Modal,
  ModalOverlay,
  ModalContent,
  Button,
  useDisclosure,
  ModalFooter,
} from "@chakra-ui/react";
import { TProject } from "../../constant/types";
import { X } from "lucide-react";
import { useTranslation } from "react-i18next";

function ProjectModule({ project }: { project: TProject }) {
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
            {project.name}
            <X
              className="text-white bg-red-500 rounded-md w-7 h-7 cursor-pointer"
              onClick={onClose}
            />
          </div>
          <hr />
          <div className="flex flex-col items-center p-4 gap-y-4">
            <div className="border rounded-xl w-full">
              <img
                src={project.img}
                alt="service image"
                className="h-[200px] w-full rounded-xl border"
              />
            </div>
            <div className="flex flex-col gap-y-1 w-full">
              <h2 className="text-xl font-semibold">
                {t("element.prtitle")} :
              </h2>
              <h2 className="w-full font-medium ">{project.name}</h2>
            </div>
            <div className="flex flex-col gap-y-1 w-full">
              <h2 className="text-xl font-semibold">
                Description of Project :
              </h2>
              <div className="overflow-auto italic no-scrollbar  border  p-2 bg-gray-100 rounded-xl  ">
                - {" " + project.description[lg]}
              </div>
            </div>
          </div>
          {project.valid && (
            <ModalFooter gap={2}>
              <Button colorScheme="blue">See Code</Button>
              <Button colorScheme="green">Visite</Button>
            </ModalFooter>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default ProjectModule;