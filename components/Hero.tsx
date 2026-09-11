import { ArrowRight } from "lucide-react";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative scroll-mt-20 overflow-hidden border-b border-border"
    >
      <div className="bg-glow pointer-events-none absolute inset-0" />
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="relative mx-auto flex min-h-[78vh] w-full max-w-6xl flex-col justify-center px-5 py-24 sm:px-8 sm:py-32">
        <p className="mb-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-accent">
          <span className="size-1.5 rounded-full bg-accent" />
          {site.role} · Mini Apps · Web
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Разработка WebApp, сайтов и TG-ботов
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
          Создаю индивидуальные решения для бизнеса: от автоматизации продаж до
          полнофункциональных Telegram Mini Apps под ключ.
        </p>
        <div className="mt-10">
          <a
            href={site.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-accent-soft"
          >
            Обсудить проект
            <ArrowRight className="size-4" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
