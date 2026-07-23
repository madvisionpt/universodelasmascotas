"use client";

import { useEffect, useState } from "react";
import { LogoIcon, MenuIcon, CloseIcon, ChevronDownIcon } from "./icons";
import { mainNavLinks } from "../lib/nav";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function closeDrawer() {
    setOpen(false);
    setOpenAccordion(null);
  }

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

        <nav className="hidden items-center gap-6 lg:flex">
          {mainNavLinks.map((link) =>
            link.highlight ? (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full bg-blue px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-blue-dark"
              >
                {link.label}
              </a>
            ) : (
              <div key={link.href} className="group relative">
                <a href={link.href} className="relative text-sm font-semibold text-navy">
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue transition-all duration-300 group-hover:w-full" />
                </a>

                {link.subtemas && link.subtemas.length > 0 && (
                  <div className="invisible absolute left-1/2 top-full z-10 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    <div className="flex min-w-[200px] flex-col gap-0.5 rounded-2xl border border-navy/10 bg-white p-2 shadow-[0_20px_40px_-16px_rgba(15,30,61,0.3)]">
                      {link.subtemas.map((t) => (
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
            )
          )}
        </nav>

        <button
          type="button"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="flex h-10 w-10 items-center justify-center text-navy transition-colors hover:text-blue lg:hidden"
        >
          <MenuIcon className="h-7 w-7" />
        </button>
      </div>

      <div
        className={`fixed inset-0 z-50 bg-navy/40 transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeDrawer}
        aria-hidden={!open}
      />

      <aside
        className={`fixed inset-y-0 right-0 z-50 flex h-full w-[85vw] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between border-b border-navy/10 px-5 py-5">
          <span className="text-sm font-extrabold uppercase tracking-wide text-navy">Menú</span>
          <button
            type="button"
            aria-label="Cerrar menú"
            onClick={closeDrawer}
            className="flex h-9 w-9 items-center justify-center text-navy transition-colors hover:text-blue"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4">
          {mainNavLinks.map((link) =>
            link.highlight ? (
              <a
                key={link.href}
                href={link.href}
                onClick={closeDrawer}
                className="mx-2 mt-2 rounded-full bg-blue px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-blue-dark"
              >
                {link.label}
              </a>
            ) : (
              <div key={link.href}>
                <button
                  type="button"
                  onClick={() =>
                    setOpenAccordion((prev) => (prev === link.href ? null : link.href))
                  }
                  aria-expanded={openAccordion === link.href}
                  className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-sm font-semibold text-navy transition-colors hover:bg-blue-light hover:text-blue"
                >
                  {link.label}
                  <ChevronDownIcon
                    className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
                      openAccordion === link.href ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-out ${
                    openAccordion === link.href ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="ml-3 flex flex-col gap-0.5 border-l border-navy/10 py-1 pl-3">
                    <a
                      href={link.href}
                      onClick={closeDrawer}
                      className="rounded-lg px-3 py-2 text-sm font-semibold text-blue"
                    >
                      Ver todo en {link.label}
                    </a>
                    {link.subtemas?.map((t) => (
                      <a
                        key={t.slug}
                        href={`${link.href}?tema=${t.slug}`}
                        onClick={closeDrawer}
                        className="rounded-lg px-3 py-2 text-sm text-gray-text transition-colors hover:bg-blue-light hover:text-blue"
                      >
                        {t.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )
          )}
        </nav>
      </aside>
    </header>
  );
}
