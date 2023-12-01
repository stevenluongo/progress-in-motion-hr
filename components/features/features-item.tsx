"use client";

import { FC, ReactNode } from "react";
import { twMerge } from "@/tailwind.config";
import Icons, { IconsLiteral } from "../icons/icons";

export interface FeaturesItemProps {
  children: ReactNode;
  light?: boolean;
  icon: IconsLiteral;
}

const FeaturesItem: FC<FeaturesItemProps> = ({
  children,
  light,
  icon = "candle",
}) => {
  const Icon = Icons[icon];
  return (
    <div className="flex gap-x-2 items-center">
      <span
        className={twMerge("w-8 h-8 stroke-blue-800", light && "stroke-white")}
      >
        <Icon />
      </span>
      <p
        className={twMerge(
          "font-poppins text-sm text-blue-800 leading-body",
          light && "text-white"
        )}
      >
        {children}
      </p>
    </div>
  );
};

export default FeaturesItem;
