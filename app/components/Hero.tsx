import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <section
      id="hero"
      className="h-screen bg-[#B5D6F4] flex items-center p-16 relative"
    >
      <button className="absolute inset-x-1/2 -translate-x-1/2 bottom-12 w-[140px] h-[140px]">
        <Image
          src="/cta-hero.svg"
          alt="cta"
          width={30}
          height={30}
          className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2"
        />
        <Image
          src="/cta-hero-spin.svg"
          alt="cta"
          width={140}
          height={140}
          className="animate-spin-slow"
        />
      </button>
      <div className="w-[40%]">
        <h1 className="text-[3.5rem] leading-[1.5] font-bold mb-8">
          We
          <span className="bg-[#FCA739] rounded-[40px] py-2 px-4 ml-4">
            SCALE
          </span>
          <br />
          Your Business
        </h1>
        <p className="text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </section>
  );
}

export default Hero;
