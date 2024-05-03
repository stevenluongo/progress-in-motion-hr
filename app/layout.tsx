import { Kumbh_Sans, Prata } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Analytics } from "@vercel/analytics/react";
import Modal from "@/components/modal";
import VideoModal from "@/components/video-modal";
import { Suspense } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://progresshuntersrun.net"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  title: "Hunters Run | Progress in Motion",
  description:
    "Explore the ongoing projects at Hunters Run Country Club, a premier lifestyle destination nestled in South Florida. With 54-holes of championship golf, 30 Racquet Sports' courts, a Fitness Center, 7 restaurants, and over 20 special interest clubs, our 1,649 residences offer endless opportunities for outdoor pursuits, dining, and socializing. Discover our progress in motion and join our vibrant community today.",
  keywords:
    "Hunters Run, Country Club, South Florida, Golf, Racquet Sports, Fitness Center, Restaurants, Special Interest Clubs, Residences, Outdoor Pursuits, Dining, Socializing",
  openGraph: {
    title: "Hunters Run | Progress in Motion",
    description:
      "Explore the ongoing projects at Hunters Run Country Club, a premier lifestyle destination nestled in South Florida. With 54-holes of championship golf, 30 Racquet Sports' courts, a Fitness Center, 7 restaurants, and over 20 special interest clubs, our 1,649 residences offer endless opportunities for outdoor pursuits, dining, and socializing. Discover our progress in motion and join our vibrant community today.",
    type: "website",
    url: "https:/progresshuntersrun.net",
    images: [
      {
        url: "https://progress-in-motion.s3.amazonaws.com/26+North/26North1.jpg",
        width: 1920,
        height: 1080,
        alt: "26 North Restaurant",
        type: "image/jpeg",
      },
    ],
    siteName: "Hunters Run | Progress in Motion",
    locale: "en_US",
  },
  icons: {
    icon: [
      { url: "/icon.png" },
      { url: "/icon-dark.png", media: "(prefers-color-scheme: dark)" },
    ],
    shortcut: ["/shortcut-icon.png"],
    apple: [
      { url: "/apple-icon.png" },
      { url: "/apple-icon-x3.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-touch-icon-precomposed.png",
      },
    ],
  },
};

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
        {children}
        <Modal />
        <VideoModal />
        <Analytics />
        {/* Since footer uses searchParams, we need  to wrap it in a suspense */}
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </body>
      <GoogleAnalytics gaId="G-969T1JLGG1" />
    </html>
  );
}
