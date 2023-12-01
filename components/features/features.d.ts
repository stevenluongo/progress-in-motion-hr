import { IconsLiteral } from "../icons/icons";

export interface FeaturesItemProps {
  children: ReactNode;
  light?: boolean;
  icon: IconsLiteral;
}

export interface FeaturesContainerProps {
  children: ReactNode[];
  light?: boolean;
}
