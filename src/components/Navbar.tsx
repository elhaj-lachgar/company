import { NAV_BAR_ITEMS } from "../constant";
import Logo from "./Logo";
import { useEffect, useState } from "react";
import { AlignRight, AlignJustify } from "lucide-react";
import { useLocation } from "react-router-dom";
import Flag from "react-country-flag";
import { useTranslation } from "react-i18next";
import { useDirectionContext } from "../context/DirectionContextProvider";

function Navbar() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [t, i18n] = useTranslation("global");
  const { setDir } = useDirectionContext();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const valid = window.scrollY != 0;
      if (valid) setScroll(true);
      else setScroll(false);
    });
    return () => window.removeEventListener("scroll", () => {});
  }, []);

  const changeLanguages = (lgs: "en" | "fr" | "ar") => {
    i18n.changeLanguage(lgs);
  };

  const lg: "en" | "fr" | 'ar' = t("value");

  return (
    <nav
      className={`flex flex-col  py-1 bg-white  fixed top-0 w-full z-20 ${
        scroll ? "bg-white opacity-95" : "lg:bg-transparent"
      } shadow-lg`}
    >
      <div className="flex items-center justify-between px-2 md:px-10">
        <div className="flex items-center gap-x-8">
          <a
            href="#home"
            className={`text-[#008FD5] ${
              scroll ? "text-border-light" : "text-border-dark"
            } font-mono text-xl md:text-2xl flex gap-x-2 items-center`}
          >
            <Logo /> Brothers Tech
          </a>
        </div>
        <div className=" hidden lg:flex items-center gap-x-4 ">
          {NAV_BAR_ITEMS.map((item) => (
            <a
              href={item.link}
              key={item.name.en}
              className={`font-medium ${
                pathname == item.link
                  ? "text-[#008FD5]"
                  : `${scroll ? "text-gray-500" : "text-gray-200"}`
              } hover:text-[#008FD5]`}
            >
              {item.name[lg]}
            </a>
          ))}
          <Flag
            svg
            countryCode="us"
            className="cursor-pointer"
            onClick={() => {
              changeLanguages("en");
              setDir("ltr");
            }}
          />
          <Flag
            svg
            countryCode="fr"
            className="cursor-pointer"
            onClick={() => {
              changeLanguages("fr");
              setDir("ltr");
            }}
          />
          <Flag
            svg
            countryCode="ma"
            className="cursor-pointer"
            onClick={() => {
              changeLanguages("ar");
              setDir("rtl");
            }}
          />
        </div>

        <div className=" lg:hidden">
          {!isOpen ? (
            <AlignRight
              className="p-1 cursor-pointer size-9 border bg-gray-100 rounded-lg"
              onClick={() => setIsOpen(!isOpen)}
            />
          ) : (
            <AlignJustify
              className="p-1 cursor-pointer size-9 border bg-gray-100 rounded-lg"
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
        </div>
      </div>
      {isOpen && (
        <div className="flex px-5 md:px-10 flex-col mb-4 gap-y-3 mt-5 lg:hidden ">
          {" "}
          {NAV_BAR_ITEMS.map((item) => {
            console.log(t("value"))
            console.log(item.name[lg]);
            return (
              <a
                href={item.link}
                key={item.name[lg]}
                className={`font-medium  ${
                  pathname == item.link ? "text-blue-500" : "text-gray-950"
                } hover:text-blue-500`}
              >
                {item.name[lg]}
              </a>
            );
          })}
          <div className="flex justify-end items-center gap-x-2">
            <Flag
              svg
              countryCode="us"
              className="cursor-pointer"
              style={{
                width: "25px",
                height: "25px",
              }}
              onClick={() => {
                changeLanguages("en");
                setDir("ltr");
              }}
            />
            <Flag
              svg
              style={{
                width: "25px",
                height: "25px",
              }}
              countryCode="fr"
              className="cursor-pointer"
              onClick={() => {
                changeLanguages("fr");
                setDir("ltr");
              }}
            />
            <Flag
              svg
              style={{
                width: "25px",
                height: "25px",
              }}
              countryCode="ma"
              className="cursor-pointer"
              onClick={() => {
                changeLanguages("ar");
                setDir("rtl");
              }}
            />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
