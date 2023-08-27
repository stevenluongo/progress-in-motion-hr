import { FC, ReactNode } from "react";
import CheckIcon from "../icons/check";
import { twMerge } from "@/tailwind.config";
import { FeaturesItemProps } from "./features";

const FeaturesItem: FC<FeaturesItemProps> = ({ children, light }) => {
  return (
    <span className="flex gap-x-2 items-center">
      <CheckIcon
        className={twMerge("w-4 h-4 stroke-blue-800", light && "stroke-white")}
      />
      <p
        className={twMerge(
          "font-poppins text-sm text-blue-800 leading-body",
          light && "text-white"
        )}
      >
        {children}
      </p>
    </span>
  );
};

export default FeaturesItem;
