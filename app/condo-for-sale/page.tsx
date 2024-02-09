import ContactSection from "./sections/contact";
import Hero from "./sections/hero";
import Overview from "./sections/overview";
import VideoSection from "./sections/video";
import CondoNavbar from "@/components/condo-navbar";

export default function Page() {
  return (
    <>
      <CondoNavbar />
      <Hero />
      <Overview />
      <VideoSection />
      <ContactSection/>
    </>
  );
}
