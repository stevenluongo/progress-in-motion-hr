import { FC } from "react";

export const MailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="inherit"
    width="inherit"
    height="inherit"
  >
    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
    <path
      d="M22.5 6.908V6.75a3 3 0 0
    0-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"
    />
  </svg>
);

export const PhotographIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="inherit"
    className="w-6 h-6"
  >
    <path
      fillRule="evenodd"
      d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
      clipRule="evenodd"
    />
  </svg>
);

export const VideoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="inherit"
    className="w-6 h-6"
  >
    <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z" />
  </svg>
);

export const ChevronLeftIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path
      fillRule="evenodd"
      d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
      clipRule="evenodd"
    />
  </svg>
);

export const ArrowSmDown = () => {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.2071 10.7929C15.5976 11.1834 15.5976 11.8166 15.2071 12.2071L11.2071 16.2071C10.8166 16.5976 10.1834 16.5976 9.79289 16.2071L5.79289 12.2071C5.40237 11.8166 5.40237 11.1834 5.79289 10.7929C6.18342 10.4024 6.81658 10.4024 7.20711 10.7929L9.5 13.0858V5.5C9.5 4.94772 9.94772 4.5 10.5 4.5C11.0523 4.5 11.5 4.94772 11.5 5.5L11.5 13.0858L13.7929 10.7929C14.1834 10.4024 14.8166 10.4024 15.2071 10.7929Z"
        fill="inherit"
      />
    </svg>
  );
};

export const ChevronRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path
      fillRule="evenodd"
      d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
      clipRule="evenodd"
    />
  </svg>
);

export type ButtonIconsLiteral =
  | "photograph"
  | "video"
  | "mail"
  | "chevronLeft"
  | "chevronRight"
  | "arrowDown";

type ButtonIconsType = {
  [key in ButtonIconsLiteral]: FC;
};

const ButtonIcons: ButtonIconsType = {
  photograph: () => <PhotographIcon />,
  video: () => <VideoIcon />,
  mail: () => <MailIcon />,
  chevronLeft: () => <ChevronLeftIcon />,
  chevronRight: () => <ChevronRightIcon />,
  arrowDown: () => <ArrowSmDown />,
};

export default ButtonIcons;
