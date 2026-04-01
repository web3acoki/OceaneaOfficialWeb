import NewsCardsStrip from "./NewsCardsStrip";
import Button from "../common/Button";
const newsCards = [
  {src: "/news-card-1.jpg",imageClassName:"absolute h-[104.61%] left-[-25.9%] max-w-none top-[-2.27%] w-[280%]"},
  {src: "/news-card-2.jpg",imageClassName:"absolute h-[126.07%] left-[-100%] max-w-none top-[-26.01%] w-[300%]"},
  {src: "/news-card-3.jpg",imageClassName:"pointer-events-none absolute inset-0 h-full w-full max-w-none object-cover"},
  {src: "/news-card-4.jpg",imageClassName:"absolute h-[114.96%] left-[-93.71%] max-w-none top-[-7.48%] w-[307.71%]"},
];

const descLine =
  "The World's First Exoskeleton-Based Underwater Propulsion Device, Redefining Human Movement Below the Surface";

export default function News() {
  return <>
    <p className="fmx-[300/1920] fmt-[422/1920] ft-[96/1320] font-medium fls-[-2.88/1320] text-center">Oceanea News</p>
    <NewsCardsStrip className="fmt-[127/1920] flex flex-row flex-nowrap justify-start overflow-x-auto overscroll-x-contain scroll-smooth snap-x snap-mandatory fg-[20/1920] fpb-[12/1920]">
      <div className="shrink-0 snap-start w-300/1920"/>
      {newsCards.map((card, i) => (
        <div key={i} className="relative aspect-418/746 w-418/1920 shrink-0 snap-start overflow-hidden shadow-md fr-[50/1920]">
          <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
            <img src={card.src} className={card.imageClassName} />
          </div>
          <div className="pointer-events-none absolute inset-0 z-1 bg-[linear-gradient(180deg,transparent_0%,transparent_45.442%,rgba(255,255,255,0.5)_58%,rgba(255,255,255,0.88)_78%,#ffffff_100%)]"/>
          <div className="relative z-10 flex flex-col fmt-[490/418] fmx-[16/418]">
            <p className="ft-[36/1920] text-center font-medium">X-ARTURA</p>
            <p className="fmt-[12/418] ft-[20/1920] text-[rgba(12,12,12,0.6)] flh-[25/1920] text-center">{descLine}</p>

            <div className="fmt-[140/1920] fmx-[140/1920] flex flex-row flex-wrap items-center justify-between">
              <p className="rounded-full border border-solid fpx-[12/418] fpy-[4/418] ft-[12/1920]"> Gearing </p>
              <p className="rounded-full border border-solid fpx-[12/418] fpy-[4/418] ft-[12/1920]"> RWA </p>
              <Button text="READ MORE" className="fml-[50/418] w-200/418 aspect-155/30"/>
            </div>
          </div>
        </div>
      ))}
      <div className="shrink-0 snap-start w-300/1920"/>
    </NewsCardsStrip>
  </>;
}
