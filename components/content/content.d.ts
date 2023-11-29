export interface ContentWrapperProps
  extends React.HTMLAttributes<HTMLDivElement> {
  light?: boolean;
}

export interface ContentSectionProps {
  children: ReactNode;
  className?: string;
  light?: boolean;
}

export interface ContentPanelProps
  extends React.HTMLAttributes<HTMLDivElement> {
  light?: boolean;
}

export interface ContentContainerProps {
  children: ReactNode[];
  reverse?: boolean;
  light?: boolean;
}
