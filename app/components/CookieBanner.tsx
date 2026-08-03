"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) setVisible(true);
  }, []);

  function respond(choice: "accepted" | "rejected") {
    // NOTA: esto solo guarda la elección del usuario en este navegador. Para
    // un consentimiento realmente conforme con los requisitos de Google
    // AdSense en el Espacio Económico Europeo, hará falta integrar más
    // adelante una CMP (Consent Management Platform) certificada por Google
    // que además informe a Google/otros proveedores de la decisión tomada.
    window.localStorage.setItem(STORAGE_KEY, choice);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-navy/10 bg-white/95 px-4 py-4 shadow-[0_-8px_24px_-16px_rgba(15,30,61,0.3)] backdrop-blur-sm sm:px-6"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <p className="text-sm text-gray-text">
          Usamos cookies propias y de terceros (análisis y publicidad) para
          mejorar tu experiencia. Puedes aceptarlas o rechazarlas.{" "}
          <a href="/politica-de-cookies" className="font-semibold text-blue hover:underline">
            Más información
          </a>
          .
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => respond("rejected")}
            className="rounded-full border border-navy/15 px-4 py-2 text-sm font-semibold text-navy transition-colors hover:border-blue hover:text-blue"
          >
            Rechazar
          </button>
          <button
            type="button"
            onClick={() => respond("accepted")}
            className="rounded-full bg-blue px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-dark"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
