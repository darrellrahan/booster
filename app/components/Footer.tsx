import { Envelope, InstagramLogo } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <section
      id="footer"
      className="px-8 lg:px-16 pt-16 pb-8 text-center lg:text-left relative"
    >
      <div className="mb-16 lg:mb-48 lg:flex gap-48">
        <div className="flex flex-col gap-4 lg:gap-2 items-center lg:items-start mb-16 lg:mb-0">
          <Image src="/logo.svg" alt="logo" width={175} height={50} priority />
          <h3 className="text-xl lg:text-2xl font-semibold lg:mt-4">
            PT Booster Indonesia
          </h3>
          <p className="font-light lg:text-lg">
            Your all-in-one Business Boosting Solution
          </p>
        </div>
        <div className="lg:flex gap-32">
          <div className="flex flex-col gap-4 items-center lg:items-start mb-16 lg:mb-0">
            <h3 className="font-semibold text-2xl lg:text-2xl lg:font-bold">
              Products
            </h3>
            <Link href="/" className="hover:underline lg:text-lg">
              Features
            </Link>
            <Link href="/" className="hover:underline lg:text-lg">
              Solution
            </Link>
            <Link href="/" className="hover:underline lg:text-lg">
              Products
            </Link>
            <Link href="/" className="hover:underline lg:text-lg">
              Integrations
            </Link>
          </div>
          <div className="flex flex-col gap-4 items-center lg:items-start">
            <h3 className="font-semibold text-2xl lg:text-2xl lg:font-bold">
              Company
            </h3>
            <Link href="/" className="hover:underline lg:text-lg">
              Career
            </Link>
            <Link href="/" className="hover:underline lg:text-lg">
              Contact
            </Link>
          </div>
        </div>
      </div>
      <div className="flex gap-4 justify-center mb-16 lg:mb-0 lg:absolute bottom-40 left-16">
        <Link href="/" className="hover:underline lg:text-lg">
          <Envelope size={32} />
        </Link>
        <Link href="/" className="hover:underline lg:text-lg">
          <InstagramLogo size={32} />
        </Link>
      </div>
      <p className="opacity-50 text-center">
        © {new Date().getFullYear()} BOOSTER. All rights reserved.
      </p>
    </section>
  );
}

export default Footer;
