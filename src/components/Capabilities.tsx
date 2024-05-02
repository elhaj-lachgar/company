import { useTranslation } from "react-i18next";
import { CAPABILITIE_ITEMS } from "../constant";

function Capabilities() {
  const [t] = useTranslation("global");
  return (
    <div
      id="capabilities"
      className="flex flex-col  w-full items-center pb-[100px] p-4 mt-10 justify-center bg-white"
    >
      <h1 className="text-4xl ">{t("capabilities.title")}</h1>
      <hr className="w-24 h-1 mx-auto my-4 md:my-6 bg-white border-0 rounded  dark:bg-blue-400" />{" "}
      <p className="w-10/12 md:3/4 lg:w-1/2 text-lg md:text-2xl text-center mt-4 text-gray-500 ">
        <span className="font-bold text-blue-500">Brothers Tech</span>
        {t("capabilities.description")}
      </p>
      <div className="flex flex-wrap gap-8 justify-center mt-10 md:mt-20  md:w-3/4 lg:w-1/2">
        {CAPABILITIE_ITEMS.map((item) => (
          <div className="flex cursor-pointer flex-col gap-y-1 justify-center items-center text-gray-800 font-semibold">
            <img
              src={item.img}
              className={` object-cover  rounded-full w-16 h-16 bg-gray-500`}
            />
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Capabilities;
