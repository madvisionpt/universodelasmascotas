"use client";

import { useState, type FormEvent } from "react";
import { ArrowRightIcon } from "./icons";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 pb-14 sm:px-6 sm:pb-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy to-blue-dark px-6 py-12 text-center sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-white/10 blur-2xl" />

          <h2 className="relative text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
            Únete a otros amantes de las mascotas
          </h2>
          <p className="relative mx-auto mt-3 max-w-md text-sm leading-relaxed text-white/80 sm:text-base">
            Suscríbete y recibe guías prácticas sobre salud, alimentación y
            bienestar directamente en tu correo.
          </p>

          {submitted ? (
            <p className="relative mx-auto mt-6 max-w-sm rounded-full bg-white/15 px-5 py-3 text-sm font-semibold text-white">
              ¡Gracias! Revisa tu correo.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="relative mx-auto mt-7 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Correo electrónico
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                className="w-full rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder-white/60 outline-none transition-colors focus:border-white/60 sm:flex-1"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Suscribirme
                <ArrowRightIcon className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
