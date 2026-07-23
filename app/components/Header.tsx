"use client";

import { useEffect, useState } from "react";
import { LogoIcon, MenuIcon, CloseIcon } from "./icons";

export type NavTema = { slug: string; label: string };
export type NavLink = { href: string; label: string; temas?: NavTema[] };

export default function Header({ navLinks }: { navLinks: NavLink[] }) {
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
        <a href="/" className="flex items-center gap-3">
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

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <div key={link.href} className="group relative">
              <a href={link.href} className="relative text-sm font-semibold text-navy">
                {link.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue transition-all duration-300 group-hover:w-full" />
              </a>

              {link.temas && link.temas.length > 0 && (
                <div className="invisible absolute left-1/2 top-full z-10 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  <div className="flex min-w-[180px] flex-col gap-0.5 rounded-2xl border border-navy/10 bg-white p-2 shadow-[0_20px_40px_-16px_rgba(15,30,61,0.3)]">
                    {link.temas.map((t) => (
                      <a
                        key={t.slug}
                        href={`${link.href}?tema=${t.slug}`}
                        className="whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium text-navy transition-colors hover:bg-blue-light hover:text-blue"
                      >
                        {t.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center text-navy transition-colors hover:text-blue lg:hidden"
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-7 w-7" />}
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-out lg:hidden ${
          open ? "max-h-[36rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 rounded-b-2xl bg-white px-4 pb-5 pt-1 shadow-lg sm:px-6">
          {navLinks.map((link) => (
            <div key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-blue-light hover:text-blue"
              >
                {link.label}
              </a>
              {link.temas && link.temas.length > 0 && (
                <div className="ml-3 flex flex-col gap-0.5 border-l border-navy/10 pl-3">
                  {link.temas.map((t) => (
                    <a
                      key={t.slug}
                      href={`${link.href}?tema=${t.slug}`}
                      onClick={() => setOpen(false)}
                      className="rounded-lg px-3 py-2 text-sm text-gray-text transition-colors hover:bg-blue-light hover:text-blue"
                    >
                      {t.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}
