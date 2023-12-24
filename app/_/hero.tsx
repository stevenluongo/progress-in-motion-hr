"use client";

import Container from "@/components/layout/container";
import Button from "@/components/ui/button";
import TextContainer from "@/components/layout/text-container";
import { TitleLarge } from "@/components/ui/typography";
import Image from "@/components/ui/image";
import { Element } from "react-scroll";
import { executeScroll } from "@/utils/scroll";

const Hero = () => {
  return (
    <Element name="hero">
      <Container className="h-screen grid place-items-center bg-black">
        <div className="w-full h-full bg-gradient-to-b from-[#0000005a] z-10 from-30% to-transparent absolute top-0 left-0" />
        <Image src="/header.jpeg" alt="header" />
        <TextContainer className="z-20 !items-center">
          <TitleLarge className="!text-center text-white">
            Progress in
            <br /> Motion
          </TitleLarge>
          <Button
            onClick={() => executeScroll("twenty-six-north")}
            light
            className="w-fit"
          >
            explore
          </Button>
        </TextContainer>
      </Container>
    </Element>
  );
};

export default Hero;
