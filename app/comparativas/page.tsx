import type { Metadata } from "next";
import Image from "next/image";
import { siteUrl } from "../lib/site";
import { comparativas } from "../lib/comparativas";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Comparativas",
  description:
    "Comparativas y guías de compra para elegir los mejores productos para tu mascota.",
  alternates: {
    canonical: `${siteUrl}/comparativas`,
  },
};

export default function ComparativasPage() {
  return (
    <div className="flex-1 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Comparativas" }]} />

        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
          Comparativas
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-gray-text">
          Guías de compra pensadas para ayudarte a elegir bien, sin perder
          horas comparando opciones.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {comparativas.map((c) => (
            <div
              key={c.slug}
              className="flex flex-col overflow-hidden rounded-2xl bg-bg-soft"
            >
              <div className="relative h-40 w-full sm:h-44">
                <Image
                  src={c.image}
                  alt={c.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h2 className="text-base font-bold text-navy sm:text-lg">
                  {c.title}
                </h2>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-text">
                  {c.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
