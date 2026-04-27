import NewsCardsStrip from "../common/NewsCardsStrip";
import Button from "../common/Button";
import { DebugBg } from "../features/DebugMode";

const newsCards = [
  {src: "/news-card-1.jpg",imageClassName:"absolute h-[104.61%] left-[-25.9%] max-w-none top-[-2.27%] w-[280%]"},
  {src: "/news-card-2.jpg",imageClassName:"absolute h-[126.07%] left-[-100%] max-w-none top-[-26.01%] w-[300%]"},
  {src: "/news-card-3.jpg",imageClassName:"absolute h-[100%] left-[-68.98%] max-w-none top-[0%] w-[238%]"},
  {src: "/news-card-4.jpg",imageClassName:"absolute h-[114.96%] left-[-93.71%] max-w-none top-[-7.48%] w-[307.71%]"},
];

const descLine =
  "The world's first exoskeleton-based underwater propulsion device, redefining human movement below the surface";

export default function News() {
  return <>
  
    <DebugBg className="relative -translate-x-1/2 left-1/2 fmt-[220/1320] aspect-1320/920">
      <p className="ft-[96/1320] font-medium fls-[-2.88/1320] text-center">Oceanea News</p>
      <NewsCardsStrip className="relative fmt-[50/1320] left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen flex flex-row flex-nowrap justify-center overflow-x-auto fg-[32/1320]">
        {newsCards.map((card, i) => <>
          <div className="aspect-418/740 w-418/1920 @container-[size]">
            
            <div key={i} className="relative aspect-418/720 overflow-hidden shadow-[3px_6px_7.5px_rgba(0,0,0,0.20)] fr-[50/418] ">
              <img src={card.src} className={card.imageClassName}/>
              <div className=" absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,transparent_45.442%,rgba(255,255,255,0.5)_58%,rgba(255,255,255,0.88)_78%,#ffffff_100%)]"/>
              
              <div className="relative z-10 flex flex-col fmt-[450/418] fmx-[16/418]">
                <p className="ft-[36/418] text-center font-medium fmx-[100/418]">X-ARTURA</p>
                <p className="fmt-[10/418] fmx-[30/418] ft-[20/418] flh-[25/418] text-[#626262] text-center">{descLine}</p>
          
                <div className="fmt-[60/418] fmx-[20/418] flex flex-row flex-wrap items-center justify-between">
                  <p className="rounded-full border border-solid fpx-[12/418] fpy-[4/418] ft-[12/418]"> Gearing </p>
                  <p className="rounded-full border border-solid fpx-[12/418] fpy-[4/418] ft-[12/418]"> RWA </p>
                  <Button text="READ MORE" className="fml-[50/418] w-200/418 aspect-155/30"/>
                </div>
              </div>
            </div>
          </div>
          
        </>
        )}
      </NewsCardsStrip>
    </DebugBg>
  </>;
}
