import { ChevronLeft, ChevronRight, Paperclip, Smile } from "lucide-react";
import type { ReactNode } from "react";

export function TelegramChat({
  name,
  status,
  initials,
  date,
  avatarClassName = "bg-[#2AABEE]",
  children,
}: {
  name: string;
  status: string;
  initials: string;
  date: string;
  avatarClassName?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex h-full flex-col bg-[#0e1621]">
      <header className="flex items-center gap-1 bg-[#17212b] px-1 pb-1.5 pt-0.5">
        <ChevronLeft className="size-3.5 shrink-0 text-[#6ab3f3]" aria-hidden />
        <div
          className={`flex size-6 shrink-0 items-center justify-center rounded-full text-[8px] font-semibold ${avatarClassName}`}
        >
          {initials}
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-[10px] font-semibold leading-3">{name}</p>
          <p className="truncate text-[8px] leading-3 text-[#6d7f8f]">{status}</p>
        </div>
      </header>

      <div className="flex min-h-0 flex-1 flex-col gap-1.5 overflow-hidden px-1.5 py-1.5">
        <div className="flex justify-center">
          <span className="rounded-full bg-[#182533] px-2 py-0.5 text-[8px] text-[#c5d0d8]">
            {date}
          </span>
        </div>
        {children}
      </div>

      <div className="flex items-center gap-1 bg-[#17212b] px-1.5 py-1">
        <Paperclip className="size-3 shrink-0 text-[#6d7f8f]" aria-hidden />
        <div className="flex-1 truncate rounded-full bg-[#0e1621] px-2 py-1 text-[8px] text-[#6d7f8f]">
          Сообщение
        </div>
        <Smile className="size-3 shrink-0 text-[#6d7f8f]" aria-hidden />
      </div>
    </div>
  );
}

export function TgMessage({
  time,
  outgoing = false,
  children,
}: {
  time: string;
  outgoing?: boolean;
  children: ReactNode;
}) {
  return (
    <div
      className={`relative max-w-[96%] px-2 pb-3 pt-1.5 text-[9px] leading-[13px] ${
        outgoing
          ? "ml-auto rounded-xl rounded-tr-sm bg-[#2b5278]"
          : "rounded-xl rounded-tl-sm bg-[#182533]"
      }`}
    >
      {children}
      <span
        className={`absolute bottom-0.5 right-1.5 text-[7px] ${
          outgoing ? "text-[#9bbad4]" : "text-[#6d7f8f]"
        }`}
      >
        {time}
      </span>
    </div>
  );
}

export function TgActions({ items }: { items: string[] }) {
  return (
    <div className="grid gap-0.5">
      {items.map((item) => (
        <div
          key={item}
          className="flex items-center justify-between rounded-lg bg-[#182533] px-2 py-1 text-[9px] font-medium text-[#6ab3f3]"
        >
          <span className="truncate pr-1">{item}</span>
          <ChevronRight className="size-2.5 shrink-0" aria-hidden />
        </div>
      ))}
    </div>
  );
}
