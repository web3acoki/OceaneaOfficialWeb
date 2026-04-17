import NewsCardsStrip from "../common/NewsCardsStrip";
import Button from "../common/Button";
const newsCards = [
  {src: "/news-card-1.jpg",imageClassName:"absolute h-[104.61%] left-[-25.9%] max-w-none top-[-2.27%] w-[280%]"},
  {src: "/news-card-2.jpg",imageClassName:"absolute h-[126.07%] left-[-100%] max-w-none top-[-26.01%] w-[300%]"},
  {src: "/news-card-3.jpg",imageClassName:"absolute h-[100%] left-[-68.98%] max-w-none top-[0%] w-[238%]"},
  {src: "/news-card-4.jpg",imageClassName:"absolute h-[114.96%] left-[-93.71%] max-w-none top-[-7.48%] w-[307.71%]"},
];

const descLine =
  "The World's First Exoskeleton-Based Underwater Propulsion Device, Redefining Human Movement Below the Surface";

export default function News() {
  return <>
  
    <div className="relative -translate-x-1/2 left-1/2 fmt-[446/1320] aspect-1320/992">
      <p className="ft-[96/1320] font-medium fls-[-2.88/1320] text-center">Oceanea News</p>
      <NewsCardsStrip className="relative fmt-[127/1320] left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen flex flex-row flex-nowrap justify-center overflow-x-auto fg-[20/1920]">
        
        {newsCards.map((card, i) => (
          <div key={i} className="relative aspect-418/746 w-418/1920 shrink-0 overflow-hidden shadow-[0px_4px_8.5px_2px_rgba(0,0,0,0.05)] fr-[50/1920]">
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <img src={card.src} className={card.imageClassName} />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,transparent_45.442%,rgba(255,255,255,0.5)_58%,rgba(255,255,255,0.88)_78%,#ffffff_100%)]"/>
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
        
      </NewsCardsStrip>
    </div>
  </>;
}
