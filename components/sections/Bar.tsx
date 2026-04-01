const barItems = [
  { src: "/frontier.svg", label: "Frontier" },
  { src: "/immersion.svg", label: "Immersion" },
  { src: "/innovation.svg", label: "Innovation" },
  { src: "/adventure.svg", label: "Adventure" },
  { src: "/community.svg", label: "Community" },
];

export default function Bar() {
  return <>
    <div className="fmx-[300/1920] fmt-[181/1920] aspect-1320/150">
      <div className="flex w-full justify-between @container-[size]">
        {barItems.map((item) => <div key={item.label} className="group flex flex-col items-center">
          <img src={item.src} alt="" className="h-[7cqw] w-full"/>
          <p className="fmt-[156/1320] text-center ft-[24/1320] font-medium uppercase text-0">{item.label}</p>
        </div>)}
      </div>
    </div>
  </>;
}
