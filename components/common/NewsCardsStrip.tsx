"use client";

import { useCallback, useRef, type ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
};

export default function NewsCardsStrip({ className = "", children }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const drag = useRef<{ startX: number; startScroll: number } | null>(null);

  const endDrag = useCallback((e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    const el = ref.current;
    drag.current = null;
    if (el) {
      try {
        el.releasePointerCapture(e.pointerId);
      } catch {
        /* already released */
      }
    }
  }, []);

  const onPointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const el = ref.current;
    if (!el) return;
    if ((e.target as HTMLElement).closest("button, a")) return;
    drag.current = { startX: e.clientX, startScroll: el.scrollLeft };
    el.setPointerCapture(e.pointerId);
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || !drag.current) return;
    const el = ref.current;
    if (!el) return;
    const dx = e.clientX - drag.current.startX;
    el.scrollLeft = drag.current.startScroll - dx;
  }, []);

  return (
    <div
      ref={ref}
      className={[
        className,
        "touch-pan-x cursor-grab active:cursor-grabbing select-none",
        "[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
      ].join(" ")}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
    >
      {children}
    </div>
  );
}
