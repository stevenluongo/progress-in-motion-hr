import { executeScroll } from "@/utils/scroll";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

type FooterLinkProps = {
  children: React.ReactNode;
  href: string;
  className?: string;
  ariaLabel: string;
  query?: string;
};

const FooterLink: React.FC<FooterLinkProps> = ({
  children,
  href,
  className,
  ariaLabel,
  query,
}) => {
  const pathname = usePathname();

  if (pathname == href && query) {
    return (
      <p
        className={twMerge(
          "hover:text-blue-100 transition-all duration-150 cursor-pointer",
          className
        )}
        onClick={() => {
          executeScroll({
            to: query,
          });
        }}
      >
        {children}
      </p>
    );
  }
  return (
    <Link
      href={{
        pathname: href,
        query: query
          ? {
              s: query,
            }
          : null,
      }}
      className={twMerge(
        "hover:text-blue-100 transition-all duration-150",
        className
      )}
      aria-label={ariaLabel}
    >
      {children}
    </Link>
  );
};

export default FooterLink;
