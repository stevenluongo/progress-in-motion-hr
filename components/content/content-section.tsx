import { twMerge } from "@/tailwind.config";
import { ReactNode } from "react";
import { FC } from "react";

interface ContentSectionProps {
  children: ReactNode;
  className?: string;
}

const ContentSection: FC<ContentSectionProps> = ({ children, className }) => {
  return (
    <section className={twMerge("py-[200px]", className)}>{children}</section>
  );
};

export default ContentSection;
