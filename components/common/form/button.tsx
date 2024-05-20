import { faEnvelope, faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { twMerge } from "tailwind-merge";

type FormButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  children: React.ReactNode;
};

export default function FormButton({
  type,
  children,
  className,
  ...props
}: FormButtonProps) {
  return (
    <button className="mt-4 group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-sm border border-blue-primary px-6 font-medium text-blue-primary duration-1000">
      <div className="translate-x-0 opacity-100 transition duration-300 group-hover:-translate-x-[150%] group-hover:opacity-0 text-[10px] uppercase font-kumbh font-semibold tracking-[.25rem] flex items-center gap-x-4">
        Send Message
        <FontAwesomeIcon icon={faEnvelope} />
      </div>
      <div className="absolute translate-x-[150%] opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100">
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
        >
          <path
            d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
    </button>
  );
}
