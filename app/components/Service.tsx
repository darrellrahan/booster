import Image from "next/image";
import React from "react";

function Service() {
  return (
    <section id="service" className="px-16 py-32">
      <h6 className="font-medium mb-8">SERVICE</h6>
      <div className="grid grid-cols-2 gap-16 mb-32">
        <div>
          <div className="mb-12">
            <h3 className="text-4xl font-medium">
              <span className="text-[#017EF9]">Brand</span>Booster
            </h3>
            <h4 className="text-lg">(Exclusive partnership with IPINDO)</h4>
          </div>
          <Image src="/service-1.svg" alt="booster" width={550} height={380} />
        </div>
        <div>
          <h3 className="font-medium text-3xl leading-relaxed mb-8">
            Ingin mempromosikan produk dan mendapatkan pelanggan melalui website
            jnccookies.com?
            <br />
            Kami buatkan untuk anda!
          </h3>
          <h4 className="font-medium text-xl leading-relaxed">
            1. Pendaftaran dan pendampingan merek <br />
            2. Pembuatan Logo <br />
            3. Pembuatan Corporate Identity (Desain amplop, kartu nama, mug,
            dll.)
          </h4>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-16">
        <div>
          <h3 className="text-4xl font-medium mb-12">
            <span className="text-[#017EF9]">Web</span>Booster
          </h3>
          <Image src="/service-2.svg" alt="booster" width={550} height={380} />
        </div>
        <div>
          <h3 className="font-medium text-3xl leading-relaxed mb-8">
            Merek adalah aset terpenting dari bisnis. Lindungi merek anda
            sebelum diambil oleh kompetitor!
          </h3>
          <h4 className="font-medium text-xl leading-relaxed">
            1. Pendaftaran dan pendampingan merek <br />
            2. Pembuatan Logo <br />
            3. Pembuatan Corporate Identity (Desain amplop, kartu nama, mug,
            dll.)
          </h4>
        </div>
      </div>
    </section>
  );
}

export default Service;
