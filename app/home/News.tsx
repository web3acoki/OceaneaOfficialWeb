import LoadedImage from "@/components/common/LoadedImage";
import NewsCardsStrip from "@/components/common/NewsCardsStrip";
import { DebugBg } from "@/components/features/DebugMode";
import { useMobileMode } from "@/components/features/MobileMode";

const launchArticleHref =
  "https://medium.com/@oceaneanetwork/oceanea-officially-launches-redefining-how-humanity-connects-with-the-ocean-ddbd83b0ef1c";

const newsCards = [
  {
    mobileSrc: "/figma/mobile-home/news-card-1-bg.png",
    desktopSrc: "/figma/desktop-home/news-card-1-bg-902f7d.png",
    title: "Oceanea Officially Launches",
    desc: "It is the beginning of a new way for humanity to connect with the ocean. Oceanea is the world's first decentralized ocean experience network...",
    tags: ["Overview", "Vision"],
    href: launchArticleHref,
    imageClassName: "absolute h-[104.61%] left-[-25.9%] max-w-none top-[-2.27%] w-[280%]",
  },
  {
    mobileSrc: "/figma/mobile-home/news-card-2-bg.png",
    desktopSrc: "/figma/desktop-home/news-card-2-bg.png",
    title: "Why Oceanea Is Building a New Category",
    desc: "Most projects fit into existing sectors. Oceanea doesn't. Discover why creating a new category can unlock greater long-term value than competing in crowded markets.",
    tags: ["Category", "Web3"],
    href: "https://medium.com/@oceaneanetwork/why-oceanea-is-building-a-new-category-not-following-an-existing-one-58cb1c9dff87?sharedUserId=oceaneanetwork",
  },
  {
    mobileSrc: "/figma/mobile-home/news-card-3-bg.png",
    desktopSrc: "/figma/desktop-home/news-card-3-bg-123552.png",
    title: "What Can People Really Gain from Oceanea?",
    desc: "Oceanea isn't just another platform to use. It's a new way to experience, explore, and participate in the ocean—both digitally and in the real world.",
    tags: ["Utility", "Ecosystem"],
    href: "https://medium.com/@oceaneanetwork/what-can-people-really-gain-from-oceanea-6095f0db12a7?sharedUserId=oceaneanetwork",
  },
  {
    mobileSrc: "/figma/mobile-home/news-card-4-bg.png",
    desktopSrc: "/figma/desktop-home/news-card-4-bg-3466ec.png",
    title: "Seeing the Complete Oceanea",
    desc: "Oceanea should be understood as a system, not a product—where different layers of ocean experiences come together as one.",
    tags: ["Structure", "Ecosystem"],
    href: "https://medium.com/@oceaneanetwork/seeing-the-complete-oceanea-why-x-diver-has-never-been-the-whole-story-e8b3bc113092?sharedUserId=oceaneanetwork",
  },
  {
    mobileSrc: "/figma/mobile-home/news-card-4-bg.png",
    desktopSrc: "/figma/desktop-home/news-card-4-bg-3466ec.png",
    title: "One Identity, Four Scenarios, One Ocean Life",
    desc: "Oceanea defines a unified framework where one identity system structures four distinct ocean experience scenarios into a continuous Ocean Life.",
    tags: ["Ecosystem", "Framework"],
    href: "https://medium.com/@oceaneanetwork/one-identity-four-scenarios-one-ocean-life-9f057188fe53?sharedUserId=oceaneanetwork",
  },
];

type NewsCardProps = {
  card: (typeof newsCards)[number];
  isMobileMode: boolean;
};

function NewsCard({ card, isMobileMode }: NewsCardProps) {
  const readMoreClassName = (enlarged: boolean, platform: "mobile" | "desktop" = "mobile") => {
    if (platform === "desktop") {
      return enlarged
        ? "flex h-[calc(42/418*100cqw)] w-[calc(234/418*100cqw)] cursor-default items-center justify-center rounded-full bg-white ft-[20/418] font-bold flh-[24/418] tracking-[0.0305em] text-[#0c0c0c]"
        : "relative z-30 flex h-[calc(28/418*100cqw)] w-[calc(155/418*100cqw)] items-center justify-between rounded-full bg-[#0c0c0c] pl-[calc(18/418*100cqw)] pr-[calc(3/418*100cqw)] ft-[16/418] font-bold flh-[24/418] tracking-[0.0305em] text-white transition-transform duration-200 hover:scale-105";
    }

    return enlarged
      ? "relative z-30 flex h-[calc(14/165*100cqw)] w-[calc(78/165*100cqw)] items-center justify-center rounded-full bg-white ft-[7.5/165] font-bold leading-none tracking-[0.0813em] text-[#0c0c0c] transition-transform duration-200 hover:scale-105"
      : "relative z-30 flex h-[calc(10/165*100cqw)] w-[calc(52/165*100cqw)] items-center justify-center rounded-full bg-white ft-[6/165] font-bold leading-none tracking-[0.0813em] text-[#0c0c0c] transition-transform duration-200 hover:scale-105";
  };

  const ArrowIcon = () => (
    <span className="flex size-[calc(22/418*100cqw)] shrink-0 items-center justify-center rounded-full bg-white text-[#0c0c0c]">
      <svg width="39%" height="39%" viewBox="0 0 8 8" fill="none" aria-hidden="true">
        <path d="M1 4h5M4 1l3 3-3 3" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );

  const readMore = (enlarged = false, platform: "mobile" | "desktop" = "mobile") => {
    const content = platform === "desktop" ? (
      <>
        <span>READ MORE</span>
        <ArrowIcon />
      </>
    ) : "READ MORE";
    return <span className={readMoreClassName(enlarged, platform)}>{content}</span>;
  };

  if (!isMobileMode) {
    return (
      <div className="aspect-[418/746] w-[calc(418/1787*100%)] shrink-0 @container-[size]">
        <a
          href={card.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={card.title}
          className="block size-full cursor-pointer rounded-[50px]"
        >
          <div className="relative size-full overflow-hidden rounded-[50px] shadow-[0px_4px_8.5px_2px_rgba(0,0,0,0.05)] fr-[50/418]">
            <LoadedImage src={card.desktopSrc} alt="" loading="lazy" decoding="async" frameClassName="absolute inset-0 rounded-[inherit]" className="size-full rounded-[inherit] object-cover" />
            <div className="absolute inset-x-0 bottom-0 h-[calc(407/746*100%)] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,#fff_77%)]" />

            <div className="absolute left-[calc(22/418*100%)] top-[calc(484/746*100%)] z-10 h-[calc(234/746*100%)] w-[calc(381/418*100%)] text-center text-[#0c0c0c]">
              <p className="w-full text-balance font-medium leading-none ft-[30/418]">{card.title}</p>
              <p className="mt-[calc(18/418*100cqw)] line-clamp-3 w-full break-words ft-[18/418] font-normal flh-[24/418] text-[#626262]">
                {card.desc}
              </p>

              <div className="absolute inset-x-0 bottom-0 flex w-full items-center justify-between gap-[calc(10/418*100cqw)]">
                <div className="flex min-w-0 flex-wrap items-center gap-x-[calc(6/418*100cqw)] gap-y-[calc(8/418*100cqw)]">
                  {card.tags.map((tag) => (
                    <p key={tag} className="flex h-[calc(28/418*100cqw)] items-center justify-center rounded-full border border-[#0c0c0c] px-[calc(14/418*100cqw)] ft-[12/418] flh-[20/418] fls-[-0.15/418]">
                      {tag}
                    </p>
                  ))}
                </div>
                {readMore(false, "desktop")}
              </div>
            </div>
          </div>
        </a>
      </div>
    );
  }

  return (
    <div className="aspect-418/740 w-[165px] shrink-0 @container-[size]">
      <a
        href={card.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={card.title}
        className="block size-full cursor-pointer rounded-[15px]"
      >
        <div className="relative aspect-418/720 overflow-hidden rounded-[15px] shadow-[0px_3px_7.5px_rgba(0,0,0,0.10)] fr-[15/165]">
          <LoadedImage src={card.mobileSrc} alt="" loading="lazy" decoding="async" frameClassName="absolute inset-0 rounded-[inherit]" className="size-full rounded-[inherit] object-cover" />
          <div className="absolute inset-x-0 bottom-0 h-[calc(179/282.75*100%)] bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.68)_52%,rgba(0,0,0,0.92)_100%)]" />

          <div className="absolute left-[calc(14/175*100%)] top-[calc(170/282.75*100%)] z-10 h-[calc(101/282.75*100%)] w-[calc(147/175*100%)] text-center text-white">
            <p className="line-clamp-2 w-full font-medium leading-tight ft-[10/165]">{card.title}</p>
            <p className="mt-[calc(5/165*100cqw)] line-clamp-3 w-full break-words ft-[7/165] font-light flh-[8.5/165] fls-[-0.2/165]">
              {card.desc}
            </p>

            <div className="absolute inset-x-0 bottom-0 flex w-full items-center justify-between gap-[calc(4/165*100cqw)]">
              <div className="flex min-w-0 flex-wrap items-center fg-[4/165]">
                {card.tags.map((tag) => (
                  <p key={tag} className="flex h-[calc(10/165*100cqw)] items-center justify-center rounded-full border border-white px-[calc(4/165*100cqw)] ft-[6/165] flh-[8/165] fls-[-0.15/165]">
                    {tag}
                  </p>
                ))}
              </div>
              {readMore()}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default function News() {
  const isMobileMode = useMobileMode();
  const cards = newsCards.map((card) => <NewsCard key={card.title} card={card} isMobileMode={isMobileMode} />);

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
        <NewsCardsStrip enableDrag className="fmt-[24/340] -mx-[20px] flex w-[calc(100%+40px)] flex-row flex-nowrap gap-[10px] overflow-x-auto px-[20px]">
          {cards}
        </NewsCardsStrip>
      ) : (
        <div className="relative left-1/2 fmt-[33/1320] w-[min(100vw,1787px)] -translate-x-1/2 overflow-visible">
          <NewsCardsStrip enableDrag className="relative flex w-full flex-row flex-nowrap justify-start overflow-x-auto gap-[calc(32/1787*100%)]">
            {cards}
          </NewsCardsStrip>
        </div>
      )}
    </DebugBg>
  );
}
