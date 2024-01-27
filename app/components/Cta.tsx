import React from "react";

function Cta() {
  return (
    <section
      id="cta"
      className="mx-8 lg:mx-16 my-32 px-8 py-12 lg:py-20 flex flex-col items-center text-center gap-8 lg:gap-12 bg-[#033160] rounded-[30px] text-white"
    >
      <h1 className="font-semibold text-2xl lg:text-4xl">
        Start Your Bussines Today!
      </h1>
      <p className="lg:text-xl lg:w-[750px] lg:mx-auto">
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
