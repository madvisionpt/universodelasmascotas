import Image from "next/image";

const articles = [
  {
    tag: "PERROS",
    title: "10 señales de que tu perro te quiere",
    description: "Descubre cómo identificar el amor de tu perro.",
    image:
      "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=800&q=80&fit=crop&auto=format",
    alt: "Perro mirando a cámara",
  },
  {
    tag: "GATOS",
    title: "Cómo entender el lenguaje felino",
    description: "Aprende a interpretar su comportamiento.",
    image:
      "https://images.unsplash.com/photo-1583795128727-6ec3642408f8?w=800&q=80&fit=crop&auto=format",
    alt: "Gato mirando a cámara",
  },
  {
    tag: "PERROS",
    title: "Guía de alimentación por edades",
    description: "La nutrición adecuada en cada etapa de su vida.",
    image:
      "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?w=800&q=80&fit=crop&auto=format",
    alt: "Perro en el parque",
  },
];

export default function PopularArticles() {
  return (
    <section id="articulos" className="scroll-mt-24 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <p className="text-xs font-bold uppercase tracking-wider text-blue sm:text-sm">
          Artículos populares
        </p>
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
          Lo más leído
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.title}
              className="group flex flex-col rounded-2xl p-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(15,30,61,0.3)]"
            >
              <div className="relative h-44 w-full overflow-hidden rounded-2xl sm:h-48">
                <Image
                  src={article.image}
                  alt={article.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-blue-light px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-blue">
                  {article.tag}
                </span>
              </div>
              <h3 className="mt-4 text-base font-bold text-navy transition-colors duration-300 group-hover:text-blue sm:text-lg">
                {article.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-gray-text">
                {article.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
