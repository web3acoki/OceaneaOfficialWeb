import type { MouseEventHandler } from "react";

type CommonButtonProps = { text?: string; className?: string; onClick?: MouseEventHandler<HTMLButtonElement> };

export default function Button({ text, className, onClick }: CommonButtonProps) {
  const buttonClassName = [
    "bg-0 rounded-full flex items-center justify-center transition-transform duration-200 hover:-translate-y-1 hover:bg-1 @container-[size]",
    className,
  ]
    .join(" ")
    .trim();
  return <>
    <button onClick={onClick} className={buttonClassName}>
      <p className="text-[50cqh]  text-white  font-bold">{text}</p>
    </button>
  </>;
}
