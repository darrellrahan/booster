import Image from "next/image";
import React from "react";

function WhyNeedUs() {
  return (
    <section id="why-need-us">
      <h1 className="text-3xl font-medium p-16">Why You Need Us?</h1>
      <div className="h-[500px] bg-[#FFF7F7] flex items-center p-16 sticky top-24">
        <div className="flex justify-between items-center w-full">
          <p className="text-2xl w-[715px] leading-relaxed font-medium">
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
          />
        </div>
      </div>
      <div className="h-[500px] bg-[#BEF6FF] flex items-center p-16 sticky top-24">
        <div className="flex justify-between items-center w-full">
          <p className="text-2xl w-[715px] leading-relaxed font-medium">
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
      <div className="h-[500px] bg-[#FFFBDA] flex items-center p-16 sticky top-24">
        <div className="flex justify-between items-center w-full">
          <p className="text-2xl w-[715px] leading-relaxed font-medium">
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
          />
        </div>
      </div>
      <div className="h-[500px] bg-[#E9F3FF] flex items-center p-16 sticky top-24">
        <div className="flex justify-between items-center w-full">
          <p className="text-2xl w-[715px] leading-relaxed font-medium">
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
          />
        </div>
      </div>
    </section>
  );
}

export default WhyNeedUs;
