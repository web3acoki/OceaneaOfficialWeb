"use client";

import Button from "../common/Button";

type MenuProps = {
  open: boolean;
  displayName: string;
  onClose: () => void;
};

export default function Menu({ open, displayName, onClose }: MenuProps) {
  if (!open) return <></>;
  return <>
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={onClose}>
      <section className="w-500/1920 aspect-square fr-[50/1920] bg-white" onClick={(e) => e.stopPropagation()}>
        <div className="fm-[150/1920] aspect-square grid grid-rows-4 fg-[150/1920]">
          <div className="flex items-center">
            <p className="text-zinc-900 ft-[24/1320]">{displayName}</p>
            <Button text="×" className="ml-auto w-300/1920 aspect-square" onClick={onClose} />
          </div>
          <Button text="Connect TG" />
          <Button text="Connect X" />
          <Button text="Log out" />
        </div>
      </section>
    </div>
  </>;
}
