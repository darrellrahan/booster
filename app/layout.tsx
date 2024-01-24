import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import { TogglerProvider } from "./context/toggler";
import "./globals.css";

const archivo = Archivo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Booster Indonesia | Masuki Era Bisnis Digital Bersama Kami",
  description: "Booster Indonesia | Masuki Era Bisnis Digital Bersama Kami",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <TogglerProvider>
      <html lang="en">
        <body
          className={`${archivo.className} overflow-x-hidden text-[#354150]`}
        >
          {children}
        </body>
      </html>
    </TogglerProvider>
  );
}
