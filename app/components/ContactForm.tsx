"use client";

import { useState, type FormEvent } from "react";
import { ArrowRightIcon } from "./icons";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: este formulario todavía no envía el mensaje a ningún sitio.
    // Falta conectar un envío real, por ejemplo con Formspree, Resend o
    // una API route propia (app/api/contacto/route.ts) que reciba estos
    // campos y los reenvíe por email o los guarde en una base de datos.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="rounded-2xl bg-blue-light px-6 py-5 text-sm font-semibold text-navy">
        ¡Gracias por tu mensaje! Hemos recibido tu consulta y te
        responderemos lo antes posible.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label htmlFor="name" className="text-sm font-semibold text-navy">
          Nombre
        </label>
        <input
          id="name"
          type="text"
          required
          className="mt-1.5 w-full rounded-xl border border-navy/15 bg-white px-4 py-2.5 text-sm text-navy outline-none transition-colors focus:border-blue"
        />
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-semibold text-navy">
          Correo electrónico
        </label>
        <input
          id="email"
          type="email"
          required
          className="mt-1.5 w-full rounded-xl border border-navy/15 bg-white px-4 py-2.5 text-sm text-navy outline-none transition-colors focus:border-blue"
        />
      </div>
      <div>
        <label htmlFor="subject" className="text-sm font-semibold text-navy">
          Asunto
        </label>
        <input
          id="subject"
          type="text"
          required
          className="mt-1.5 w-full rounded-xl border border-navy/15 bg-white px-4 py-2.5 text-sm text-navy outline-none transition-colors focus:border-blue"
        />
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-semibold text-navy">
          Mensaje
        </label>
        <textarea
          id="message"
          required
          rows={5}
          className="mt-1.5 w-full resize-none rounded-xl border border-navy/15 bg-white px-4 py-2.5 text-sm text-navy outline-none transition-colors focus:border-blue"
        />
      </div>
      <button
        type="submit"
        className="mt-1 inline-flex w-fit items-center gap-2 rounded-full bg-blue px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-dark hover:shadow-lg hover:shadow-blue/25"
      >
        Enviar mensaje
        <ArrowRightIcon className="h-4 w-4" />
      </button>
    </form>
  );
}
