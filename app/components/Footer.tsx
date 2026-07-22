import { LogoIcon, InstagramIcon, FacebookIcon, TiktokIcon } from "./icons";

const siteLinks = [
  { href: "#top", label: "Inicio" },
  { href: "#articulos", label: "Artículos" },
  { href: "#footer", label: "Contacto" },
];

const socialLinks = [
  { href: "#", label: "Instagram", icon: InstagramIcon },
  { href: "#", label: "Facebook", icon: FacebookIcon },
  { href: "#", label: "TikTok", icon: TiktokIcon },
];

export default function Footer() {
  return (
    <footer id="footer" className="scroll-mt-24 bg-navy text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <a href="#top" className="flex items-center gap-3">
              <LogoIcon className="h-11 w-11 shrink-0" />
              <span className="flex flex-col leading-[1.05]">
                <span className="text-base font-extrabold tracking-tight text-white">
                  Universo de
                </span>
                <span className="text-base font-extrabold tracking-tight text-blue">
                  Mascotas
                </span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Consejos y guías prácticas para mejorar la salud, el bienestar y
              la felicidad de tu compañero.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-white/50">
              Sitio
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {siteLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-white/50">
              Síguenos
            </h3>
            <div className="mt-4 flex gap-3">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-300 hover:bg-blue"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
          <p>© 2026 Universo de las Mascotas. Todos los derechos reservados.</p>
          <p>Hecho con cariño para amantes de las mascotas.</p>
        </div>
      </div>
    </footer>
  );
}
