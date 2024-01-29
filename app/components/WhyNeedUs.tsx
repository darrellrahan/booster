import Image from "next/image";
import React from "react";

function WhyNeedUs() {
  return (
    <section id="why-need-us">
      <h1 className="text-3xl font-medium p-8 lg:p-16">Why You Need Us?</h1>
      <div className="lg:h-[500px] bg-[#FFF7F7] lg:flex items-center px-8 py-16 lg:p-16 sticky top-24 relative">
        <div className="flex justify-between items-center w-full flex-col lg:flex-row gap-16 lg:gap-0">
          <p className="text-xl lg:text-2xl lg:w-[715px] leading-relaxed font-medium order-last lg:order-first">
            <span className="text-lg block mb-2 absolute top-8 left-8 lg:static">
              1/4
            </span>
            Ibarat bayi burung elang yang baru menetas dan mulai mengenal dunia
            sekitarnya, Merek J&C Cookies ini juga baru akan memulai perjalanan
            besarnya...
          </p>
          <Image
            src="/wnu-1.svg"
            alt="why need us"
            width={270}
            height={420}
            priority
            className="w-[180px] h-[290px] lg:w-[270px] lg:h-[420px]"
          />
        </div>
      </div>
      <div className="lg:h-[500px] bg-[#BEF6FF] lg:flex items-center px-8 py-16 lg:p-16 sticky top-24 relative">
        <div className="flex justify-between items-center w-full flex-col lg:flex-row gap-8 lg:gap-0">
          <p className="text-xl lg:text-2xl lg:w-[715px] leading-relaxed font-medium order-last lg:order-first">
            <span className="text-lg block mb-2 absolute top-8 left-8 lg:static">
              2/4
            </span>
            Seperti burung elang yang memiliki potensi pertumbuhan dan
            perkembangan yang besar, J&C Cookies ini juga berpotensi menjadi
            berkembang pesat dan dikenal di seluruh dunia.
          </p>
          <Image
            src="/wnu-2.svg"
            alt="why need us"
            width={715}
            height={300}
            priority
          />
        </div>
      </div>
      <div className="lg:h-[500px] bg-[#FFFBDA] lg:flex items-center px-8 py-16 lg:p-16 sticky top-24 relative">
        <div className="flex justify-between items-center w-full flex-col lg:flex-row gap-12 lg:gap-0">
          <p className="text-xl lg:text-2xl lg:w-[715px] leading-relaxed font-medium order-last lg:order-first">
            <span className="text-lg block mb-2 absolute top-8 left-8 lg:static">
              3/4
            </span>
            Namun kenyataannya, J&C Cookies dihadapkan pada beragam tantangan
            yang memicu kebingungan dalam strategi branding, kompetisi yang
            ketat, hingga kesulitan memikat klien
          </p>
          <Image
            src="/wnu-3.svg"
            alt="why need us"
            width={500}
            height={250}
            priority
            className="translate-x-8 translate-y-2"
          />
        </div>
      </div>
      <div className="lg:h-[500px] bg-[#E9F3FF] lg:flex items-center px-8 py-16 lg:p-16 sticky top-24 relative">
        <div className="flex justify-between items-center w-full flex-col lg:flex-row gap-16 lg:gap-0">
          <p className="text-xl lg:text-2xl lg:w-[715px] leading-relaxed font-medium order-last lg:order-first">
            <span className="text-lg block mb-2 absolute top-8 left-8 lg:static">
              4/4
            </span>
            Untuk itulah Booster Indonesia hadir bersama Anda untuk mempercepat
            perkembangan merek Anda. Melalui layanan lengkap, kami menawarkan
            biaya yang fleksibel dengan hasil yang memuaskan.
          </p>
          <Image
            src="/wnu-4.svg"
            alt="why need us"
            width={400}
            height={180}
            priority
            className="translate-x-4 translate-y-2"
          />
        </div>
      </div>
    </section>
  );
}

export default WhyNeedUs;
