import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";

export function ProjectDiscussLink() {
  return (
    <a
      href={site.telegram}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-medium text-accent-soft transition-colors hover:text-accent"
    >
      Обсудить похожий проект
      <ArrowUpRight className="size-4" aria-hidden />
    </a>
  );
}
