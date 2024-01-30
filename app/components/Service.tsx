"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import TextTransition, { presets } from "react-text-transition";

const TEXT_1 = ["Brand", "Web", "Lorem", "Ipsum"];
const TEXT_2 = ["(Exclusive partnership with IPINDO)", "", "", ""];
const TEXT_3 = ["Rp2.000.000", "Rp300.000", "Rp690.000", "Rp420.000"];

function Service() {
  const contentRef1 = useRef<HTMLDivElement>(null);
  const contentRef2 = useRef<HTMLDivElement>(null);
  const contentRef3 = useRef<HTMLDivElement>(null);
  const contentRef4 = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState("opacity-100");
  const [opacity2, setOpacity2] = useState("opacity-0");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const contentRect1 = contentRef1.current!.getBoundingClientRect();
      const contentRect2 = contentRef2.current!.getBoundingClientRect();
      const contentRect3 = contentRef3.current!.getBoundingClientRect();
      const contentRect4 = contentRef4.current!.getBoundingClientRect();

      if (contentRect1.top <= window.innerHeight / 2 || contentRect1.top > 0) {
        setIndex(0);
      }
      if (contentRect2.top <= window.innerHeight / 2) {
        setIndex(1);
      }
      if (contentRect3.top <= window.innerHeight / 2) {
        setIndex(2);
        setOpacity("opacity-100");
        setOpacity2("opacity-0");
      }
      if (contentRect4.top <= window.innerHeight / 2) {
        setIndex(3);
        setOpacity("opacity-0");
        setOpacity2("opacity-100");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="service" className="p-8 lg:px-16 lg:py-32 relative">
      <h6 className="mb-4 text-[#2281D5] font-medium lg:hidden">SERVICE</h6>
      <div
        className={`sticky top-[40%] transition-all duration-300 hidden lg:block`}
      >
        <div className={`absolute top-0 ${opacity} left-0`}>
          <h6 className="mb-4 text-[#2281D5] font-medium">SERVICE</h6>
          <div className="mb-4">
            <h3 className="text-6xl font-medium mb-1">
              <TextTransition springConfig={presets.wobbly}>
                <span className="text-[#2281d5]">
                  {TEXT_1[index % TEXT_1.length]}
                </span>
                Booster
              </TextTransition>
            </h3>
            {TEXT_2[index % TEXT_2.length] !== "" && (
              <h4 className="text-xl">
                <TextTransition springConfig={presets.wobbly}>
                  {TEXT_2[index % TEXT_2.length]}
                </TextTransition>
              </h4>
            )}
          </div>
          <h5 className="text-[#2281D5] text-xl">
            <TextTransition springConfig={presets.wobbly}>
              *Start from {TEXT_3[index % TEXT_3.length]}
            </TextTransition>
          </h5>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-32 lg:mb-48">
        <div className="hidden lg:block"></div>
        <div className="lg:hidden">
          <h3 className="text-4xl font-medium">
            <span className="text-[#2281d5]">Brand</span>
            Booster
          </h3>
          <h4 className="mb-2">(Exclusive partnership with IPINDO)</h4>
          <h5 className="text-[#2281D5]">*Start from Rp420.000</h5>
        </div>
        <div ref={contentRef1}>
          <h3 className="font-medium text-xl lg:text-3xl leading-relaxed mb-4 lg:mb-8">
            Ingin mempromosikan produk dan mendapatkan pelanggan melalui website
            jnccookies.com?
            <br />
            Kami buatkan untuk anda!
          </h3>
          <ul className="font-medium lg:text-xl leading-relaxed list-decimal px-4 mb-8">
            <li>Pendaftaran dan pendampingan merek</li>
            <li>Pembuatan Logo</li>
            <li>
              Pembuatan Corporate Identity (Desain amplop, kartu nama, mug,
              dll.)
            </li>
          </ul>
          <button className="rounded-[30px] bg-[#017EF9] px-6 py-4 text-white text-lg lg:text-xl mb-12">
            Contact us to see the detail
          </button>
          <Image
            src="/service-1.svg"
            alt="booster"
            width={600}
            height={380}
            priority
            className="w-full lg:h-[400px] object-cover"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-32 lg:mb-48">
        <div className="hidden lg:block"></div>
        <div className="lg:hidden">
          <h3 className="text-4xl font-medium mb-2">
            <span className="text-[#2281d5]">Web</span>
            Booster
          </h3>
          <h5 className="text-[#2281D5]">*Start from Rp420.000</h5>
        </div>
        <div ref={contentRef2}>
          <h3 className="font-medium text-xl lg:text-3xl leading-relaxed mb-4 lg:mb-8">
            Ingin mempromosikan produk dan mendapatkan pelanggan melalui website
            jnccookies.com?
            <br />
            Kami buatkan untuk anda!
          </h3>
          <ul className="font-medium lg:text-xl leading-relaxed list-decimal px-4 mb-8">
            <li>Pendaftaran dan pendampingan merek</li>
            <li>Pembuatan Logo</li>
            <li>
              Pembuatan Corporate Identity (Desain amplop, kartu nama, mug,
              dll.)
            </li>
          </ul>
          <button className="rounded-[30px] bg-[#017EF9] px-6 py-4 text-white text-lg lg:text-xl mb-12">
            Contact us to see the detail
          </button>
          <Image
            src="/service-2.svg"
            alt="booster"
            width={600}
            height={380}
            priority
            className="w-full lg:h-[400px] object-cover"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-32 lg:mb-48">
        <div className="hidden lg:block"></div>
        <div className="lg:hidden">
          <h3 className="text-4xl font-medium mb-2">
            <span className="text-[#2281d5]">Lorem</span>
            Booster
          </h3>
          <h5 className="text-[#2281D5]">*Start from Rp420.000</h5>
        </div>
        <div ref={contentRef3}>
          <h3 className="font-medium text-xl lg:text-3xl leading-relaxed mb-4 lg:mb-8">
            Ingin mempromosikan produk dan mendapatkan pelanggan melalui website
            jnccookies.com?
            <br />
            Kami buatkan untuk anda!
          </h3>
          <ul className="font-medium lg:text-xl leading-relaxed list-decimal px-4 mb-8">
            <li>Pendaftaran dan pendampingan merek</li>
            <li>Pembuatan Logo</li>
            <li>
              Pembuatan Corporate Identity (Desain amplop, kartu nama, mug,
              dll.)
            </li>
          </ul>
          <button className="rounded-[30px] bg-[#017EF9] px-6 py-4 text-white text-lg lg:text-xl mb-12">
            Contact us to see the detail
          </button>
          <Image
            src="/service-3.avif"
            alt="booster"
            width={600}
            height={380}
            priority
            className="w-full lg:h-[400px] object-cover"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div
          className={`${opacity2} self-start sticky top-[40%] hidden lg:block`}
        >
          <h6 className="mb-4 text-[#2281D5] font-medium">SERVICE</h6>
          <h3 className="text-6xl font-medium mb-4">
            <TextTransition springConfig={presets.wobbly}>
              <span className="text-[#2281d5]">Ipsum</span>
              Booster
            </TextTransition>
          </h3>
          <h5 className="text-[#2281D5] text-xl">
            <TextTransition springConfig={presets.wobbly}>
              *Start from Rp420.000
            </TextTransition>
          </h5>
        </div>
        <div className="lg:hidden">
          <h3 className="text-4xl font-medium mb-2">
            <span className="text-[#2281d5]">Ipsum</span>
            Booster
          </h3>
          <h5 className="text-[#2281D5]">*Start from Rp420.000</h5>
        </div>
        <div ref={contentRef4}>
          <h3 className="font-medium text-xl lg:text-3xl leading-relaxed mb-4 lg:mb-8">
            Merek adalah aset terpenting dari bisnis. Lindungi merek anda
            sebelum diambil oleh kompetitor!
          </h3>
          <ul className="font-medium lg:text-xl leading-relaxed list-decimal px-4 mb-8">
            <li>Pendaftaran dan pendampingan merek</li>
            <li>Pembuatan Logo</li>
            <li>
              Pembuatan Corporate Identity (Desain amplop, kartu nama, mug,
              dll.)
            </li>
          </ul>
          <button className="rounded-[30px] bg-[#017EF9] px-6 py-4 text-white text-lg lg:text-xl mb-12">
            Contact us to see the detail
          </button>
          <Image
            src="/service-4.avif"
            alt="booster"
            width={600}
            height={380}
            priority
            className="w-full lg:h-[400px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Service;
