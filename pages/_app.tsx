import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins, Prata } from "next/font/google";

const prata = Prata({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-prata",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-poppins",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${prata.variable} ${poppins.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
