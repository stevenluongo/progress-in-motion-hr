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
import { useAnimationInView } from "@/hooks/useAnimationInView";
import { MotionBody, MotionButtonGroup, MotionHeaderContainer } from "@/components/motion";
import { translateY } from "@/utils/variants";

const TwentySixNorth = () => {
  const { ref, controls } = useAnimationInView(500);
  return (
    <section>
      <Container className="py-24 sm:py-36 lg:py-48">
        <Element name="twenty-six-north">
          <ContentWrapper ref={ref}>
            <TextContainer>
              <MotionHeaderContainer animate={controls} variants={translateY(0)} initial="initial">
                <Script>welcome</Script>
                <Title>26° North</Title>
              </MotionHeaderContainer>
              <MotionBody className="hidden lg:flex" animate={controls} variants={translateY(0.25)} initial="initial">
                Dining at 26° North Craft Kitchen will indeed be a feast for the
                senses. Here you&apos;ll find a carefully crafted menu
                complemented by hand-selected fine wines, craft cocktails and
                exceptional service.
              </MotionBody>
              <MotionBody className="text-center max-w-[500px] md:text-start lg:hidden" animate={controls} variants={translateY(0.25)} initial="initial">
                Dining at 26° North Craft Kitchen will indeed be a feast for the
                senses. Here you&apos;ll find a carefully crafted menu.
              </MotionBody>
              <MotionButtonGroup animate={controls} variants={translateY(0.5)} initial="initial">
                <Button className="w-full xs:w-fit" icon="photograph">
                  View Before
                </Button>
                <Button
                  className="hidden xs:flex md:hidden lg:flex"
                  secondary
                  icon="arrowDown"
                  onClick={() => executeScroll("twenty-six-north-more")}
                >
                  Learn More
                </Button>
              </MotionButtonGroup>
            </TextContainer>
            <ImageWrapper>
              <Image
                src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                alt="placeholder"
              />
            </ImageWrapper>
          </ContentWrapper>
        </Element>
        <Element name="twenty-six-north-more">
          <ContentWrapper className="mt-24 sm:mt-36 lg:mt-48">
            <TextContainer className="md:order-2">
              <HeaderContainer>
                <ScriptSmall>elevate</ScriptSmall>
                <TitleSmall>Your dining experience.</TitleSmall>
              </HeaderContainer>
              <Body className="text-center max-w-[500px] md:text-start hidden lg:block">
                26° North uncorks an intimate and artisanal experience for our
                membership with seasonally sourced ingredients.
              </Body>
              <FeaturesGroup>
                <Features icon="drinks">Craft Cocktails</Features>
                <Features icon="outdoorSeating">Outdoor Seating</Features>
                <Features icon="service">Attentive Service</Features>
                <Features icon="candle">Intimate Ambiance</Features>
              </FeaturesGroup>
            </TextContainer>
            <ImageWrapper className="md:order-1">
              <ImageBackground />
              <Image
                src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                alt="placeholder"
              />
            </ImageWrapper>
          </ContentWrapper>
        </Element>
      </Container>
    </section>
  );
};

export default TwentySixNorth;
