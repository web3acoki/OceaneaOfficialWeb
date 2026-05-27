import Button from "@/components/common/Button";

type AdventureButtonProps = {
  className?: string;
  textClassName?: string;
  onClick?: () => void;
};

export const adventureCtaClassName = (isMobileMode: boolean) =>
  isMobileMode
    ? "w-82/340 aspect-82/28"
    : "h-[50px] w-[179px]";

export const adventureCtaTextClassName = (isMobileMode: boolean) =>
  isMobileMode
    ? "text-[38cqh] font-bold leading-none"
    : "text-[20px] font-bold leading-[normal]";

export default function AdventureButton({ className, textClassName, onClick }: AdventureButtonProps) {
  return (
    <Button
      text="Play Now"
      className={`${className ?? ""} !bg-white hover:!bg-[#f5f5f5]`}
      textClassName={`${textClassName ?? ""} !text-[#0C0C0C]`}
      onClick={onClick}
    />
  );
}
