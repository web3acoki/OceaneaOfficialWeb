import Button from "@/components/common/Button";

type AdventureButtonProps = {
  className: string;
  onClick?: () => void;
};

export default function AdventureButton({ className, onClick }: AdventureButtonProps) {
  return (
    <Button
      text="Play Now"
      className={`${className} !bg-white hover:!bg-[#f5f5f5]`}
      textClassName="!text-[#0C0C0C]"
      onClick={onClick}
    />
  );
}
