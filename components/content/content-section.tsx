import { twMerge } from "@/tailwind.config";
import { FC } from "react";
import { ContentSectionProps } from "./content";

const ContentSection: FC<ContentSectionProps> = ({ children, className }) => {
  return (
    <section className={twMerge("py-[200px]", className)}>{children}</section>
  );
};

export default ContentSection;
