import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

type SocialMediaIconProps = {
  icon: IconProp;
  href: string;
  ariaLabel: string;
};

const SocialMediaIcon: React.FC<SocialMediaIconProps> = ({
  icon,
  href,
  ariaLabel,
}) => {
  return (
    <Link
      target="_blank"
      href={href}
      aria-label={ariaLabel}
      className="cursor-pointer hover:text-blue-100 transition-all duration-150"
    >
      <FontAwesomeIcon icon={icon} />
    </Link>
  );
};

export default SocialMediaIcon;
