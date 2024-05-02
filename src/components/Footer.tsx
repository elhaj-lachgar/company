import { Default_Social } from "../constant";
import Logo from "./Logo";

function Footer() {
  return (
    <footer
      id="contact"
      className="flex flex-col py-5  gap-y-3  w-full bg-gray-50 border"
    >
      <div className="flex flex-col gap-y-3 md:items-center px-5 lg:px-10">
        <Logo />
        <h1
          className={`text-[#008FD5] font-bold  text-border-dark-optional
              text-xl md:text-2xl flex gap-x-2 items-center`}
        >
          Brothers Tech
        </h1>
        <div className="flex gap-x-8 items-center">
          {Default_Social.map((ele) => (
            < a href={ele.href} key={ele.href}  target="_blank">
              <img
                src={ele.img}
                alt="social"
                className="w-11 h-11 "
              />
            </a>
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
    </footer>
  );
}

export default Footer;
