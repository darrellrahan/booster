"use client";

import Image from "next/image";
import React from "react";
import Marqueee from "react-fast-marquee";

function Marquee() {
  return (
    <section
      id="marquee"
      className="h-[110px] bg-[#2281D5] text-white flex items-center"
    >
      <Marqueee className="overflow-hidden">
        <div className="flex items-center gap-4 lg:gap-8 text-[1.7rem] font-semibold">
          <span></span>
          <Image
            src="/marquee-hero-star.svg"
            alt="star"
            width={30}
            height={30}
            priority
          />
          <span>DIGITAL SOLUTION</span>
          <Image
            src="/marquee-hero-star.svg"
            alt="star"
            width={30}
            height={30}
            priority
          />
          <span>BUSINESS SOLUTION</span>
          <Image
            src="/marquee-hero-star.svg"
            alt="star"
            width={30}
            height={30}
            priority
          />
          <span>WEB DEVELOPMENT</span>
          <Image
            src="/marquee-hero-star.svg"
            alt="star"
            width={30}
            height={30}
            priority
          />
          <span>BUSINESS BRANDING</span>
          <Image
            src="/marquee-hero-star.svg"
            alt="star"
            width={30}
            height={30}
            priority
          />
          <span>DIGITAL SOLUTION</span>
          <Image
            src="/marquee-hero-star.svg"
            alt="star"
            width={30}
            height={30}
            priority
          />
          <span>BUSINESS SOLUTION</span>
        </div>
      </Marqueee>
    </section>
  );
}

export default Marquee;
