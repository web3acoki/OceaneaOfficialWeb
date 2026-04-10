const imgGroup3 = "https://www.figma.com/api/mcp/asset/61163166-af66-4594-a3c8-384489c44276";
const img1 = "https://www.figma.com/api/mcp/asset/1248c735-bdba-4bda-b78e-0b5b997494cf";

export default function Header() {
  return (
    <div className="contents relative size-full" data-name="Header" data-node-id="755:15">
      <div className="-translate-x-1/2 absolute bg-white h-[80px] left-1/2 rounded-[122px] shadow-[0px_3px_6px_2px_rgba(0,0,0,0.06)] top-[40px] w-[1320px]" data-node-id="585:3680" />
      <div className="absolute contents left-[628px] top-[65px]" data-node-id="585:3681">
        <div className="absolute capitalize contents font-['Geologica:Regular',sans-serif] font-normal leading-[normal] left-[628px] not-italic text-[#0c0c0c] text-[24px] top-[65px] whitespace-nowrap" data-node-id="585:3682">
          <p className="absolute left-[628px] top-[65px]" data-node-id="585:3683" style={{ fontVariationSettings: "'CRSV' 0, 'SHRP' 0" }}>
            Product
          </p>
          <p className="absolute left-[785px] top-[66px]" data-node-id="585:3684" style={{ fontVariationSettings: "'CRSV' 0, 'SHRP' 0" }}>
            Earn
          </p>
          <p className="absolute left-[896px] top-[66px]" data-node-id="585:3685" style={{ fontVariationSettings: "'CRSV' 0, 'SHRP' 0" }}>
            Build
          </p>
          <p className="absolute left-[calc(50%+58px)] top-[66px]" data-node-id="585:3686" style={{ fontVariationSettings: "'CRSV' 0, 'SHRP' 0" }}>
            Learn
          </p>
          <p className="absolute left-[calc(50%+177px)] top-[68px]" data-node-id="585:3687" style={{ fontVariationSettings: "'CRSV' 0, 'SHRP' 0" }}>
            Join Oceanea
          </p>
        </div>
        <div className="absolute h-[12px] left-[755px] top-[77px] w-[355px]" data-node-id="585:3688">
          <div className="absolute inset-[0_-0.14%_0_0]">
            <img alt="" className="block max-w-none size-full" src={imgGroup3} />
          </div>
        </div>
      </div>
      <div className="absolute h-[27px] left-[335px] top-[67px] w-[197px]" data-name="_图层_1" data-node-id="585:3693">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={img1} />
      </div>
      <div className="absolute bg-[#0c0c0c] h-[53px] left-[calc(50%+478px)] rounded-[64px] top-[54px] w-[166px]" data-node-id="585:3701" />
      <p className="absolute capitalize font-['Geologica:Bold',sans-serif] font-bold leading-[normal] left-[calc(50%+529px)] not-italic text-[24px] text-white top-[65px] whitespace-nowrap" data-node-id="585:3702" style={{ fontVariationSettings: "'CRSV' 0, 'SHRP' 0" }}>
        Log In
      </p>
    </div>
  );
}
