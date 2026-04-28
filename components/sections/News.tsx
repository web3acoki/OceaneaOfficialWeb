import NewsCardsStrip from "../common/NewsCardsStrip";
import Button from "../common/Button";
import { DebugBg } from "../features/DebugMode";
import { useMobileMode } from "../features/MobileMode";
const newsCards = [
  {src: "/news-card-1.jpg",imageClassName:"absolute h-[104.61%] left-[-25.9%] max-w-none top-[-2.27%] w-[280%]"},
  {src: "/news-card-2.jpg",imageClassName:"absolute h-[126.07%] left-[-100%] max-w-none top-[-26.01%] w-[300%]"},
  {src: "/news-card-3.jpg",imageClassName:"absolute h-[100%] left-[-68.98%] max-w-none top-[0%] w-[238%]"},
  {src: "/news-card-4.jpg",imageClassName:"absolute h-[114.96%] left-[-93.71%] max-w-none top-[-7.48%] w-[307.71%]"},
];

const descLine =
  "The world's first exoskeleton-based underwater propulsion device, redefining human movement below the surface";

export default function News() {
  const isMobileMode = useMobileMode();
  return <>
  
    <DebugBg className={isMobileMode
      ? "relative -translate-x-1/2 left-1/2 fmt-[83/340]"
      : "relative -translate-x-1/2 left-1/2 fmt-[220/1320] aspect-1320/920"}>
      <p className={isMobileMode
        ? "ft-[32/340] font-medium fls-[-0.96/340] text-center"
        : "ft-[96/1320] font-medium fls-[-2.88/1320] text-center"}>Oceanea News</p>
      <NewsCardsStrip enableDrag={!isMobileMode} className={isMobileMode
        ? "fmt-[24/340] grid w-full grid-cols-2 fg-[10/340]"
        : "relative fmt-[50/1320] left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen flex flex-row flex-nowrap justify-center overflow-x-auto fg-[32/1320]"}>
        {newsCards.map((card, i) => (
          <div key={card.src} className={isMobileMode 
            ? "aspect-418/740 @container-[size]" 
            : "aspect-418/740 w-418/1920 @container-[size]"}>
            
            <div className={isMobileMode
              ? "relative aspect-418/720 overflow-hidden shadow-[0px_3px_7.5px_rgba(0,0,0,0.10)] fr-[15/165] "
              : "relative aspect-418/720 overflow-hidden shadow-[3px_6px_7.5px_rgba(0,0,0,0.20)] fr-[50/418] "}>
              <img src={card.src} className={card.imageClassName}/>
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,transparent_45.442%,rgba(255,255,255,0.5)_58%,rgba(255,255,255,0.88)_78%,#ffffff_100%)]"/>

              {isMobileMode && (
                <div className="absolute inset-x-0 z-20 fmt-[10/165] flex w-full justify-center fg-[8/165]">
                  <p className="rounded-full bg-0 text-white  text-center fpy-[1/165] fpx-[6/165] ft-[6/165]"> RWA </p>
                  <p className="rounded-full bg-0 text-white  text-center fpy-[1/165] fpx-[6/165] ft-[6/165]"> Gearing </p>
                </div>
              )}
              
              <div className={isMobileMode
                ? "relative z-10 flex flex-col fmt-[200/165] fmx-[5/165]"
                : "relative z-10 flex flex-col fmt-[450/418] fmx-[16/418]"}>
                <p className={isMobileMode
                  ? "ft-[15/165] text-center font-medium"
                  : "ft-[36/418] text-center font-medium"}>X-ARTURA</p>
                <p className={isMobileMode
                  ? "ft-[8/165] flh-[8/165] fls-[-0.24/165] text-center"
                  : "fmt-[10/418] fmx-[30/418] ft-[20/418] flh-[25/418] text-[#626262] text-center"}>{descLine}</p>
          
                <div className={isMobileMode
                  ? "fmt-[8/165] fmx-[5/165] flex flex-row flex-wrap items-center justify-between"
                  : "fmt-[60/418] fmx-[20/418] flex flex-row flex-wrap items-center justify-between"}>
                  {!isMobileMode && <>
                    <p className="rounded-full border border-solid fpx-[12/418] fpy-[4/418] ft-[12/418]"> Gearing </p>
                    <p className="rounded-full border border-solid fpx-[12/418] fpy-[4/418] ft-[12/418]"> RWA </p>
                  </>}
                  <Button text="READ MORE" className={isMobileMode
                    ? "mx-auto w-85/165 aspect-85/20"
                    : "fml-[50/418] w-200/418 aspect-155/30"}/>
                </div>
              </div>
            </div>
          </div>
        ))}
      </NewsCardsStrip>
    </DebugBg>
  </>;
}
