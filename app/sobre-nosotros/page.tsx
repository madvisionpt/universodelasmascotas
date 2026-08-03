import type { Metadata } from "next";
import { siteUrl } from "../lib/site";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Sobre nosotros",
  description:
    "Conoce quiénes estamos detrás de Universo de las Mascotas y nuestro compromiso con ofrecerte contenido fiable sobre el cuidado de tu mascota.",
  alternates: {
    canonical: `${siteUrl}/sobre-nosotros`,
  },
};

export default function SobreNosotrosPage() {
  return (
    <div className="flex-1 bg-white">
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-14">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Sobre nosotros" }]} />

        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
          Sobre nosotros
        </h1>

        <div className="prose mt-8">
          <p>
            Universo de las Mascotas es un proyecto creado por{" "}
            <strong>[NOMBRE DEL RESPONSABLE / MARCA]</strong> desde{" "}
            <strong>[AÑO DE FUNDACIÓN]</strong>, con el objetivo de acompañar a
            quienes comparten su vida con un perro, un gato o cualquier otra
            mascota.
          </p>

          <h2>Nuestra misión</h2>
          <p>
            Creemos que cuidar bien de una mascota empieza por tener
            información clara y de confianza. Por eso trabajamos para
            ofrecerte guías prácticas, comprensibles y basadas en el sentido
            común, que te ayuden en el día a día: desde la alimentación y la
            higiene hasta el comportamiento, la salud y el bienestar de tu
            compañero.
          </p>

          <h2>Nuestro compromiso</h2>
          <p>
            Nos esforzamos por revisar y mantener actualizado el contenido
            que publicamos, y por explicarlo de una forma honesta, sin
            fórmulas milagrosas ni datos inventados. Cuando no tenemos la
            certeza sobre un dato concreto, preferimos explicarlo de forma
            general antes que arriesgarnos a darte una información
            incorrecta.
          </p>

          <h2>Un aviso importante</h2>
          <p>
            Todo el contenido de este sitio tiene <strong>carácter
            informativo</strong> y está pensado para ayudarte a entender
            mejor a tu mascota. En ningún caso sustituye el diagnóstico, el
            consejo o el tratamiento de un veterinario. Ante cualquier duda
            sobre la salud de tu mascota, consulta siempre con un
            profesional veterinario.
          </p>

          <h2>¿Quieres saber más?</h2>
          <p>
            Si tienes cualquier pregunta, sugerencia o propuesta de
            colaboración, puedes{" "}
            <a href="/contacto">ponerte en contacto con nosotros</a>. Nos
            encanta saber de otros amantes de las mascotas.
          </p>
        </div>
      </div>
    </div>
  );
}
