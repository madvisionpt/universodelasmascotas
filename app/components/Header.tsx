import { LogoIcon, MenuIcon } from "./icons";

export default function Header() {
  return (
    <header className="bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6">
        <a href="#" className="flex items-center gap-3">
          <LogoIcon className="h-12 w-12 shrink-0 sm:h-14 sm:w-14" />
          <span className="flex flex-col leading-[1.05]">
            <span className="text-lg font-extrabold tracking-tight text-navy sm:text-xl">
              Universo de
            </span>
            <span className="text-lg font-extrabold tracking-tight text-blue sm:text-xl">
              Mascotas
            </span>
          </span>
        </a>

        <button
          type="button"
          aria-label="Abrir menú"
          className="flex h-10 w-10 items-center justify-center text-navy transition-colors hover:text-blue"
        >
          <MenuIcon className="h-7 w-7" />
        </button>
      </div>
    </header>
  );
}
