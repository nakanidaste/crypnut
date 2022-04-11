import React from "react";
import { Logo, Sun, Moon } from "../images";
import useDarkMode from "../hooks/useDarkMode";

const Navbar = () => {
  const [setTheme, colorTheme] = useDarkMode();

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4 font-fira dark:bg-black">
      <div className="md:flex-[1] flex-initial justify-center items-center">
        <img src={Logo} alt="logo" className="w-20 cursor-pointer" />
      </div>
      <div className="sm:flex list-none items-center flex-initial">
        <div
          onClick={() => setTheme(colorTheme)}
          className="w-10 h-10 bg-white rounded-full shadow-lg cursor-pointer text-white flex items-center justify-center"
        >
          {colorTheme === "light" ? (
            <img src={Sun} className="w-6 h-6" />
          ) : (
            <img src={Moon} className="w-6 h-6" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
