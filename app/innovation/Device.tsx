import { useEffect, useRef, useState } from "react";
import LoadedImage from "@/components/common/LoadedImage";
import { DebugBg } from "@/components/features/DebugMode";
import { useMobileMode } from "@/components/features/MobileMode";

/**
 * Innovation 二级页面 Device section — X-Artura 产品介绍 + 圆环参数图。
 * Figma 节点：1170:1120 (chevron) / 1170:1129 (subtitle) / 1170:1130 (paragraph) /
 *            1170:1136 (圆环 section) 内含 1170:1160 (rings) / 1170:1190 (diver composite) /
 *            1170:1154 (lead lines) / 1170:1191 (curve)。
 * 移动端无 Figma 稿，只写桌面端（保留 useMobileMode 以备后续补稿）。
 */

export default function Device() {
  const isMobileMode = useMobileMode();
  const specsRef = useRef<HTMLDivElement | null>(null);
  const [metricRun, setMetricRun] = useState(0);

  useEffect(() => {
    const el = specsRef.current;
    if (!el) return;

    let hasRun = false;
    const triggerMetrics = () => {
      if (hasRun) return;
      hasRun = true;
      setMetricRun((v) => v + 1);
    };
    const triggerIfVisible = () => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.88 && rect.bottom > window.innerHeight * 0.08) {
        triggerMetrics();
      }
    };

    requestAnimationFrame(triggerIfVisible);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        triggerMetrics();
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.01 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <DebugBg className="relative w-full aspect-1320/1476 fmt-[73/1320]">
      {/* 1170:1120 chevron decoration — SVG with gaussian blur, frame (832, 1042), 256×265 */}
      <LoadedImage
        src="/innovation/device-symbol.svg"
        alt=""
        frameClassName="absolute z-10 select-none pointer-events-none w-256/1320 aspect-256/265 fml-[532/1320] fmt-[0/1320]"
        className="size-full"
      />

      {/* 1170:1129 subtitle — 60px Geologica Medium TITLE-case, centered */}
      <p className={isMobileMode
        ? "absolute z-10 left-0 right-0 fmt-[102/1320] px-[1%] text-center font-medium text-[clamp(11px,3.6cqw,26px)] leading-[1.12] tracking-[-0.04em] text-[#0C0C0C] whitespace-nowrap"
        : "absolute z-10 left-0 right-0 fmt-[102/1320] px-[1%] text-center font-medium text-[clamp(26px,4cqw,52px)] leading-[1.12] tracking-[-0.03em] text-[#0C0C0C] whitespace-nowrap"
      }>
        The World&rsquo;s First Exoskeleton-Powered Smart DPV
      </p>

      {/* 1170:1130 paragraph — 24px Geologica Regular, centered, #7D7D7D */}
      <p className="absolute z-10 left-1/2 -translate-x-1/2 fmt-[230/1320] w-1182/1320 text-center font-normal ft-[24/1320] fls-[-0.72/1320] text-[#7D7D7D] whitespace-pre-line leading-[1.3]">
        {`Powered by advanced exoskeleton-sensing control technology, X-Artura enables effortless underwater actions such as going straight, turning, sudden stopping, reversing, and backstroke floating. With no need for hand-held operation, divers can fully free their hands and move underwater like a free fish—enjoying a far more immersive and delightful diving experience.`}
      </p>

      <div
        ref={specsRef}
        className="absolute z-0 fml-[70/1320] fmt-[274/1320] w-1180/1320 aspect-1180/1202 @container-[size]"
        aria-label="X-Artura performance specifications"
      >
        <LoadedImage
          src="/innovation/device-ring-rings.svg"
          alt=""
          frameClassName="absolute left-[calc(193/1180*100%)] top-[calc(277/1202*100%)] z-0 w-[calc(794/1180*100%)] select-none pointer-events-none"
          className="size-full"
        />
        <LoadedImage
          src="/innovation/device-ring-leadlines.svg"
          alt=""
          frameClassName="absolute left-[calc(101/1180*100%)] top-[calc(303/1202*100%)] z-10 w-[calc(929/1180*100%)] select-none pointer-events-none"
          className="size-full"
        />
        <LoadedImage
          src="/innovation/device-content.png"
          alt=""
          frameClassName="absolute left-[calc(214/1180*100%)] top-[calc(80/1202*100%)] z-20 w-[calc(753/1180*100%)] select-none pointer-events-none"
          className="size-full"
        />
        <LoadedImage
          src="/innovation/device-ring-curve.svg"
          alt=""
          frameClassName="absolute left-[calc(625/1180*100%)] top-[calc(118/1202*100%)] z-30 w-[calc(44/1180*100%)] select-none pointer-events-none"
          className="size-full"
        />
        <SpecMetric
          value={45}
          unit="M/Min"
          label="Maximum forward speed"
          className="left-[calc(0/1180*100%)] top-[calc(226/1202*100%)] w-[calc(330/1180*100cqw)]"
          run={metricRun}
        />
        <SpecMetric
          value={25}
          unit="M/Min"
          label={`Maximum\nbackward speed`}
          className="left-[calc(0/1180*100%)] top-[calc(570/1202*100%)] w-[calc(310/1180*100cqw)]"
          run={metricRun}
        />
        <SpecMetric
          value={40}
          unit="Min"
          label="Underwater endurance"
          className="left-[calc(0/1180*100%)] top-[calc(925/1202*100%)] w-[calc(330/1180*100cqw)]"
          run={metricRun}
        />
        <SpecMetric
          value={8}
          unit="Kg"
          label="Weight"
          className="left-[calc(1062/1180*100%)] top-[calc(430/1202*100%)] w-[calc(118/1180*100cqw)]"
          run={metricRun}
        />
        <SpecMetric
          value={100}
          unit="M"
          label={`Maximum\ndiving depth`}
          className="left-[calc(958/1180*100%)] top-[calc(802/1202*100%)] w-[calc(222/1180*100cqw)]"
          run={metricRun}
        />
      </div>
    </DebugBg>
  );
}

function SpecMetric({
  value,
  unit,
  label,
  className,
  run,
}: {
  value: number;
  unit: string;
  label: string;
  className: string;
  run: number;
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!run) return;
    let raf = 0;
    const duration = 760;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCurrent(Math.round(value * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, value]);

  return (
    <div className={`absolute z-40 ${className}`}>
      <p className="relative z-10 whitespace-nowrap font-medium leading-none text-[#0C0C0C]">
        <span className="text-[calc(92/1180*100cqw)] tabular-nums">{current}</span>
        <span className="ml-[calc(10/1180*100cqw)] align-baseline text-[calc(30/1180*100cqw)] font-normal">{unit}</span>
      </p>
      <p className="relative z-10 mt-[calc(10/1180*100cqw)] whitespace-pre-line text-[calc(26/1180*100cqw)] font-medium leading-[1.18] tracking-[-0.03em] text-[#7D7D7D]">
        {label}
      </p>
    </div>
  );
}
