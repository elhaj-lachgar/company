import { Default_Social } from "../constant";
import { motion } from "framer-motion";

import Logo from "./Logo";

function Footer() {

  return (
    <motion.footer
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 0.95,
      }}
      whileInView={{
        opacity: 1,
      }}
      id="contact"
      className="flex flex-col py-5  gap-y-3  w-full bg-gray-50 border"
    >
      <div className="flex flex-col gap-y-3 md:items-center px-5 lg:px-10">
        <Logo />
        <h1
          className={`text-[#008FD5] font-bold  text-border-dark-optional
              text-xl md:text-2xl flex gap-x-1 items-center`}
        >
          Brother Tech
        </h1>
        <div className="flex gap-x-4 lg:gap-x-8 items-center">
          {Default_Social.map((ele, index) => (
            <motion.a
              initial={{
                opacity: 0,
                x: 20,
              }}
              transition={{
                duration: 0.2,
                delay: 0.2 * index,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              href={ele.href}
              key={ele.href}
              target="_blank"
            >
              <img src={ele.img} alt="social" className="w-10 h-10 bg-gray-50 " />
            </motion.a>
          ))}
        </div>
      </div>
      <hr />
      <div className="flex flex-col items-center md:flex-row md:justify-between px-10 gap-y-2 text-gray-500">
        <p className="flex gap-x-2">
          {"Copyright © 2024 "}
          <span
            className="text-[#008FD5] font-bold  text-border-dark
            flex gap-x-2 items-center"
          >
            Brothers Tech
          </span>
        </p>
        <p className="flex gap-x-2">
          {"Powered by"}{" "}
          <span
            className="text-[#008FD5] font-bold  text-border-dark
            flex gap-x-2 items-center"
          >
            Brothers Tech
          </span>
        </p>
      </div>
    </motion.footer>
  );
}

export default Footer;
