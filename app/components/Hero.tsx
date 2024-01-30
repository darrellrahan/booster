"use client";

import { CaretDoubleDown, TrendUp } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <section
      id="hero"
      className="h-screen text-white bg-[url('/hero-bg.svg')] lg:bg-[url('/hero-bg-lg.svg')] bg-cover relative"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,49,96,0.85)_11.23%,rgba(3,49,96,0.82)_61.42%,rgba(3,49,96,0.10)_99.55%)] lg:bg-[linear-gradient(90deg,rgba(3,49,96,0.85)_0%,rgba(3,49,96,0.82)_25.37%,rgba(3,49,96,0.10)_100%)] flex items-center p-8 lg:p-16">
        <div>
          <div className="flex gap-4 lg:gap-6 items-center mb-2">
            <h1 className="text-5xl lg:text-7xl font-bold">We Scale</h1>
            <TrendUp className="text-6xl lg:text-8xl" />
          </div>
          <h1 className="text-5xl lg:text-7xl font-light mb-8">
            Your Business
          </h1>
          <div className="flex gap-4 items-center">
            <hr className="w-[30px] h-[1.5px] bg-white" />
            <p className="lg:text-lg">
              Lorem ipsum dolor sit amet,
              <br className="lg:hidden" />
              consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <a
          href="#intro"
          className="absolute inset-x-1/2 -translate-x-1/2 bottom-8 w-[130px] h-[130px]"
        >
          <div className="w-[80px] h-[80px] rounded-full bg-[#2281D5] absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 text-white flex items-center justify-center">
            <CaretDoubleDown size={32} />
          </div>
          <Image
            priority
            src="/cta-hero.svg"
            alt="cta"
            width={130}
            height={130}
            className="animate-spin-slow"
          />
        </a>
      </div>
    </section>
  );
}

export default Hero;
