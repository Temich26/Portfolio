import { skills } from "@/lib/site";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent">
              01 — Стек
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              Технологии
            </h2>
          </div>
        </div>
        <ul className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground/90"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
