import LoadedImage from "@/components/common/LoadedImage";
import NewsCardsStrip from "@/components/common/NewsCardsStrip";
import { DebugBg } from "@/components/features/DebugMode";
import { useMobileMode } from "@/components/features/MobileMode";

const launchArticleHref =
  "https://medium.com/@oceaneanetwork/oceanea-officially-launches-redefining-how-humanity-connects-with-the-ocean-ddbd83b0ef1c";

const newsCards = [
  {
    src: "/news-card-1.jpg",
    mobileSrc: "/figma/mobile-home/news-card-1-bg.png",
    desktopSrc: "/figma/desktop-home/news-card-1-bg-902f7d.png",
    title: "Oceanea Officially Launches",
    desc: "It is the beginning of a new way for humanity to connect with the ocean. Oceanea is the world's first decentralized ocean experience network...",
    tags: ["Overview", "Vision"],
    href: launchArticleHref,
    imageClassName: "absolute h-[104.61%] left-[-25.9%] max-w-none top-[-2.27%] w-[280%]",
  },
  {
    src: "/news-card-2.jpg",
    mobileSrc: "/figma/mobile-home/news-card-2-bg.png",
    desktopSrc: "/figma/desktop-home/news-card-2-bg.png",
    title: "X-ARTURA",
    desc: "The world's first exoskeleton-based underwater propulsion device, redefining human movement below the surface",
    tags: ["Gearing", "RWA"],
    href: launchArticleHref,
    imageClassName: "absolute h-[126.07%] left-[-100%] max-w-none top-[-26.01%] w-[300%]",
  },
  {
    src: "/news-card-3.jpg",
    mobileSrc: "/figma/mobile-home/news-card-3-bg.png",
    desktopSrc: "/figma/desktop-home/news-card-3-bg-123552.png",
    title: "X-ARTURA",
    desc: "The world's first exoskeleton-based underwater propulsion device, redefining human movement below the surface",
    tags: ["Gearing", "RWA"],
    href: launchArticleHref,
    imageClassName: "absolute h-[100%] left-[-68.98%] max-w-none top-[0%] w-[238%]",
  },
  {
    src: "/news-card-4.jpg",
    mobileSrc: "/figma/mobile-home/news-card-4-bg.png",
    desktopSrc: "/figma/desktop-home/news-card-4-bg-3466ec.png",
    title: "X-ARTURA",
    desc: "The world's first exoskeleton-based underwater propulsion device, redefining human movement below the surface",
    tags: ["Gearing", "RWA"],
    href: launchArticleHref,
    imageClassName: "absolute h-[114.96%] left-[-93.71%] max-w-none top-[-7.48%] w-[307.71%]",
  },
];

type NewsCardProps = {
  card: (typeof newsCards)[number];
  isMobileMode: boolean;
};

function NewsCard({ card, isMobileMode }: NewsCardProps) {
  const isLaunchCard = card.tags[0] === "Overview";
  const readMore = card.href ? (
    <a
      href={card.href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-[calc(10/165*100cqw)] w-[calc(52/165*100cqw)] items-center justify-center rounded-full bg-white ft-[6/165] font-bold leading-none tracking-[0.0813em] text-[#0c0c0c] transition-transform duration-200 hover:scale-105"
    >
      READ MORE
    </a>
  ) : (
    <button className="flex h-[calc(10/165*100cqw)] w-[calc(52/165*100cqw)] items-center justify-center rounded-full bg-white ft-[6/165] font-bold leading-none tracking-[0.0813em] text-[#0c0c0c] transition-transform duration-200 hover:scale-105">
      READ MORE
    </button>
  );

  if (!isMobileMode) {
    return (
      <div className="aspect-[418/746] w-[calc(418/1787*100%)] @container-[size]">
        <div className="relative size-full overflow-hidden shadow-[0px_4px_8.5px_2px_rgba(0,0,0,0.05)] fr-[50/418]">
          <LoadedImage src={card.desktopSrc} alt="" loading="lazy" decoding="async" frameClassName="absolute inset-0" className="size-full object-cover" />
          <div className="absolute inset-x-0 bottom-0 h-[calc(407/746*100%)] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,#fff_77%)]" />

          <div className="absolute left-[calc(22/418*100%)] top-[calc(484/746*100%)] z-10 h-[calc(234/746*100%)] w-[calc(381/418*100%)] text-center text-[#0c0c0c]">
            <p className={`w-full font-medium leading-none ${isLaunchCard ? "ft-[30/418]" : "ft-[36/418]"}`}>{card.title}</p>
            <p className="mt-[calc(18/418*100cqw)] w-full ft-[20/418] font-normal flh-[25/418] fls-[-0.6/418] text-[#626262]">
              {card.desc}
            </p>

            <div className="absolute inset-x-0 bottom-0 flex w-full items-center justify-between">
              <div className="flex items-center fg-[6/418]">
                {card.tags.map((tag) => (
                  <p key={tag} className="flex h-[calc(28/418*100cqw)] items-center justify-center rounded-full border border-[#0c0c0c] px-[calc(14/418*100cqw)] ft-[12/418] flh-[20/418] fls-[-0.15/418]">
                    {tag}
                  </p>
                ))}
              </div>
              <a
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-[calc(28/418*100cqw)] w-[calc(155/418*100cqw)] items-center justify-center rounded-full bg-[#0c0c0c] ft-[16/418] font-bold flh-[24/418] tracking-[0.0305em] text-white transition-transform duration-200 hover:scale-105"
              >
                READ MORE
              </a>
            </div>
          </div>
          <a
            href={card.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={card.title}
            className="absolute inset-0 z-20"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="aspect-418/740 @container-[size]">
      <div className="relative aspect-418/720 overflow-hidden shadow-[0px_3px_7.5px_rgba(0,0,0,0.10)] fr-[15/165]">
        <LoadedImage src={card.mobileSrc} alt="" loading="lazy" decoding="async" frameClassName="absolute inset-0" className="size-full object-cover" />
        <div className="absolute inset-x-0 bottom-0 h-[calc(179/282.75*100%)] bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.68)_66%,rgba(0,0,0,0.92)_100%)]" />

        <div className={`absolute top-[calc(193/282.75*100%)] z-10 flex flex-col items-center text-center text-white ${isLaunchCard ? "left-[calc(2/175*100%)] w-[calc(171/175*100%)]" : "left-[calc(14/175*100%)] w-[calc(147/175*100%)]"}`}>
          <p className={`w-full font-medium leading-none ${isLaunchCard ? "ft-[12/165]" : "ft-[14/165]"}`}>{card.title}</p>
          <p className="mt-[calc(6/165*100cqw)] w-full ft-[8/165] font-light flh-[8/165] fls-[-0.24/165]">
            {card.desc}
          </p>

          <div className="mt-[calc(8/165*100cqw)] flex w-full items-center justify-between">
            <div className="flex items-center fg-[4/165]">
              {card.tags.map((tag) => (
                <p key={tag} className="flex h-[calc(10/165*100cqw)] items-center justify-center rounded-full border border-white px-[calc(4/165*100cqw)] ft-[6/165] flh-[8/165] fls-[-0.15/165]">
                  {tag}
                </p>
              ))}
            </div>
            {readMore}
          </div>
        </div>
        {card.href ? (
          <a
            href={card.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={card.title}
            className="absolute inset-0 z-20"
          />
        ) : null}
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
