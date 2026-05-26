import type { MouseEventHandler } from "react";

type CommonButtonProps = { text?: string; className?: string; textClassName?: string; onClick?: MouseEventHandler<HTMLButtonElement> };

export default function Button({ text, className, textClassName, onClick }: CommonButtonProps) {
  const buttonClassName = [
    "bg-0 rounded-full flex items-center justify-center duration-200 cursor-pointer hover:-translate-y-1 hover:bg-1 @container-[size]",
    className,
  ]
    .join(" ")
    .trim();
  const labelClassName = [
    "text-[40cqh] text-white font-bold whitespace-nowrap leading-none",
    textClassName,
  ]
    .join(" ")
    .trim();
  return <>
    <button onClick={onClick} className={buttonClassName}>
      <p className={labelClassName}>{text}</p>
    </button>
  </>;
}
