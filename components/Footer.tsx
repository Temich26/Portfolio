import { Phone, Send } from "lucide-react";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer id="contacts" className="scroll-mt-20 bg-background">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent">
          03 — Контакты
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
          Напишите напрямую
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-7 text-muted sm:text-base">
          Коротко опишите задачу — отвечу в Telegram или Max и предложу формат
          работы.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={site.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-sm text-foreground transition-colors hover:border-accent/40 hover:text-accent-soft"
          >
            <Send className="size-4" aria-hidden />
            Telegram {site.telegramHandle}
          </a>
          <a
            href={site.max.href}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-sm text-foreground transition-colors hover:border-accent/40 hover:text-accent-soft"
          >
            <Phone className="size-4" aria-hidden />
            {site.max.label} {site.max.phone}
          </a>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <p>WebApp · сайты · Telegram Mini Apps</p>
        </div>
      </div>
    </footer>
  );
}
