import Image from "next/image";
import React from "react";

function Cta() {
  return (
    <section
      id="cta"
      className="mx-8 lg:mx-16 my-32 px-8 py-12 lg:px-16 lg:py-20 flex flex-col items-center text-center gap-8 lg:gap-12 bg-[url('/cta-bg.svg')] lg:bg-none lg:bg-[#033160] bg-cover rounded-[10px] text-white lg:text-left lg:items-start relative overflow-hidden"
    >
      <Image
        src="/cta-accent-desktop.svg"
        alt="cta"
        width={600}
        height={600}
        className="hidden lg:inline-block absolute top-0 right-0"
      />
      <h1 className="font-semibold text-2xl lg:text-4xl">
        Start Your Bussines Today!
      </h1>
      <p className="lg:text-xl lg:w-[40%]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <button className="rounded-[30px] bg-white px-6 py-2 text-[#033160] text-lg lg:text-xl">
        Start Chat
      </button>
    </section>
  );
}

export default Cta;
