import type { Preview } from "@storybook/react";
import * as React from "react";
import { Kumbh_Sans, Prata } from "next/font/google";
import "../app/globals.css";

const kumbhSans = Kumbh_Sans({ subsets: ["latin"], variable: "--font-kumbh" });
const prata = Prata({
  subsets: ["latin"],
  variable: "--font-prata",
  weight: ["400"],
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className={` ${kumbhSans.variable} ${prata.variable}`}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
