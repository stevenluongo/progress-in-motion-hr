"use client";

import Container from "@/components/layout/container";
import Button from "@/components/ui/button";
import TextContainer from "@/components/layout/text-container";
import { TitleLarge } from "@/components/ui/typography";
import Image from "@/components/ui/image";
import { Element } from "react-scroll";

const Hero = () => {
  return (
    <Element name="hero">
      <Container className="h-screen grid place-items-center bg-black">
        <div className="w-full h-full bg-gradient-to-b from-[#0000005a] from-30% to-transparent z-[1] absolute top-0 left-0" />
        <Image src="/header.jpeg" alt="header" />
        <TextContainer className="z-30 !items-center">
          <TitleLarge className="!text-center text-white">
            Progress in
            <br /> Motion
          </TitleLarge>
          <Button light className="w-fit">
            explore
          </Button>
        </TextContainer>
      </Container>
    </Element>
  );
};

export default Hero;
