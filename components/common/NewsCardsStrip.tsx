"use client";

import { useCallback, useRef, type ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
  enableDrag?: boolean;
};

export default function NewsCardsStrip({ className = "", children, enableDrag = true }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const drag = useRef<{ startX: number; startScroll: number } | null>(null);

  const endDrag = useCallback((e: React.PointerEvent) => {
    if (!enableDrag) return;
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
    if (!enableDrag) return;
    if (e.pointerType !== "mouse") return;
    const el = ref.current;
    if (!el) return;
    if ((e.target as HTMLElement).closest("button, a")) return;
    drag.current = { startX: e.clientX, startScroll: el.scrollLeft };
    el.setPointerCapture(e.pointerId);
  }, [enableDrag]);

  const onPointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!enableDrag) return;
    if (e.pointerType !== "mouse" || !drag.current) return;
    const el = ref.current;
    if (!el) return;
    const dx = e.clientX - drag.current.startX;
    el.scrollLeft = drag.current.startScroll - dx;
  }, [enableDrag]);

  return (
    <div
      ref={ref}
      className={[
        className,
        enableDrag ? "touch-pan-x cursor-grab active:cursor-grabbing select-none" : "",
        "[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
      ].join(" ")}
      onPointerDown={enableDrag ? onPointerDown : undefined}
      onPointerMove={enableDrag ? onPointerMove : undefined}
      onPointerUp={enableDrag ? endDrag : undefined}
      onPointerCancel={enableDrag ? endDrag : undefined}
    >
      {children}
    </div>
  );
}
