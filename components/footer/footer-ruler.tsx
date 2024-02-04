import { twMerge } from "tailwind-merge";

type Direction = "horizontal" | "vertical";

type FooterRulerProps = {
  className?: string;
  direction: Direction;
};

const FooterRuler: React.FC<FooterRulerProps> = ({ className, direction }) => {
  const base = "bg-[#f0f6fc3d] border-none outline-none";

  return (
    <div
      className={twMerge(
        base,
        direction === "vertical" ? "w-[1px]" : "h-[1px]",
        className
      )}
    />
  );
};

export default FooterRuler;
