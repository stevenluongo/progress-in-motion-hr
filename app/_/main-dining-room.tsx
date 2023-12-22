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

const MainDiningRoom = () => {
  return (
    <section>
      <Container className="py-24 sm:py-36 lg:py-48">
        <Element name="main-dining-room">
          <ContentWrapper>
            <TextContainer>
              <HeaderContainer>
                <Script>renewed</Script>
                <Title>Main Dining Room</Title>
              </HeaderContainer>
              <Body className="text-center max-w-[500px] md:text-start">
                The Main Dining Room has always been the heart of our culinary
                affairs, where flavors come to life and memories are made. With
                this refurbishment, we&apos;re not just upgrading the setting;
                we're crafting an event space that reflects the artistry of our
                Club and the warmth of our hospitality.
              </Body>
              <ButtonGroup>
                <Button className="w-full xs:w-fit" icon="photograph">
                  View Before
                </Button>
                <Button
                  className="hidden xs:flex md:hidden lg:flex"
                  secondary
                  icon="arrowDown"
                  onClick={() => executeScroll("main-dining-room-more")}
                >
                  Learn More
                </Button>
              </ButtonGroup>
            </TextContainer>
            <ImageWrapper>
              <Image
                src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                alt="placeholder"
              />
            </ImageWrapper>
          </ContentWrapper>
        </Element>
        <Element name="main-dining-room-more">
          <ContentWrapper className="mt-24 sm:mt-36 lg:mt-48">
            <TextContainer className="md:order-2">
              <HeaderContainer>
                <ScriptSmall>experience</ScriptSmall>
                <TitleSmall>A taste of tomorrow.</TitleSmall>
              </HeaderContainer>
              <Body className="text-center max-w-[500px] md:text-start hidden lg:block">
                Whether you&apos;re planning a grand celebration, a company
                gala, or a corporate meeting, our banquet space can be tailored
                to suit your needs. With flexible seating arrangements and
                state-of-the-art audiovisual equipment, we&apos;ve got you
                covered.
              </Body>
              <FeaturesGroup>
                <Features icon="window">Modern Furnishings</Features>
                <Features icon="light">Updated Lighting</Features>
                <Features icon="infrastructure">
                  Improved Infrastructure
                </Features>
                <Features icon="seating">New Seating</Features>
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

export default MainDiningRoom;
