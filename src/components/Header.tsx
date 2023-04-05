import React from "react";

import Logo from "../../public/images/logo-bookmark.svg";
import Hamburguer from "../../public/images/icon-hamburger.svg";

const isStartOfPage = window.scrollY <= 0;

export const Header = () => {
  return (
    <header
      className={`fixed top-0 left-0 right-0 bg-white ${
        isStartOfPage ? "" : "shadow-2xl"
      } z-50 flex items-center justify-between px-8 py-12 transition`}
    >
      <a href="/" className="flex items-center gap-4">
        <img src={Logo} alt="Bookmark Logo" className="w-52" />
      </a>
      <button className="sm:hidden">
        <img src={Hamburguer} alt="Menu Button" className="w-6" />
      </button>
    </header>
  );
};
