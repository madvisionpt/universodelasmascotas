import { PawIcon, HeartPulseIcon, BowlIcon, MedalIcon } from "./icons";
import type { ComponentType } from "react";

const features: {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
}[] = [
  {
    icon: PawIcon,
    title: "Consejos expertos",
    description: "Guías prácticas para el día a día",
  },
  {
    icon: HeartPulseIcon,
    title: "Salud y bienestar",
    description: "Cuida su salud y previén problemas",
  },
  {
    icon: BowlIcon,
    title: "Alimentación",
    description: "La mejor nutrición para cada etapa",
  },
  {
    icon: MedalIcon,
    title: "Recomendaciones",
    description: "Los mejores productos y comparativas",
  },
];

export default function Features() {
  return (
    <section className="bg-bg-soft">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid grid-cols-2 gap-8 sm:gap-10 md:grid-cols-4">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group flex flex-col items-center rounded-2xl p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_16px_32px_-20px_rgba(15,30,61,0.25)]"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-light transition-colors duration-300 group-hover:bg-blue">
                <Icon className="h-7 w-7 text-navy transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="mt-4 text-sm font-bold text-navy sm:text-base">
                {title}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-gray-text sm:text-sm">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
