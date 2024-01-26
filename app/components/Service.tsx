import Image from "next/image";
import React from "react";

function Service() {
  return (
    <section id="service" className="p-8 lg:px-16 lg:py-32">
      <h6 className="mb-4 text-[#2281D5] font-medium">SERVICE</h6>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16 lg:mb-32">
        <div>
          <div className="mb-8 lg:mb-12">
            <h3 className="text-4xl font-medium">
              <span className="text-[#017EF9]">Brand</span>Booster
            </h3>
            <h4 className="text-lg">(Exclusive partnership with IPINDO)</h4>
          </div>
          <Image src="/service-1.svg" alt="booster" width={550} height={380} />
        </div>
        <div>
          <h3 className="font-medium text-xl lg:text-3xl leading-relaxed mb-4 lg:mb-8">
            Ingin mempromosikan produk dan mendapatkan pelanggan melalui website
            jnccookies.com?
            <br />
            Kami buatkan untuk anda!
          </h3>
          <ul className="font-medium lg:text-xl leading-relaxed list-decimal px-4">
            <li>Pendaftaran dan pendampingan merek</li>
            <li>Pembuatan Logo</li>
            <li>
              Pembuatan Corporate Identity (Desain amplop, kartu nama, mug,
              dll.)
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div>
          <h3 className="text-4xl font-medium mb-8 lg:mb-12">
            <span className="text-[#017EF9]">Web</span>Booster
          </h3>
          <Image src="/service-2.svg" alt="booster" width={550} height={380} />
        </div>
        <div>
          <h3 className="font-medium text-xl lg:text-3xl leading-relaxed mb-4 lg:mb-8">
            Merek adalah aset terpenting dari bisnis. Lindungi merek anda
            sebelum diambil oleh kompetitor!
          </h3>
          <ul className="font-medium lg:text-xl leading-relaxed list-decimal px-4">
            <li>Pendaftaran dan pendampingan merek</li>
            <li>Pembuatan Logo</li>
            <li>
              Pembuatan Corporate Identity (Desain amplop, kartu nama, mug,
              dll.)
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Service;
