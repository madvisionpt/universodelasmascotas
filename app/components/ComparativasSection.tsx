import Image from "next/image";
import { comparativas } from "../lib/comparativas";
import { ArrowRightIcon } from "./icons";

export default function ComparativasSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
            Comparativas
          </h2>
          <a
            href="/comparativas"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-blue"
          >
            Ver todas las comparativas
            <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:mt-10 sm:gap-6 lg:grid-cols-3">
          {comparativas.map((c) => (
            <a
              key={c.slug}
              href="/comparativas"
              className="group flex flex-col overflow-hidden rounded-2xl bg-bg-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(15,30,61,0.3)]"
            >
              <div className="relative h-28 w-full overflow-hidden sm:h-36">
                <Image
                  src={c.image}
                  alt={c.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-3.5 sm:p-4">
                <h3 className="text-sm font-bold text-navy sm:text-base">
                  {c.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
