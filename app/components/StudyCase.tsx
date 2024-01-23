import Image from "next/image";
import React from "react";

function StudyCase() {
  return (
    <section id="study-case" className="px-16 pt-32 pb-48">
      <h1 className="text-center text-4xl font-bold leading-snug mb-60">
        Anyone can do it!
        <br />
        Try it yourself, right now.
      </h1>
      <div className="h-[500px] bg-[#017EF9] rounded-[30px] flex items-center justify-center relative">
        <h3 className="text-white text-4xl font-medium">STUDY CASE</h3>
        <div className="absolute left-32 -top-32 h-[280px] w-[325px] rounded-[10px] border border-[#7c7c7c4c] bg-white shadow-[0px_4px_4px_0px_rgba(1,126,249,0.30)] flex flex-col justify-center gap-6 p-6">
          <div className="flex justify-between items-center gap-6">
            <h4 className="text-[22px] font-medium">Merek Tidak Dikenal</h4>
            <Image src="/sc-1.svg" alt="icon" width={65} height={65} priority />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="absolute right-32 -top-32 h-[280px] w-[325px] rounded-[10px] border border-[#7c7c7c4c] bg-white shadow-[0px_4px_4px_0px_rgba(1,126,249,0.30)] flex flex-col justify-center gap-6 p-6">
          <div className="flex justify-between items-center gap-6">
            <h4 className="text-[22px] font-medium">
              Tidak Memiliki Konsumen Loyal
            </h4>
            <Image src="/sc-2.svg" alt="icon" width={65} height={65} priority />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="absolute inset-x-1/2 -translate-x-1/2 -bottom-32 h-[280px] w-[325px] rounded-[10px] border border-[#7c7c7c4c] bg-white shadow-[0px_4px_4px_0px_rgba(1,126,249,0.30)] flex flex-col justify-center gap-6 p-6">
          <div className="flex justify-between items-center gap-6">
            <h4 className="text-[22px] font-medium">Merek Susah Berkembang</h4>
            <Image src="/sc-3.svg" alt="icon" width={65} height={65} priority />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </section>
  );
}

export default StudyCase;
