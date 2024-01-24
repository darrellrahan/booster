"use client";

import { X } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
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
        <Image src="/logo.svg" alt="logo" width={175} height={50} priority />
        <button onClick={() => setMobileNavbar(false)}>
          <X size={40} />
        </button>
      </div>
      <div className="flex flex-col gap-8 font-bold text-2xl">
        <Link href="/" className="border-b-2 border-[#354150] text-center pb-4">
          Home
        </Link>
        <Link href="/" className="border-b-2 border-[#354150] text-center pb-4">
          About Us
        </Link>
        <Link href="/" className="border-b-2 border-[#354150] text-center pb-4">
          Case Studies
        </Link>
        <Link href="/" className="border-b-2 border-[#354150] text-center pb-4">
          Service
        </Link>
        <Link href="/" className="border-b-2 border-[#354150] text-center pb-4">
          Project
        </Link>
        <Link href="/" className="border-b-2 border-[#354150] text-center pb-4">
          FAQ
        </Link>
      </div>
      <button className="w-full py-3 text-xl bg-[#2281D5] text-center rounded-md text-white">
        Contact us
      </button>
    </section>
  );
}

export default MobileNavbar;
