"use client";

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

function Project() {
  const carousel = useRef<HTMLDivElement>(null);
  const slide = useRef<HTMLDivElement>(null);
  const [prevBlur, setPrevBlur] = useState("opacity-0");
  const [nextBlur, setNextBlur] = useState("opacity-100");

  useEffect(() => {
    function handleScroll() {
      if (carousel.current) {
        const { scrollLeft, clientWidth, scrollWidth } = carousel.current;
        setPrevBlur(scrollLeft > 0 ? "opacity-100" : "opacity-0");
        const isEndOfCarousel =
          Math.round(scrollLeft + clientWidth) === scrollWidth;
        setNextBlur(isEndOfCarousel ? "opacity-0" : "opacity-100");
      }
    }
    carousel.current!.addEventListener("scroll", handleScroll);
    return () => {
      carousel.current!.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="project" className="px-8 py-24 lg:px-16">
      <h4 className="text-[#2281D5] font-medium mb-4">OUR PROJECTS</h4>
      <div className="flex items-end justify-between mb-16">
        <h1 className="text-3xl font-medium">Lorem Ipsum Dorol Sit Amet.</h1>
        <div className="flex gap-3">
          <button
            onClick={() => {
              carousel.current!.scrollLeft -= slide.current!.clientWidth + 32;
            }}
          >
            <ArrowLeft size={32} />
          </button>
          <button
            onClick={() => {
              carousel.current!.scrollLeft += slide.current!.clientWidth + 32;
            }}
          >
            <ArrowRight size={32} />
          </button>
        </div>
      </div>
      <div className="relative">
        <div
          className={`${prevBlur} hidden lg:block absolute top-0 left-0 w-[40px] h-full bg-[linear-gradient(to_left,rgba(255,255,255,0)0,#fff_100%)] duration-300 ease-linear`}
        ></div>
        <div
          className={`${nextBlur} hidden lg:block absolute top-0 right-0 w-[40px] h-full bg-[linear-gradient(to_right,rgba(255,255,255,0)0,#fff_100%)] duration-300 ease-linear`}
        ></div>
        <div
          ref={carousel}
          className="carousel flex gap-8 lg:gap-12 overflow-x-scroll scroll-smooth"
        >
          <div ref={slide} className="flex-none w-full lg:w-[500px]">
            <Image
              src="/project-1.svg"
              alt="project"
              width={500}
              height={280}
              priority
              className="w-full rounded-[10px]"
            />
            <div className="mt-7 mb-3 flex gap-2 items-center">
              <Image
                src="/marquee-hero-star.svg"
                alt="star"
                width={25}
                height={25}
                priority
              />
              <h4 className="font-semibold text-lg z-10 relative">Branding</h4>
            </div>
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-2xl z-10 relative">
                Innovative Sleep Technologies
              </h3>
              <button className="z-10 relative">
                <ArrowUpRight size={32} />
              </button>
            </div>
          </div>
          <div className="flex-none w-full lg:w-[500px]">
            <Image
              src="/project-1.svg"
              alt="project"
              width={500}
              height={280}
              priority
              className="w-full rounded-[10px]"
            />
            <div className="mt-7 mb-3 flex gap-2 items-center">
              <Image
                src="/marquee-hero-star.svg"
                alt="star"
                width={25}
                height={25}
                priority
              />
              <h4 className="font-semibold text-lg">Branding</h4>
            </div>
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-2xl">
                Innovative Sleep Technologies
              </h3>
              <button>
                <ArrowUpRight size={32} />
              </button>
            </div>
          </div>
          <div className="flex-none w-full lg:w-[500px]">
            <Image
              src="/project-1.svg"
              alt="project"
              width={500}
              height={280}
              priority
              className="w-full rounded-[10px]"
            />
            <div className="mt-7 mb-3 flex gap-2 items-center">
              <Image
                src="/marquee-hero-star.svg"
                alt="star"
                width={25}
                height={25}
                priority
              />
              <h4 className="font-semibold text-lg">Branding</h4>
            </div>
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-2xl">
                Innovative Sleep Technologies
              </h3>
              <button>
                <ArrowUpRight size={32} />
              </button>
            </div>
          </div>
          <div className="flex-none w-full lg:w-[500px]">
            <Image
              src="/project-1.svg"
              alt="project"
              width={500}
              height={280}
              priority
              className="w-full rounded-[10px]"
            />
            <div className="mt-7 mb-3 flex gap-2 items-center">
              <Image
                src="/marquee-hero-star.svg"
                alt="star"
                width={25}
                height={25}
                priority
              />
              <h4 className="font-semibold text-lg">Branding</h4>
            </div>
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-2xl">
                Innovative Sleep Technologies
              </h3>
              <button>
                <ArrowUpRight size={32} />
              </button>
            </div>
          </div>
          <div className="flex-none w-full lg:w-[500px]">
            <Image
              src="/project-1.svg"
              alt="project"
              width={500}
              height={280}
              priority
              className="w-full rounded-[10px]"
            />
            <div className="mt-7 mb-3 flex gap-2 items-center">
              <Image
                src="/marquee-hero-star.svg"
                alt="star"
                width={25}
                height={25}
                priority
              />
              <h4 className="font-semibold text-lg">Branding</h4>
            </div>
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-2xl">
                Innovative Sleep Technologies
              </h3>
              <button>
                <ArrowUpRight size={32} />
              </button>
            </div>
          </div>
          <div className="flex-none w-full lg:w-[500px]">
            <Image
              src="/project-1.svg"
              alt="project"
              width={500}
              height={280}
              priority
              className="w-full rounded-[10px]"
            />
            <div className="mt-7 mb-3 flex gap-2 items-center">
              <Image
                src="/marquee-hero-star.svg"
                alt="star"
                width={25}
                height={25}
                priority
              />
              <h4 className="font-semibold text-lg z-10 relative">Branding</h4>
            </div>
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-2xl z-10 relative">
                Innovative Sleep Technologies
              </h3>
              <button className="z-10 relative">
                <ArrowUpRight size={32} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
