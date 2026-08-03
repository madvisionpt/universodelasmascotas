// AVISO: modelo generado automáticamente. Revisar con un profesional legal
// y/o usar un generador oficial antes de la aprobación final.

import type { Metadata } from "next";
import { siteUrl, siteTitle } from "../lib/site";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Política de cookies",
  description:
    "Descubre qué cookies utiliza Universo de las Mascotas, para qué sirven y cómo puedes gestionarlas o desactivarlas desde tu navegador.",
  alternates: {
    canonical: `${siteUrl}/politica-de-cookies`,
  },
};

export default function PoliticaDeCookiesPage() {
  return (
    <div className="flex-1 bg-white">
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-14">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Política de cookies" }]} />

        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
          Política de cookies
        </h1>
        <p className="mt-3 text-sm text-gray-text">
          Última actualización: [FECHA DE ÚLTIMA ACTUALIZACIÓN]
        </p>

        <div className="prose mt-8">
          <p>
            Esta página explica qué son las cookies, qué tipos de cookies
            utiliza {siteTitle} y cómo puedes gestionarlas o desactivarlas si
            lo prefieres.
          </p>

          <h2>¿Qué es una cookie?</h2>
          <p>
            Una cookie es un pequeño archivo de texto que un sitio web
            guarda en tu navegador cuando lo visitas. Las cookies permiten,
            entre otras cosas, recordar tus preferencias, entender cómo
            navegas por el sitio o mostrar publicidad más relevante para ti.
          </p>

          <h2>Tipos de cookies que utilizamos</h2>

          <h3>Cookies técnicas o necesarias</h3>
          <p>
            Son imprescindibles para que el sitio funcione correctamente,
            por ejemplo para recordar tu decisión sobre el uso de cookies.
            No requieren tu consentimiento porque son estrictamente
            necesarias para prestar el servicio que solicitas.
          </p>

          <h3>Cookies de análisis: Google Analytics</h3>
          <p>
            Utilizamos Google Analytics para entender cómo se usa el sitio
            web: qué páginas se visitan más, cuánto tiempo se pasa en ellas
            o desde qué dispositivos se accede. Esta información nos ayuda a
            mejorar el contenido y la experiencia del sitio.
          </p>

          <h3>Cookies de publicidad: Google AdSense</h3>
          <p>
            Este sitio puede mostrar anuncios a través de Google AdSense,
            que utiliza cookies propias y de terceros para mostrar
            publicidad, en algunos casos personalizada según tu navegación
            en este y otros sitios web. Google actúa como proveedor externo
            de publicidad y utiliza estas cookies conforme a sus propias
            políticas de privacidad.
          </p>

          <h2>Cookies de terceros</h2>
          <p>
            Algunas de las cookies mencionadas anteriormente son instaladas
            por proveedores externos como Google, no directamente por
            nosotros. No tenemos control total sobre estas cookies de
            terceros; te recomendamos consultar las políticas de privacidad
            de dichos proveedores para más información.
          </p>

          <h2>¿Cómo puedo gestionar o desactivar las cookies?</h2>
          <p>
            Puedes aceptar o rechazar las cookies no esenciales de este
            sitio a través del banner que aparece en tu primera visita.
            Además, la mayoría de los navegadores te permiten configurar,
            bloquear o eliminar las cookies almacenadas desde su
            configuración o ajustes de privacidad. Ten en cuenta que
            desactivar ciertas cookies puede afectar al funcionamiento de
            algunas partes del sitio.
          </p>

          <h2>Más información</h2>
          <p>
            Para más detalles sobre cómo tratamos tus datos personales,
            consulta nuestra{" "}
            <a href="/politica-de-privacidad">política de privacidad</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
