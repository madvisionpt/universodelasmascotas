// AVISO: modelo generado automáticamente. Revisar con un profesional legal
// y/o usar un generador oficial antes de la aprobación final.

import type { Metadata } from "next";
import { siteUrl, siteTitle } from "../lib/site";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Consulta cómo tratamos tus datos personales en Universo de las Mascotas: qué información recogemos, cómo usamos cookies y cuáles son tus derechos.",
  alternates: {
    canonical: `${siteUrl}/politica-de-privacidad`,
  },
};

export default function PoliticaDePrivacidadPage() {
  return (
    <div className="flex-1 bg-white">
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-14">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Política de privacidad" }]} />

        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
          Política de privacidad
        </h1>
        <p className="mt-3 text-sm text-gray-text">
          Última actualización: [FECHA DE ÚLTIMA ACTUALIZACIÓN]
        </p>

        <div className="prose mt-8">
          <p>
            En {siteTitle} nos tomamos en serio la privacidad de quienes
            visitan este sitio web. Esta política explica qué datos
            recopilamos, con qué finalidad, y qué derechos tienes sobre
            ellos, de acuerdo con el Reglamento General de Protección de
            Datos (RGPD).
          </p>

          <h2>1. Responsable del tratamiento</h2>
          <p>
            El responsable del tratamiento de los datos recogidos a través
            de este sitio web es <strong>[NOMBRE DEL RESPONSABLE]</strong>.
            Para cualquier consulta relacionada con esta política, puedes
            escribir a{" "}
            <a href="mailto:[EMAIL DE CONTACTO]">[EMAIL DE CONTACTO]</a>.
          </p>

          <h2>2. Qué datos recopilamos</h2>
          <p>Recopilamos datos personales en dos situaciones principales:</p>
          <ul>
            <li>
              <strong>Formulario de contacto:</strong> cuando nos escribes a
              través del formulario de la página de{" "}
              <a href="/contacto">contacto</a>, recogemos tu nombre, tu
              correo electrónico y el contenido del mensaje que nos envías,
              con el único fin de responder a tu consulta.
            </li>
            <li>
              <strong>Datos de navegación:</strong> como la mayoría de los
              sitios web, recogemos de forma automática cierta información
              técnica sobre tu visita (por ejemplo, páginas visitadas, tipo
              de dispositivo o navegador) a través de cookies y tecnologías
              similares, tal y como se explica en el siguiente apartado.
            </li>
          </ul>

          <h2>3. Cookies</h2>
          <p>
            Este sitio utiliza cookies propias y de terceros. Puedes
            consultar todos los detalles en nuestra{" "}
            <a href="/politica-de-cookies">política de cookies</a>. A modo de
            resumen, utilizamos:
          </p>
          <ul>
            <li>
              <strong>Google Analytics:</strong> cookies de análisis y
              medición que nos ayudan a entender cómo se usa el sitio, de
              forma agregada y anónima cuando es posible.
            </li>
            <li>
              <strong>Google AdSense:</strong> cookies de publicidad que
              permiten mostrar anuncios, en algunos casos personalizados
              según tu navegación. Google actúa como proveedor externo y
              puede utilizar estas cookies conforme a sus propias políticas.
            </li>
          </ul>

          <h2>4. Finalidad del tratamiento</h2>
          <p>Tratamos tus datos personales para:</p>
          <ul>
            <li>Responder a las consultas que nos envíes por el formulario de contacto.</li>
            <li>Analizar el uso del sitio web y mejorar su funcionamiento y contenido.</li>
            <li>Mostrar publicidad, en algunos casos personalizada, a través de Google AdSense.</li>
          </ul>

          <h2>5. Base legal</h2>
          <p>
            La base legal para el tratamiento de tus datos es, según el
            caso, tu consentimiento (por ejemplo, al aceptar cookies no
            esenciales o al enviarnos el formulario de contacto) o nuestro
            interés legítimo en analizar y mejorar el sitio web.
          </p>

          <h2>6. Conservación de los datos</h2>
          <p>
            Conservamos los datos del formulario de contacto durante el
            tiempo necesario para atender tu consulta y, posteriormente,
            durante el plazo que exija la normativa aplicable. Los datos de
            navegación se conservan según los plazos establecidos por cada
            proveedor de cookies (Google Analytics y Google AdSense).
          </p>

          <h2>7. Tus derechos</h2>
          <p>
            De acuerdo con el RGPD, tienes derecho a acceder a tus datos
            personales, rectificarlos si son incorrectos, solicitar su
            supresión, y oponerte a su tratamiento, entre otros derechos
            reconocidos por la normativa. Puedes ejercer estos derechos
            escribiendo a{" "}
            <a href="mailto:[EMAIL DE CONTACTO]">[EMAIL DE CONTACTO]</a>.
          </p>

          <h2>8. Cambios en esta política</h2>
          <p>
            Podemos actualizar esta política de privacidad para adaptarla a
            cambios legislativos o en el funcionamiento del sitio web. Te
            recomendamos revisarla periódicamente.
          </p>
        </div>
      </div>
    </div>
  );
}
