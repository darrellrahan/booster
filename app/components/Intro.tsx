import React from "react";

function Intro() {
  return (
    <section id="intro" className="p-16 h-screen flex items-center">
      <div className="grid grid-cols-2 w-full">
        <div>
          <h4 className="mb-4">Introducing</h4>
          <h1 className="text-3xl font-medium">Welcome to Booster Indonesia</h1>
        </div>
        <div className="space-y-12">
          <h1 className="text-3xl font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
          <div className="flex gap-12">
            <div>
              <h3 className="font-medium text-3xl font-medium mb-1">50+</h3>
              <h4>magna aliqua</h4>
            </div>
            <div>
              <h3 className="font-medium text-3xl font-medium mb-1">100+</h3>
              <h4>magna aliqua</h4>
            </div>
            <div>
              <h3 className="font-medium text-3xl font-medium mb-1">200+</h3>
              <h4>magna aliqua</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
