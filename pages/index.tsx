import Hero from "@/components/sections/hero";
import TwentySixNorth from "@/components/sections/twenty-six-north";
import DrivingRange from "@/components/sections/driving-range";
import MainLobby from "@/components/sections/main-lobby";
import BarLounge from "@/components/sections/bar-lounge";
import EastCourse from "@/components/sections/east-course";
import MainDiningRoom from "@/components/sections/main-dining.room";
import { useEffect, useRef, useState } from "react";
import LoadingBar from "react-top-loading-bar";
import Head from "next/head";

export default function Landing() {
  const [show, setShow] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    ref.current.continuousStart();
    const image = document.createElement("img");
    image.src = "/header.jpeg";
    image.onload = () => {
      ref.current.complete();
      setShow(true);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Progress in Motion | Hunters Run</title>
        <meta name="description" content="Hunters Run" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LoadingBar color="#89CDDC" ref={ref} />
      {show ? (
        <>
          <Hero />
          <TwentySixNorth />
          <DrivingRange />
          <MainLobby />
          <BarLounge />
          <EastCourse />
          <MainDiningRoom />
        </>
      ) : null}
    </>
  );
}
