import Hero from "@/components/sections/hero";
import TwentySixNorth from "@/components/sections/twenty-six-north";
import DrivingRange from "@/components/sections/driving-range";
import MainLobby from "@/components/sections/main-lobby";
import BarLounge from "@/components/sections/bar-lounge";
import EastCourse from "@/components/sections/east-course";
import MainDiningRoom from "@/components/sections/main-dining.room";

export default function Landing() {
  return (
    <>
      <Hero />
      <TwentySixNorth />
      <DrivingRange />
      <MainLobby />
      <BarLounge />
      <EastCourse />
      <MainDiningRoom />
    </>
  );
}
