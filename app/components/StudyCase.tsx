import Image from "next/image";
import React from "react";

function StudyCase() {
  return (
    <section id="study-case" className="px-8 py-24 lg:px-16 lg:py-32">
      <h4 className="text-[#2281D5] font-medium mb-4">CASE STUDIES</h4>
      <h1 className="text-3xl font-medium mb-16">
        Lorem Ipsum Dorol Sit Amet.
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="flex flex-col gap-6 lg:gap-4 text-center border border-[rgba(124,124,124,0.30)] shadow rounded-[10px] px-4 py-8 items-center">
          <Image
            src="sc-1.svg"
            alt="case study"
            width={70}
            height={70}
            priority
          />
          <h3 className="font-semibold text-xl lg:text-2xl lg:mt-2">
            Merek Tidak Dikenal
          </h3>
          <p className="lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna
          </p>
        </div>
        <div className="flex flex-col gap-6 lg:gap-4 text-center border border-[rgba(124,124,124,0.30)] shadow rounded-[10px] px-4 py-8 items-center">
          <Image
            src="sc-2.svg"
            alt="case study"
            width={70}
            height={70}
            priority
          />
          <h3 className="font-semibold text-xl lg:text-2xl lg:mt-2">
            Merek Susah Berkembang
          </h3>
          <p className="lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna
          </p>
        </div>
        <div className="flex flex-col gap-6 lg:gap-4 text-center border border-[rgba(124,124,124,0.30)] shadow rounded-[10px] px-4 py-8 items-center">
          <Image
            src="sc-3.svg"
            alt="case study"
            width={70}
            height={70}
            priority
          />
          <h3 className="font-semibold text-xl lg:text-2xl lg:mt-2">
            Konsumen Tidak Loyal
          </h3>
          <p className="lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna
          </p>
        </div>
      </div>
    </section>
  );
}

export default StudyCase;
