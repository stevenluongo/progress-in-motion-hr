import { Footer } from "@/components/footer";
import Hero from "./_assets/hero";
import TwentySixNorth from "./_assets/twenty-six-north";
import DrivingRange from "./_assets/driving-range";
import MainLobby from "./_assets/main-lobby";
import BarLounge from "./_assets/bar-lounge";
import EastCourse from "./_assets/east-course";
import MainDiningRoom from "./_assets/main-dining-room";
import CallToAction from "./_assets/call-to-action";
import Modal from "./_assets/modal";

export const metadata = {
  title: "Hunters Run | Progress in Motion",
  description:
    "Explore the ongoing projects at Hunters Run Country Club, a premier lifestyle destination nestled in South Florida. With 54-holes of championship golf, 30 Racquet Sports' courts, a Fitness Center, 7 restaurants, and over 20 special interest clubs, our 1,649 residences offer endless opportunities for outdoor pursuits, dining, and socializing. Discover our progress in motion and join our vibrant community today.",
};

export default function Page() {
  return (
    <>
      <Hero />
      <TwentySixNorth />
      <DrivingRange />
      <MainLobby />
      <BarLounge />
      <EastCourse />
      <MainDiningRoom />
      <CallToAction />
      <Footer />
      <Modal />
    </>
  );
}
