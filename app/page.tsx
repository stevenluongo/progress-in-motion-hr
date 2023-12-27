import Container from "@/components/layout/container";
import Button from "@/components/ui/button";
import { Body, Script } from "@/components/ui/typography";
import { Footer } from "@/components/footer";
import Hero from "./_assets/hero";
import TwentySixNorth from "./_assets/twenty-six-north";
import DrivingRange from "./_assets/driving-range";
import MainLobby from "./_assets/main-lobby";
import BarLounge from "./_assets/bar-lounge";
import EastCourse from "./_assets/east-course";
import MainDiningRoom from "./_assets/main-dining-room";

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
