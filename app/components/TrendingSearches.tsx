import { SearchIcon, ArrowRightIcon } from "./icons";

const searches = [
  { question: "¿Por qué mi perro tiembla?", especie: "perros", tema: "salud" },
  {
    question: "¿Puede un gato comer plátano?",
    especie: "gatos",
    tema: "alimentacion",
  },
  {
    question: "¿Qué hacer si mi perro vomita?",
    especie: "perros",
    tema: "salud",
  },
  {
    question: "¿Por qué mi gato maúlla por la noche?",
    especie: "gatos",
    tema: "comportamiento",
  },
  {
    question: "¿Cómo enseñar a un cachorro?",
    especie: "perros",
    tema: "cachorros",
  },
];

export default function TrendingSearches() {
  return (
    <section className="bg-bg-soft">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
          Lo más buscado
        </h2>

        <div className="mt-8 flex flex-col divide-y divide-navy/8 overflow-hidden rounded-2xl bg-white shadow-[0_1px_0_0_rgba(15,30,61,0.05)] sm:mt-10">
          {searches.map((item) => (
            <a
              key={item.question}
              href={`/blog?especie=${item.especie}&tema=${item.tema}`}
              className="group flex items-center gap-4 px-5 py-4 transition-colors duration-200 hover:bg-blue-light sm:px-6"
            >
              <SearchIcon className="h-4 w-4 shrink-0 text-blue" />
              <span className="flex-1 text-sm font-semibold text-navy sm:text-base">
                {item.question}
              </span>
              <ArrowRightIcon className="h-4 w-4 shrink-0 text-gray-text transition-transform duration-200 group-hover:translate-x-1 group-hover:text-blue" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
