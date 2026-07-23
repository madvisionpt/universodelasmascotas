import { topics } from "../lib/topics";

export default function TopicsExplorer() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
          Explora por temas
        </h2>

        <div className="mt-8 flex flex-wrap gap-3 sm:mt-10">
          {topics.map((topic) => (
            <a
              key={topic.slug}
              href={`/blog?tema=${topic.slug}`}
              className="rounded-full border border-navy/10 bg-bg-soft px-5 py-2.5 text-sm font-semibold text-navy transition-all duration-300 hover:-translate-y-0.5 hover:border-blue hover:bg-blue-light hover:text-blue"
            >
              {topic.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
