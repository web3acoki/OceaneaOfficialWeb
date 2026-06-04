import NewsCardsStrip from "@/components/common/NewsCardsStrip";
import Button from "@/components/common/Button";
import { DebugBg } from "@/components/features/DebugMode";
import { useMobileMode } from "@/components/features/MobileMode";

const newsCards = [
  { src: "/news-card-1.jpg", imageClassName: "absolute h-[104.61%] left-[-25.9%] max-w-none top-[-2.27%] w-[280%]" },
  { src: "/news-card-2.jpg", imageClassName: "absolute h-[126.07%] left-[-100%] max-w-none top-[-26.01%] w-[300%]" },
  { src: "/news-card-3.jpg", imageClassName: "absolute h-[100%] left-[-68.98%] max-w-none top-[0%] w-[238%]" },
  { src: "/news-card-4.jpg", imageClassName: "absolute h-[114.96%] left-[-93.71%] max-w-none top-[-7.48%] w-[307.71%]" },
];

const descLine =
  "The world's first exoskeleton-based underwater propulsion device, redefining human movement below the surface";

type NewsCardProps = {
  card: (typeof newsCards)[number];
  isMobileMode: boolean;
};

function NewsCard({ card, isMobileMode }: NewsCardProps) {
  if (!isMobileMode) {
    return (
      <div className="aspect-329/587 w-[calc(328.647/1364.167*100%)] @container-[size]">
        <div className="relative size-full overflow-hidden shadow-[0px_4px_8.5px_2px_rgba(0,0,0,0.05)] fr-[50/329]">
          <img src={card.src} alt="" loading="lazy" decoding="async" className={card.imageClassName} />
          <div className="absolute inset-x-0 bottom-0 h-[54.56%] bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.68)_66%,rgba(0,0,0,0.92)_100%)]" />

          <div className="absolute left-[7.3%] top-[66.66%] h-[28.3%] w-[86.4%] text-center text-white">
            <p aria-hidden="true" className="invisible absolute left-[27.8%] top-0 w-[43.3%] ft-[24/329] font-medium leading-none">X-ARTURA</p>
            <p aria-hidden="true" className="invisible absolute left-0 top-[22.9%] w-full ft-[16/329] flh-[20/329] fls-[-0.48/329] capitalize">
              The World&apos;s First Exoskeleton-Based Underwater Propulsion Device, Redefining Human Movement Below The Surface
            </p>

            <div className="absolute inset-x-0 top-[86.75%] flex items-center">
              <p aria-hidden="true" className="invisible flex h-[calc(22/329*100cqw)] w-[calc(60/329*100cqw)] items-center justify-center rounded-full border border-white ft-[12/329] flh-[20/329] fls-[-0.15/329]">
                Gearing
              </p>
              <p aria-hidden="true" className="invisible fml-[7/329] flex h-[calc(22/329*100cqw)] w-[calc(43/329*100cqw)] items-center justify-center rounded-full border border-white ft-[12/329] flh-[20/329] fls-[-0.15/329]">
                RWA
              </p>
              <button className="fml-[33/329] flex h-[calc(22/329*100cqw)] w-[calc(121/329*100cqw)] items-center justify-center rounded-full bg-white ft-[13/329] font-bold text-[#0c0c0c]">
                <span>READ MORE</span>
                <span className="ml-[calc(9/329*100cqw)] flex size-[calc(18/329*100cqw)] shrink-0 items-center justify-center rounded-full bg-[#0c0c0c]">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 18 18"
                    className="size-[calc(12/329*100cqw)]"
                    fill="none"
                  >
                    <path
                      d="M7 5L11 9L7 13"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="aspect-418/740 @container-[size]">
      <div className="relative aspect-418/720 overflow-hidden shadow-[0px_3px_7.5px_rgba(0,0,0,0.10)] fr-[15/165] ">
        <img src={card.src} alt="" loading="lazy" decoding="async" className={card.imageClassName} />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,transparent_45.442%,rgba(255,255,255,0.5)_58%,rgba(255,255,255,0.88)_78%,#ffffff_100%)]" />

        <div className="absolute inset-x-0 z-20 fmt-[10/165] flex w-full justify-center fg-[8/165]">
          <p aria-hidden="true" className="invisible rounded-full bg-0 text-white text-center fpy-[1/165] fpx-[6/165] ft-[6/165]"> RWA </p>
          <p aria-hidden="true" className="invisible rounded-full bg-0 text-white text-center fpy-[1/165] fpx-[6/165] ft-[6/165]"> Gearing </p>
        </div>

        <div className="relative z-10 flex flex-col fmt-[200/165] fmx-[5/165]">
          <p aria-hidden="true" className="invisible ft-[15/165] text-center font-medium">X-ARTURA</p>
          <p aria-hidden="true" className="invisible ft-[8/165] flh-[8/165] fls-[-0.24/165] text-center">
            {descLine}
          </p>

          <div className="fmt-[8/165] fmx-[5/165] flex flex-row flex-wrap items-center justify-between">
            <Button text="READ MORE" className="mx-auto w-85/165 aspect-85/20" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function News() {
  const isMobileMode = useMobileMode();
  const cards = newsCards.map((card) => <NewsCard key={card.src} card={card} isMobileMode={isMobileMode} />);

  return (
    <DebugBg className={isMobileMode
      ? "relative -translate-x-1/2 left-1/2 fmt-[83/340]"
      : "relative -translate-x-1/2 left-1/2 fmt-[220/1320] aspect-1320/700"
    }>
      <p className={isMobileMode
        ? "ft-[32/340] font-medium fls-[-0.96/340] text-center"
        : "ft-[60/1320] font-medium fls-[-1.8/1320] text-center"
      }>
        Oceanea News
      </p>

      {isMobileMode ? (
        <NewsCardsStrip enableDrag={false} className="fmt-[24/340] grid w-full grid-cols-2 fg-[10/340]">
          {cards}
        </NewsCardsStrip>
      ) : (
        <div className="relative left-1/2 fmt-[33/1320] w-[min(100vw,1364.167px)] -translate-x-1/2 overflow-visible">
          <NewsCardsStrip enableDrag className="relative flex w-full flex-row flex-nowrap justify-center overflow-x-auto gap-[calc(16/1364.167*100%)]">
            {cards}
          </NewsCardsStrip>
          <div className="pointer-events-none absolute left-0 top-[calc(-20/587*100%)] z-20 h-[calc(623/587*100%)] w-[calc(331/1364.167*100%)] bg-[linear-gradient(270deg,rgba(255,255,255,0)_9.7973%,rgba(255,255,255,0.5)_38.26%,#fff_86.318%)]" />
          <div className="pointer-events-none absolute right-0 top-[calc(-20/587*100%)] z-20 h-[calc(623/587*100%)] w-[calc(323/1364.167*100%)] bg-[linear-gradient(90deg,rgba(255,255,255,0)_0.24851%,rgba(255,255,255,0.5)_36.981%,#fff_73.713%)]" />
        </div>
      )}
    </DebugBg>
  );
}
