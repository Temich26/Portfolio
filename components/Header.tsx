import { Send } from "lucide-react";
import { site } from "@/lib/site";

const nav = [
  { href: "#skills", label: "Стек" },
  { href: "#projects", label: "Проекты" },
  { href: "#contacts", label: "Контакты" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="text-sm font-semibold tracking-tight">
          {site.name}
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={site.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-1.5 text-sm text-foreground transition-colors hover:border-accent/40 hover:text-accent-soft"
        >
          <Send className="size-3.5" aria-hidden />
          Telegram
        </a>
      </div>
    </header>
  );
}
