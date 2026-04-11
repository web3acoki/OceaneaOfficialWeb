const barItems = [
  { src: "/frontier.svg", label: "Frontier" },
  { src: "/immersion.svg", label: "Immersion" },
  { src: "/innovation.svg", label: "Innovation" },
  { src: "/adventure.svg", label: "Adventure" },
  { src: "/community.svg", label: "Community" },
];

export default function Bar() {
  return <>
    <div className="relative -translate-x-1/2 left-1/2 fmt-[181/1320] aspect-1320/150">
      <div className="flex w-full justify-between @container-[size]">
        {barItems.map((item) => <div key={item.label} className="group flex flex-col items-center">
          <img src={item.src} alt="" className="h-[7cqw] w-full transition-transform duration-100 ease-out group-hover:-translate-y-3"/>
          <p className="fmt-[156/1320] text-center ft-[24/1320] font-medium uppercase text-0">{item.label}</p>
        </div>)}
      </div>
    </div>
  </>;
}
