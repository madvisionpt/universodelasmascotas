import Image from "next/image";
import { ArrowRightIcon } from "./icons";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 pb-12 pt-6 sm:px-6 sm:pb-16 sm:pt-8">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-8">
          <div>
            <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-navy sm:text-5xl lg:text-6xl">
              Todo para
              <br />
              cuidar a tu
              <br />
              mascota
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-gray-text sm:text-lg">
              Consejos y guías prácticas para mejorar la salud, el bienestar y
              la felicidad de tu compañero.
            </p>
            <a
              href="#articulos"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90 sm:text-base"
            >
              Ver más artículos
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>

          <div className="relative h-72 w-full overflow-hidden rounded-2xl sm:h-96 md:h-[420px] md:rounded-3xl">
            <Image
              src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1200&q=80&fit=crop&auto=format"
              alt="Perro y gato juntos"
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
