import { CheckCircleIcon, ClockIcon, TagIcon, ShieldCheckIcon } from "./icons";
import type { ComponentType } from "react";

const items: {
  icon: ComponentType<{ className?: string }>;
  label: string;
}[] = [
  { icon: CheckCircleIcon, label: "Sin registro" },
  { icon: ClockIcon, label: "Contenido actualizado" },
  { icon: TagIcon, label: "100% gratuito" },
  { icon: ShieldCheckIcon, label: "Guías verificadas" },
];

export default function TrustBand() {
  return (
    <section className="border-y border-navy/5 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        <div className="grid grid-cols-2 gap-y-4 sm:flex sm:flex-wrap sm:items-center sm:justify-between">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2.5">
              <Icon className="h-5 w-5 shrink-0 text-blue" />
              <span className="text-sm font-semibold text-navy">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
