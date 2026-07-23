import { HeartPulseIcon, BowlIcon, GraduationCapIcon, CartIcon } from "./icons";
import type { ComponentType } from "react";

const intents: {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  href: string;
}[] = [
  {
    icon: HeartPulseIcon,
    title: "Mi mascota está enferma",
    description: "Encuentra síntomas, causas y qué hacer.",
    href: "/blog",
  },
  {
    icon: BowlIcon,
    title: "¿Qué puede comer?",
    description: "Descubre qué alimentos son seguros.",
    href: "/blog",
  },
  {
    icon: GraduationCapIcon,
    title: "Quiero educarla",
    description: "Aprende a corregir comportamientos.",
    href: "/blog",
  },
  {
    icon: CartIcon,
    title: "Busco el mejor producto",
    description: "Comparativas y recomendaciones.",
    href: "/comparativas",
  },
];

export default function IntentCards() {
  return (
    <section className="bg-bg-soft">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
          ¿Qué necesitas hoy?
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
          {intents.map(({ icon: Icon, title, description, href }) => (
            <a
              key={title}
              href={href}
              className="group flex flex-col rounded-2xl bg-white p-6 shadow-[0_1px_0_0_rgba(15,30,61,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(15,30,61,0.3)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-light transition-colors duration-300 group-hover:bg-blue">
                <Icon className="h-6 w-6 text-navy transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="mt-4 text-base font-bold text-navy">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-gray-text">
                {description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
