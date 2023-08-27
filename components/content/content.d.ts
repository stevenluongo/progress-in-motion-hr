export interface ContentWrapperProps {
  children: ReactNode;
}

export interface ContentSectionProps {
  children: ReactNode;
  className?: string;
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
