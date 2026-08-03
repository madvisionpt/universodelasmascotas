// AVISO: modelo generado automáticamente. Revisar con un profesional legal
// y/o usar un generador oficial antes de la aprobación final.

import type { Metadata } from "next";
import { siteUrl, siteTitle } from "../lib/site";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Aviso legal",
  description:
    "Condiciones de uso de Universo de las Mascotas: titularidad del sitio, propiedad intelectual y limitación de responsabilidad del contenido.",
  alternates: {
    canonical: `${siteUrl}/aviso-legal`,
  },
};

export default function AvisoLegalPage() {
  return (
    <div className="flex-1 bg-white">
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-14">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Aviso legal" }]} />

        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
          Aviso legal
        </h1>
        <p className="mt-3 text-sm text-gray-text">
          Última actualización: [FECHA DE ÚLTIMA ACTUALIZACIÓN]
        </p>

        <div className="prose mt-8">
          <p>
            El presente aviso legal regula el uso del sitio web{" "}
            {siteTitle} (en adelante, «el sitio web»). El acceso y uso de
            este sitio web implica la aceptación de las condiciones
            recogidas en este documento.
          </p>

          <h2>1. Titularidad del sitio web</h2>
          <p>
            Este sitio web es propiedad de{" "}
            <strong>[NOMBRE DEL RESPONSABLE]</strong>. Para cualquier
            consulta relacionada con la titularidad o el contenido del
            sitio, puedes contactar en{" "}
            <a href="mailto:[EMAIL DE CONTACTO]">[EMAIL DE CONTACTO]</a>.
          </p>

          <h2>2. Objeto y finalidad</h2>
          <p>
            {siteTitle} es un sitio web de carácter informativo dedicado al
            cuidado de mascotas, que ofrece artículos, guías y consejos
            sobre perros, gatos y otras mascotas.
          </p>

          <h2>3. Condiciones de uso</h2>
          <p>
            El usuario se compromete a hacer un uso adecuado y lícito del
            sitio web, de acuerdo con la legislación aplicable, la buena fe
            y el orden público, absteniéndose de utilizarlo de forma que
            pueda dañar, inutilizar o sobrecargar el sitio, o impedir su
            normal uso por parte de otros usuarios.
          </p>

          <h2>4. Propiedad intelectual</h2>
          <p>
            Los textos, imágenes, diseño gráfico y demás contenidos de este
            sitio web están protegidos por derechos de propiedad
            intelectual. Queda prohibida su reproducción, distribución o
            comunicación pública, total o parcial, sin la autorización
            expresa del titular del sitio, salvo en los casos permitidos
            por la ley.
          </p>

          <h2>5. Exclusión de responsabilidad</h2>
          <p>
            El contenido publicado en {siteTitle} tiene un
            <strong> carácter meramente informativo</strong>. En particular,
            el contenido relacionado con la salud animal{" "}
            <strong>
              no sustituye en ningún caso el diagnóstico, el consejo o el
              tratamiento de un veterinario
            </strong>
            . Ante cualquier duda o síntoma relacionado con la salud de tu
            mascota, consulta siempre con un profesional veterinario.
          </p>
          <p>
            Aunque procuramos que la información publicada sea precisa y
            esté actualizada, no garantizamos la exactitud, vigencia o
            integridad total de los contenidos, y no nos hacemos
            responsables de los daños o perjuicios que pudieran derivarse
            del uso de la información contenida en este sitio web.
          </p>

          <h2>6. Enlaces a terceros</h2>
          <p>
            Este sitio web puede incluir enlaces a sitios web de terceros.
            No nos hacemos responsables del contenido, la disponibilidad ni
            las políticas de privacidad de dichos sitios externos, sobre
            los que no tenemos control.
          </p>

          <h2>7. Legislación aplicable</h2>
          <p>
            Las presentes condiciones se rigen por la legislación española
            y europea aplicable. Cualquier controversia relacionada con
            este sitio web se someterá a los tribunales competentes según
            la normativa vigente.
          </p>

          <h2>8. Modificaciones</h2>
          <p>
            Nos reservamos el derecho a modificar este aviso legal para
            adaptarlo a cambios legislativos o en el funcionamiento del
            sitio web. Te recomendamos revisarlo periódicamente.
          </p>
        </div>
      </div>
    </div>
  );
}
