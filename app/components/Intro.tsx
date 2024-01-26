import React from "react";

function Intro() {
  return (
    <section
      id="intro"
      className="px-8 py-24 lg:px-16 lg:py-32 text-left lg:text-center"
    >
      <div className="space-y-4 mb-16 lg:mb-24">
        <h4 className="text-[#2281D5] font-medium">INTRODUCING</h4>
        <h1 className="text-3xl font-medium">Welcome to Booster Indonesia</h1>
        <p className="text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="flex gap-12 lg:gap-20 lg:justify-center flex-wrap">
        <div>
          <h3 className="font-medium text-3xl lg:text-6xl font-medium mb-2">
            50+
          </h3>
          <h4>magna aliqua</h4>
        </div>
        <div>
          <h3 className="font-medium text-3xl lg:text-6xl font-medium mb-2">
            100+
          </h3>
          <h4>magna aliqua</h4>
        </div>
        <div>
          <h3 className="font-medium text-3xl lg:text-6xl font-medium mb-2">
            200+
          </h3>
          <h4>magna aliqua</h4>
        </div>
      </div>
    </section>
  );
}

export default Intro;
