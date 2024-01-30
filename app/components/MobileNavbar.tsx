"use client";

import { X } from "@phosphor-icons/react";
import Image from "next/image";
import React from "react";
import { useTogglerContext } from "../context/toggler";

function MobileNavbar() {
  const { mobileNavbar, setMobileNavbar } = useTogglerContext();

  return (
    <section
      id="mobile-navbar"
      className={`fixed inset-y-0 right-0 bg-white ${
        mobileNavbar ? "left-0" : "left-[150%]"
      } z-50 transition-all duration-300 ease-linear p-8 flex flex-col justify-between`}
    >
      <div className="flex justify-between items-center">
        <Image src="/logo.svg" alt="logo" width={150} height={50} priority />
        <button onClick={() => setMobileNavbar(false)}>
          <X size={32} />
        </button>
      </div>
      <div className="flex flex-col gap-8 font-bold text-xl">
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setMobileNavbar(false);
          }}
          className="border-b-2 border-[#354150] text-center pb-4"
        >
          Home
        </button>
        <a
          href="#intro"
          className="border-b-2 border-[#354150] text-center pb-4"
          onClick={() => {
            setMobileNavbar(false);
          }}
        >
          About Us
        </a>
        <a
          href="#why-need-us"
          className="border-b-2 border-[#354150] text-center pb-4"
          onClick={() => {
            setMobileNavbar(false);
          }}
        >
          Our Value
        </a>
        <a
          href="#service"
          className="border-b-2 border-[#354150] text-center pb-4"
          onClick={() => {
            setMobileNavbar(false);
          }}
        >
          Service
        </a>
        <a
          href="#project"
          className="border-b-2 border-[#354150] text-center pb-4"
          onClick={() => {
            setMobileNavbar(false);
          }}
        >
          Project
        </a>
        <a
          href="#faq"
          className="border-b-2 border-[#354150] text-center pb-4"
          onClick={() => {
            setMobileNavbar(false);
          }}
        >
          FAQ
        </a>
      </div>
      <a
        href="#footer"
        className="w-full py-3 text-lg bg-[#2281D5] text-center rounded-md text-white"
        onClick={() => {
          setMobileNavbar(false);
        }}
      >
        Contact us
      </a>
    </section>
  );
}

export default MobileNavbar;
