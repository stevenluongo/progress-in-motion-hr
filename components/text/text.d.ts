export interface TextBaseProps {
  children: ReactNode;
  light?: boolean;
  className?: string;
}

export interface TextContainerProps extends TextBaseProps {
  children: ReactNode[];
}

export interface TextHeadingPrimaryProps extends TextBaseProps {
  number: number;
}

export interface TextHeadingSecondaryProps extends TextBaseProps {
  heading?: string;
}
