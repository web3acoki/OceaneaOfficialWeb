import type { MouseEventHandler } from "react";

type CommonButtonProps = {
  text?: string;
  className?: string;
  textClassName?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  href?: string;
  target?: string;
};

export default function Button({ text, className, textClassName, onClick, href, target }: CommonButtonProps) {
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
  const label = <p className={labelClassName}>{text}</p>;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={buttonClassName}
      >
        {label}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={buttonClassName}>
      {label}
    </button>
  );
}
