"use client";

import { useEffect, useState } from "react";
import { LogoIcon, MenuIcon, CloseIcon } from "./icons";

const navLinks = [
  { href: "#top", label: "Inicio" },
  { href: "#articulos", label: "Artículos" },
  { href: "#footer", label: "Contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/90 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "shadow-[0_1px_0_0_rgba(15,30,61,0.08),0_8px_24px_-16px_rgba(15,30,61,0.25)]" : ""
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6">
        <a href="#top" className="flex items-center gap-3">
          <LogoIcon className="h-12 w-12 shrink-0 sm:h-14 sm:w-14" />
          <span className="flex flex-col leading-[1.05]">
            <span className="text-lg font-extrabold tracking-tight text-navy sm:text-xl">
              Universo de
            </span>
            <span className="text-lg font-extrabold tracking-tight text-blue sm:text-xl">
              Mascotas
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm font-semibold text-navy"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center text-navy transition-colors hover:text-blue md:hidden"
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-7 w-7" />}
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-out md:hidden ${
          open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 rounded-b-2xl bg-white px-4 pb-5 pt-1 shadow-lg sm:px-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-blue-light hover:text-blue"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
