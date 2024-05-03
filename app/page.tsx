import Hero from "./sections/hero";
import TwentySixNorth from "./sections/twenty-six-north";
import DrivingRange from "./sections/driving-range";
import MainLobby from "./sections/main-lobby";
import BarLounge from "./sections/bar-lounge";
import EastCourse from "./sections/east-course";
import MainDiningRoom from "./sections/main-dining-room";
import CallToAction from "./sections/call-to-action";
import Navbar from "@/components/navbar";
import Fitness from "./sections/fitness";

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Fitness />
      <DrivingRange />
      <TwentySixNorth />
      <MainLobby />
      <BarLounge />
      <EastCourse />
      <MainDiningRoom />
      <CallToAction />
    </>
  );
}
