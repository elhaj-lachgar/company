import { useTranslation } from "react-i18next";
import { TService } from "../constant/types";
import ServiceModule from "./_modules/ServiceModule";

function ServiceItems({ service }: { service: TService }) {
  const [t] = useTranslation('global');
  const lg: "en" | "fr" = t("value");
  return (
    <div className="flex  flex-col w-[320px] h-[350px] justify-between gap-y-4  no-scrollbar hover:border shadow-2xl rounded-lg p-4">
      <div className="flex flex-col  gap-y-2">
        <img src={service.img} alt="service image" className="h-[170px] rounded-lg" />
        <p className="text-bold text-xl text-gray-500 ">{service.name[lg]}</p>
      </div>
      <ServiceModule service={service}/>
    </div>
  );
}

export default ServiceItems;
