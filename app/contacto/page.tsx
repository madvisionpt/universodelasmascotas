import type { Metadata } from "next";
import { siteUrl } from "../lib/site";
import Breadcrumbs from "../components/Breadcrumbs";
import ContactForm from "../components/ContactForm";
import { InstagramIcon, FacebookIcon, TiktokIcon } from "../components/icons";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Ponte en contacto con el equipo de Universo de las Mascotas.",
  alternates: {
    canonical: `${siteUrl}/contacto`,
  },
};

const socialLinks = [
  { href: "#", label: "Instagram", icon: InstagramIcon },
  { href: "#", label: "Facebook", icon: FacebookIcon },
  { href: "#", label: "TikTok", icon: TiktokIcon },
];

export default function ContactoPage() {
  return (
    <div className="flex-1 bg-white">
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-14">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Contacto" }]} />

        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
          Contacto
        </h1>
        <p className="mt-3 text-base leading-relaxed text-gray-text">
          ¿Tienes alguna pregunta, sugerencia o propuesta de colaboración?
          Escríbenos y te responderemos lo antes posible.
        </p>

        <div className="mt-8">
          <ContactForm />
        </div>

        <div className="mt-10 border-t border-navy/10 pt-8">
          <h2 className="text-sm font-bold uppercase tracking-wide text-gray-text">
            Síguenos
          </h2>
          <div className="mt-4 flex gap-3">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-light text-navy transition-colors duration-300 hover:bg-blue hover:text-white"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
