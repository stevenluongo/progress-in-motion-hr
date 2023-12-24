import { Kumbh_Sans, Prata } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Navbar from "@/components/navbar";
config.autoAddCss = false;


const adelia = localFont({
  src: "../public/adelia.woff2",
  variable: "--font-adelia",
});
const kumbhSans = Kumbh_Sans({ subsets: ["latin"], variable: "--font-kumbh" });
const prata = Prata({
  subsets: ["latin"],
  variable: "--font-prata",
  weight: ["400"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" id="root">
      <body
        className={`${kumbhSans.variable} ${prata.variable} ${adelia.variable}`}
      >
        <Navbar />

        {children}
      </body>
    </html>
  );
}
