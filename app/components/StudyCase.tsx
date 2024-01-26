import React from "react";

function StudyCase() {
  return (
    <section id="study-case" className="px-8 py-24 lg:px-16 lg:py-32">
      <h4 className="text-[#2281D5] font-medium mb-4">CASE STUDIES</h4>
      <h1 className="text-3xl font-medium mb-16">
        Lorem Ipsum Dorol Sit Amet.
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="space-y-4">
          <h3 className="flex gap-3 text-xl font-semibold lg:text-2xl">
            <span className="text-[#7c7c7c]">01.</span>
            <span>Merek Tidak Dikenal</span>
          </h3>
          <hr className="border-2 border-[#2281D5]" />
          <p className="lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="flex gap-3 text-xl font-semibold lg:text-2xl">
            <span className="text-[#7c7c7c]">02.</span>
            <span>Merek Susah Berkembang</span>
          </h3>
          <hr className="border-2 border-[#2281D5]" />
          <p className="lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="flex gap-3 text-xl font-semibold lg:text-2xl">
            <span className="text-[#7c7c7c]">03.</span>
            <span>Konsumen Tidak Loyal</span>
          </h3>
          <hr className="border-2 border-[#2281D5]" />
          <p className="lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </section>
  );
}

export default StudyCase;
