"use client";

import { useState } from "react";

const menus = [
  {
    label: "Beranda",
    href: "#hero",
    id: "hero",
  },
  {
    label: "Tentang",
    href: "#about",
    id: "about",
  },
  {
    label: "Fitur",
    href: "#features",
    id: "features",
  },
  {
    label: "Cara Kerja",
    href: "#how-it-works",
    id: "how-it-works",
  },
  {
    label: "Harga",
    href: "#pricing",
    id: "pricing",
  },
  {
    label: "Testimoni",
    href: "#testimonial",
    id: "testimonial",
  },
];

export default function Navbar() {
  const [active, setActive] = useState("hero");

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#EAEAEA] bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-12 py-4">
        <a
          href="#hero"
          className="flex items-center gap-4"
          onClick={() => setActive("hero")}
        >
          <img
            src="/assets/logo.png"
            alt="LadangNusa"
            className="h-10 w-auto"
          />

          <h1 className="text-[18px] font-semibold text-[#468432]">
            Ladang
            <span className="font-normal">Nusa</span>
          </h1>
        </a>
        <div className="hidden items-center gap-2 md:flex">
          {menus.map((menu) => (
            <a
              key={menu.id}
              href={menu.href}
              onClick={() => setActive(menu.id)}
              className={`rounded-full px-6 py-1 text-[16px] font-medium transition-all duration-300 ${
                active === menu.id
                  ? "bg-[#B9E98B] text-[#468432]"
                  : "text-[#444] hover:bg-[#F3F7EF] hover:text-[#468432]"
              }`}
            >
              {menu.label}
            </a>
          ))}
        </div>
        <a
          href="#cta"
          className="rounded-full bg-[#468432] px-6 py-2 text-[16px] font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#356626]"
        >
          Coba Sekarang!
        </a>
      </div>
    </nav>
  );
}