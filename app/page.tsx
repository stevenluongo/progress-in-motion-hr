"use client";

import Container from "@/components/layout/container";
import Button from "@/components/ui/button";
import { Body, Script } from "@/components/ui/typography";
import { Footer } from "@/components/footer";
import Hero from "./_/hero";
import TwentySixNorth from "./_/twenty-six-north";
import DrivingRange from "./_/driving-range";
import MainLobby from "./_/main-lobby";
import BarLounge from "./_/bar-lounge";
import EastCourse from "./_/east-course";
import MainDiningRoom from "./_/main-dining-room";
import ReactModal from "react-modal";

ReactModal.setAppElement('#root')

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
      <section className="py-24 bg-blue-100">
        <Container className="flex flex-col items-center gap-y-8">
          <Script>stay tuned</Script>
          <Body className="text-center max-w-[400px]">
            Join our newsletter and be informed of our news and exceptional new
            projects.
          </Body>
          <Button className="w-full xs:w-fit" icon="mail">
            Subscribe
          </Button>
        </Container>
      </section>
      <Footer />
    </>
  );
}
