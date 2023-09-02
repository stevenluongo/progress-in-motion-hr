export interface ContentWrapperProps {
  children: ReactNode;
  light?: boolean;
}

export interface ContentSectionProps {
  children: ReactNode;
  className?: string;
  light?: boolean;
}

export interface ContentPanelProps {
  children: ReactNode;
  className?: string;
  light?: boolean;
}

export interface ContentContainerProps {
  children: ReactNode[];
  reverse?: boolean;
  light?: boolean;
}
