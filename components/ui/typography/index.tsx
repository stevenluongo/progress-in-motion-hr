import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

type ParagraphProps = React.HTMLProps<HTMLParagraphElement>;
type HeadingProps = React.HTMLProps<HTMLHeadingElement>;

const titleBase = "font-prata leading-header text-center md:text-start";
const scriptBase = "font-adelia text-center md:text-start";
const bodyBase = "font-kumbh leading-body";

export const TitleLarge = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ children, className }, ref) => (
    <h1
      ref={ref}
      className={twMerge(
        "text-[2.5em] md:text-[3.25em] lg:text-[3.75em] 2xl:text-[4em] tracking-[-1.5%] uppercase text-blue-700",
        className,
        titleBase
      )}
    >
      {children}
    </h1>
  )
);

TitleLarge.displayName = "TitleLarge";

export const Title = ({ children, className }: HeadingProps) => (
  <h2
    className={twMerge(
      "text-[2em] lg:text-[2.5em] 2xl:text-[3em] tracking-[-1%] text-blue-700",
      className,
      titleBase
    )}
  >
    {children}
  </h2>
);

export const TitleSmall = ({ children, className }: HeadingProps) => (
  <h3
    className={twMerge(
      " text-[1.5em] lg:text-[1.75em] 2xl:text-[2em] text-blue-700 leading-body",
      className,
      titleBase
    )}
  >
    {children}
  </h3>
);

export const Script = ({ children, className }: HeadingProps) => (
  <h1
    className={twMerge(
      "text-[1.25em] md:text-[1.5em] 2xl:text-[1.75em] leading-body text-blue-primary w-fit",
      className,
      scriptBase
    )}
  >
    {children}
  </h1>
);

export const ScriptSmall = ({ children, className }: HeadingProps) => (
  <h1
    className={twMerge(
      "text-[1em] md:text-[1.25em] leading-header text-blue-primary w-fit",
      className,
      scriptBase
    )}
  >
    {children}
  </h1>
);

export const BodyLarge = ({ children, className }: ParagraphProps) => (
  <p
    className={twMerge(
      "text-[1.25em] uppercase tracking-[10%]",
      className,
      bodyBase
    )}
  >
    {children}
  </p>
);

export const Body = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ children, className }, ref) => (
    <p
      ref={ref}
      className={twMerge("text-[1em] text-blue-600", className, bodyBase)}
    >
      {children}
    </p>
  )
);

Body.displayName = "Body";

export const BodySmall = ({ children, className }: ParagraphProps) => (
  <p className={twMerge("text-[0.875em]", className, bodyBase)}>{children}</p>
);

export const BodyExtraSmall = ({ children, className }: ParagraphProps) => (
  <p className={twMerge("text-[0.75em]", className, bodyBase)}>{children}</p>
);

export const ButtonText = ({ children, className }: ParagraphProps) => (
  <p
    className={twMerge(
      "font-kumbh text-[0.625em] uppercase leading-header tracking-[30%]",
      className
    )}
  >
    {children}
  </p>
);
