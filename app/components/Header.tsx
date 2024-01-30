"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { useTogglerContext } from "../context/toggler";

function Header() {
  const [style, setStyle] = useState("py-8 bg-transparent text-white");
  const [border, setBorder] = useState("border-white");
  const [afterBg, setAfterBg] = useState("after:bg-white");
  const { setMobileNavbar } = useTogglerContext();

  useEffect(() => {
    const onPageScroll = () => {
      setStyle(
        window.pageYOffset > 20
          ? "py-6 shadow-[1.95px_1.95px_2.6px_rgba(0,0,0,.15)] bg-white text-[#354150]"
          : "py-8 bg-transparent text-white"
      );
      setBorder(window.pageYOffset > 20 ? "border-[#354150]" : "border-white");
      setAfterBg(
        window.pageYOffset > 20 ? "after:bg-[#354150]" : "after:bg-white"
      );
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <section
      id="header"
      className={`${style} fixed inset-x-0 top-0 z-40 px-8 lg:px-16 flex items-center justify-between duration-300 ease-linear text-lg font-medium`}
    >
      <a href="/">
        <Image src="/logo.svg" alt="logo" width={175} height={50} priority />
      </a>
      <button
        onClick={() => setMobileNavbar(true)}
        className="text-[2.75rem] lg:hidden"
      >
        <RiMenu3Fill />
      </button>
      <div className="lg:flex gap-8 hidden">
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className={`relative after:absolute after:-bottom-[2px] hover:after:w-full after:inset-x-0 after:w-0 after:h-[1.5px] ${afterBg} after:duration-300 after:ease-linear`}
        >
          Home
        </button>
        <a
          href="#intro"
          className={`relative after:absolute after:-bottom-[2px] hover:after:w-full after:inset-x-0 after:w-0 after:h-[1.5px] ${afterBg} after:duration-300 after:ease-linear`}
        >
          About Us
        </a>
        <a
          href="#why-need-us"
          className={`relative after:absolute after:-bottom-[2px] hover:after:w-full after:inset-x-0 after:w-0 after:h-[1.5px] ${afterBg} after:duration-300 after:ease-linear`}
        >
          Our Value
        </a>
        <a
          href="#service"
          className={`relative after:absolute after:-bottom-[2px] hover:after:w-full after:inset-x-0 after:w-0 after:h-[1.5px] ${afterBg} after:duration-300 after:ease-linear`}
        >
          Service
        </a>
        <a
          href="#project"
          className={`relative after:absolute after:-bottom-[2px] hover:after:w-full after:inset-x-0 after:w-0 after:h-[1.5px] ${afterBg} after:duration-300 after:ease-linear`}
        >
          Project
        </a>
        <a
          href="#faq"
          className={`relative after:absolute after:-bottom-[2px] hover:after:w-full after:inset-x-0 after:w-0 after:h-[1.5px] ${afterBg} after:duration-300 after:ease-linear`}
        >
          FAQ
        </a>
      </div>
      <a
        href="#footer"
        className={`rounded-[30px] bg-transparent border-[1.75px] ${border} px-6 py-2 hidden lg:inline-block`}
      >
        Contact Us
      </a>
    </section>
  );
}

export default Header;
