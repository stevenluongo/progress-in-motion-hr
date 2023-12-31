import { Kumbh_Sans, Prata } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Navbar from "@/components/navbar";
import Head from "next/head";
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
      <Head>
        <title>
          Hunters Run | Progress in Motion - Discover Our Ongoing Projects
        </title>
        <meta
          name="description"
          key="desc"
          content="Explore the ongoing projects at Hunters Run Country Club, a premier lifestyle destination nestled in South Florida. With 54-holes of championship golf, 30 Racquet Sports' courts, a Fitness Center, 7 restaurants, and over 20 special interest clubs, our 1,649 residences offer endless opportunities for outdoor pursuits, dining, and socializing. Discover our progress in motion and join our vibrant community today."
        />
        <meta
          name="keywords"
          content="Hunters Run, Country Club, South Florida, Golf, Racquet Sports, Fitness Center, Restaurants, Special Interest Clubs, Residences, Outdoor Pursuits, Dining, Socializing"
        />
        <meta property="og:title" content="Hunters Run | Progress in Motion" />
        <meta
          property="og:description"
          content="Explore the ongoing projects at Hunters Run Country Club, a premier lifestyle destination nestled in South Florida. With 54-holes of championship golf, 30 Racquet Sports' courts, a Fitness Center, 7 restaurants, and over 20 special interest clubs, our 1,649 residences offer endless opportunities for outdoor pursuits, dining, and socializing. Discover our progress in motion and join our vibrant community today."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://progressinmotion.com" />
        <meta
          property="og:image"
          content="https://progress-in-motion.s3.amazonaws.com/26+North/26North1.jpg"
        />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1080" />
        <meta property="og:image:alt" content="26 North Restaurant" />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:site_name"
          content="Hunters Run | Progress in Motion"
        />
      </Head>
      <body
        className={`${kumbhSans.variable} ${prata.variable} ${adelia.variable}`}
      >
        <Navbar />

        {children}
      </body>
    </html>
  );
}
