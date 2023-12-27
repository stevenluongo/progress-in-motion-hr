"use client";

import Container from "@/components/layout/container";
import ContentWrapper from "@/components/layout/content-wrapper";
import FeaturesGroup from "@/components/layout/features-group";
import Button from "@/components/ui/button";
import ButtonGroup from "@/components/ui/button-group";
import Features from "@/components/ui/features";
import HeaderContainer from "@/components/layout/header-container";
import ImageWrapper from "@/components/ui/image-wrapper";
import TextContainer from "@/components/layout/text-container";
import {
  Body,
  Script,
  ScriptSmall,
  Title,
  TitleSmall,
} from "@/components/ui/typography";
import Image from "@/components/ui/image";
import ImageBackground from "@/components/ui/image-background";
import { Element } from "react-scroll";
import { executeScroll } from "@/utils/scroll";

const BarLounge = () => {
  return (
    <section>
      <Container className="py-24 sm:py-36 lg:py-48">
        <Element name="bar-lounge">
          <ContentWrapper>
            <TextContainer>
              <HeaderContainer>
                <Script>updating the</Script>
                <Title>Bar Lounge</Title>
              </HeaderContainer>
              <Body className="hidden lg:flex">
                Our Bar Lounge is more than just a place to unwind; it&apos;s a
                canvas of camaraderie, where conversations flow as freely as the
                libations. With the stroke of renovation magic, we are crafting
                a space that harmoniously blends modern touches with comfort.
              </Body>
              <Body className="text-center max-w-[500px] md:text-start lg:hidden">
                Our Bar Lounge is more than just a place to unwind.
              </Body>
              <ButtonGroup>
                <Button className="w-full xs:w-fit" icon="photograph">
                  View Before
                </Button>
                <Button
                  className="hidden xs:flex md:hidden lg:flex"
                  secondary
                  icon="arrowDown"
                  onClick={() => executeScroll("bar-lounge-more")}
                >
                  Learn More
                </Button>
              </ButtonGroup>
            </TextContainer>
            <ImageWrapper>
              <Image
                src="https://progress-in-motion.s3.amazonaws.com/Bar+Lounge/Bar4.jpg"
                alt="placeholder"
              />
            </ImageWrapper>
          </ContentWrapper>
        </Element>
        <Element name="bar-lounge-more">
          <ContentWrapper className="mt-24 sm:mt-36 lg:mt-48">
            <TextContainer className="md:order-2">
              <HeaderContainer>
                <ScriptSmall>sip</ScriptSmall>
                <TitleSmall>Savor and relax.</TitleSmall>
              </HeaderContainer>
              <Body className="text-center max-w-[500px] md:text-start hidden lg:block">
                The newly renovated Bar Lounge boasts a harmonious fusion of
                textures, colors, and furnishings that exude an air of casual
                elegance.
              </Body>
              <FeaturesGroup>
                <Features icon="barSeating">Additional Bar Seating</Features>
                <Features icon="furniture">Refreshed Upholstery</Features>
                <Features icon="light">Modern Lighting</Features>
                <Features icon="hostStand">Welcoming Host Station</Features>
              </FeaturesGroup>
            </TextContainer>
            <ImageWrapper className="md:order-1">
              <ImageBackground />
              <Image
                src="https://progress-in-motion.s3.amazonaws.com/Bar+Lounge/Bar10.jpg"
                alt="placeholder"
              />
            </ImageWrapper>
          </ContentWrapper>
        </Element>
      </Container>
    </section>
  );
};

export default BarLounge;
