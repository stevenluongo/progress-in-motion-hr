import { twMerge } from "tailwind-merge";
import Icons, { IconsLiteral } from "./icons";
import { Body } from "./typography";

type FeaturesProps = React.HTMLProps<HTMLDivElement> & {
  icon: IconsLiteral;
};

const Features = ({ children, icon, className }: FeaturesProps) => {
  const Icon = Icons[icon];
  return (
    <div
      className={twMerge(
        "flex flex-col md:flex-row items-center gap-x-4 fill-transparent [&>svg]:w-[30px] [&>svg]:h-[30px] stroke-blue-700 border py-2 lg:py-0 border-blue-200 md:border-none md:bg-transparent rounded-md bg-blue-100 w-full",
        className
      )}
    >
      <Icon />
      <Body className="text-center md:text-start">{children}</Body>
    </div>
  );
};

export default Features;
