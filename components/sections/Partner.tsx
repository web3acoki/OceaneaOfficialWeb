import { DebugBg } from "../features/DebugMode";
import { useMobileMode } from "../features/MobileMode";
export default function Partner() {
  const isMobileMode = useMobileMode();
  return <>
    <DebugBg className={isMobileMode
      ? "relative -translate-x-1/2 left-1/2 fmt-[67/340] aspect-340/90"
      : "relative -translate-x-1/2 left-1/2 fmt-[220/1320] aspect-1320/260"}>
      <p className={isMobileMode
        ? "ft-[32/340] font-medium fls-[-0.96/340] text-center"
        : "ft-[96/1320] font-medium fls-[-2.88/1320] text-center"}>Partners & Investors</p>
      <div className="fmt-[60/1320] flex flex-row items-center justify-center fg-[48/1320]">
        <img src="/partner-creatordao.png" alt="" className="w-358/1320 transition-transform duration-100 ease-out hover:-translate-y-3" />
        <img src="/partner-padi.png" alt="" className="w-222/1320 transition-transform duration-100 ease-out hover:-translate-y-3" />
        <img src="/partner-layer.png" alt="" className="w-275/1320 transition-transform duration-100 ease-out hover:-translate-y-3" />
        <img src="/partner-okx.png" alt="" className="w-228/1320 transition-transform duration-100 ease-out hover:-translate-y-3" />
      </div>
    </DebugBg>
  </>;
}
