import { Battery, Signal, Wifi } from "lucide-react";
import type { ReactNode } from "react";

export function IPhoneFrame({
  children,
  screenClassName = "bg-[#0e1621]",
  className = "w-40 shrink-0 lg:w-auto",
}: {
  children: ReactNode;
  screenClassName?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="rounded-[28px] border border-white/12 bg-[#0a0b0e] p-1.5">
        <div
          className={`relative aspect-[9/19] overflow-hidden rounded-[22px] text-white ${screenClassName}`}
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-9">
            <div className="absolute left-1/2 top-1.5 h-[18px] w-[72px] -translate-x-1/2 rounded-full bg-black" />
            <div className="flex h-9 items-end justify-between px-4 pb-1">
              <span className="text-[10px] font-semibold leading-none">9:41</span>
              <div className="flex items-center gap-0.5 text-white">
                <Signal className="size-2.5" strokeWidth={2.4} aria-hidden />
                <Wifi className="size-2.5" strokeWidth={2.4} aria-hidden />
                <Battery className="size-3" strokeWidth={2.2} aria-hidden />
              </div>
            </div>
          </div>
          <div className="absolute inset-0 overflow-hidden pt-9">{children}</div>
          <div className="pointer-events-none absolute inset-x-0 bottom-1 z-20 flex justify-center">
            <div className="h-0.5 w-16 rounded-full bg-white/25" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function PhoneGallery({ children }: { children: ReactNode }) {
  return (
    <div className="-mx-6 mt-8 flex gap-3 overflow-x-auto px-6 pb-1 [scrollbar-width:none] lg:mx-0 lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-0 [&::-webkit-scrollbar]:hidden">
      {children}
    </div>
  );
}
