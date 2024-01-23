"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Header() {
  const [style, setStyle] = useState("py-8 bg-transparent");

  useEffect(() => {
    const onPageScroll = () => {
      setStyle(
        window.pageYOffset > 20
          ? "py-6 shadow-[1.95px_1.95px_2.6px_rgba(0,0,0,.15)] bg-white"
          : "py-8 bg-transparent"
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
      className={`${style} fixed inset-x-0 top-0 z-50 px-16 flex items-center justify-between duration-300 ease-linear text-lg font-medium`}
    >
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={175} height={50} priority />
      </Link>
      <div className="flex gap-8">
        <Link
          href="/"
          className={`relative after:absolute after:-bottom-[2px] hover:after:w-full after:inset-x-0 after:w-0 after:h-[1.5px] after:bg-[#354150] after:duration-300 after:ease-linear`}
        >
          Home
        </Link>
        <Link
          href="/"
          className={`relative after:absolute after:-bottom-[2px] hover:after:w-full after:inset-x-0 after:w-0 after:h-[1.5px] after:bg-[#354150] after:duration-300 after:ease-linear`}
        >
          Case Studies
        </Link>
        <Link
          href="/"
          className={`relative after:absolute after:-bottom-[2px] hover:after:w-full after:inset-x-0 after:w-0 after:h-[1.5px] after:bg-[#354150] after:duration-300 after:ease-linear`}
        >
          Services
        </Link>
        <Link
          href="/"
          className={`relative after:absolute after:-bottom-[2px] hover:after:w-full after:inset-x-0 after:w-0 after:h-[1.5px] after:bg-[#354150] after:duration-300 after:ease-linear`}
        >
          Project
        </Link>
        <Link
          href="/"
          className={`relative after:absolute after:-bottom-[2px] hover:after:w-full after:inset-x-0 after:w-0 after:h-[1.5px] after:bg-[#354150] after:duration-300 after:ease-linear`}
        >
          Customer
        </Link>
        <Link
          href="/"
          className={`relative after:absolute after:-bottom-[2px] hover:after:w-full after:inset-x-0 after:w-0 after:h-[1.5px] after:bg-[#354150] after:duration-300 after:ease-linear`}
        >
          FAQ
        </Link>
      </div>
      <button className="rounded-[30px] bg-[#354150] px-4 py-2 text-white">
        Contact Us
      </button>
    </section>
  );
}

export default Header;
