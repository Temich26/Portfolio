import Image from "next/image";
import { BookingBotDemo } from "@/components/BookingBotDemo";
import { ProjectDiscussLink } from "@/components/ProjectDiscussLink";
import { PhoneGallery } from "@/components/IPhoneFrame";
import { SalesDeskDemo } from "@/components/SalesDeskDemo";
import { projects } from "@/lib/site";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent">
          02 — Портфолио
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
          Проекты
        </h2>

        <div className="mt-12 grid gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`rounded-2xl border p-6 sm:p-8 lg:p-10 ${
                project.demo === "booking-bot"
                  ? "border-emerald-500/20 bg-[#101613]"
                  : "border-border bg-card"
              }`}
            >
              <div className="max-w-2xl">
                <h3 className="text-2xl font-semibold tracking-tight">
                  {project.title}
                </h3>
                {project.subtitle ? (
                  <p className="mt-1 text-sm text-emerald-300">
                    {project.subtitle}
                  </p>
                ) : null}
                <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
                  {project.summary}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border px-3 py-1 text-xs text-foreground/80"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <ProjectDiscussLink />
              </div>
              {project.screenshots ? (
                <PhoneGallery>
                  {project.screenshots.map((shot) => (
                    <div
                      key={shot.src}
                      className="relative aspect-[390/844] w-40 shrink-0 overflow-hidden rounded-[22px] border border-white/12 bg-background lg:w-auto"
                    >
                      <Image
                        src={shot.src}
                        alt={shot.alt}
                        fill
                        className="object-cover object-top"
                        sizes="220px"
                      />
                    </div>
                  ))}
                </PhoneGallery>
              ) : null}
              {project.demo === "sales-desk" ? <SalesDeskDemo /> : null}
              {project.demo === "booking-bot" ? <BookingBotDemo /> : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
