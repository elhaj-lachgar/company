import { Fragment } from "react/jsx-runtime";
import { SERVICE_ITEMS } from "../constant";
import ServiceItems from "./ServiceItems";
import { useTranslation } from "react-i18next";

function OurServices() {
  const [t] = useTranslation('global');
  const lg: "en" | "fr" = t("value");

  return (
    <div id="services" className="flex flex-col  items-center    relative">
      <h1 className="text-4xl ">{t('services.title')} </h1>
      <hr className="w-24 h-1 mx-auto my-4 md:my-6 bg-white border-0 rounded  dark:bg-blue-400" />
      <div className="flex flex-wrap gap-8 justify-center px-5 py-4 my-4">
        {SERVICE_ITEMS.map((sr) => (
          <Fragment key={sr.name[lg]}>
            <ServiceItems service={sr} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default OurServices;
