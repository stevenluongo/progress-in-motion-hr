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

const DrivingRange = () => {
  return (
    <section className="bg-gradient-to-t from-transparent via-blue-100 to-transparent">
      <Container className="py-24 sm:py-36 lg:py-48">
        <Element name="driving-range">
          <ContentWrapper>
            <TextContainer className="md:order-2">
              <HeaderContainer>
                <Script>refreshed</Script>
                <Title>Driving Range</Title>
              </HeaderContainer>
              <Body className="text-center max-w-[500px] md:text-start">
                Get ready to tee off into a new era of golfing excellence as we
                embark on a journey to elevate your practice experience through
                the renovation of our Golf Driving Range.
              </Body>
              <ButtonGroup>
                <Button className="w-full xs:w-fit" icon="video">
                  Watch Video
                </Button>
                <Button
                  className="hidden xs:flex md:hidden lg:flex"
                  secondary
                  icon="arrowDown"
                  onClick={() => executeScroll("driving-range-more")}
                >
                  Learn More
                </Button>
              </ButtonGroup>
            </TextContainer>
            <ImageWrapper className="md:order-1">
              <Image
                src="https://progress-in-motion.s3.amazonaws.com/Driving+Range/greens.png"
                alt="Image of golf course"
              />
            </ImageWrapper>
          </ContentWrapper>
        </Element>
        <Element name="driving-range-more">
          <ContentWrapper className="mt-24 sm:mt-36 lg:mt-48">
            <TextContainer>
              <HeaderContainer>
                <ScriptSmall>from</ScriptSmall>
                <TitleSmall>Drive to excellence.</TitleSmall>
              </HeaderContainer>
              <Body className="text-center max-w-[500px] md:text-start hidden lg:block">
                The renovated Driving Range provides the ideal space to unleash
                your potential.
              </Body>
              <FeaturesGroup>
                <Features icon="tee">Increased Tees</Features>
                <Features icon="drivingRange">More Driving Stations</Features>
                <Features icon="drainage">Improved Drainage</Features>
                <Features icon="target">Various Targets</Features>
              </FeaturesGroup>
            </TextContainer>
            <ImageWrapper>
              <ImageBackground />
              <Image
                src="https://progress-in-motion.s3.amazonaws.com/Driving+Range/ball.png"
                alt="Close up picture of a golf ball"
              />
            </ImageWrapper>
          </ContentWrapper>
        </Element>
      </Container>
    </section>
  );
};

export default DrivingRange;
