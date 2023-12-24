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

const MainLobby = () => {
  return (
    <section>
      <Container className="flex justify-center">
        <HeaderContainer className="!items-center">
          <Script>welcome</Script>
          <TitleSmall>A Warm Entrance Awaits</TitleSmall>
        </HeaderContainer>
      </Container>
      <div className="relative max-w-screen h-[800px] mt-12">
        <Image
          src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
          alt="placeholder"
        />
      </div>
      <Container className="py-24 sm:py-36 lg:py-48 box-border">
        <Element name="main-lobby">
          <ContentWrapper>
            <TextContainer className="md:order-2">
              <HeaderContainer>
                <Script>reimagining the</Script>
                <Title>Main Lobby</Title>
              </HeaderContainer>
              <Body className="text-center max-w-[500px] md:text-start">
                A bright transformation is underway, as we re-imagine and
                refresh our current lobby space into a realm of quintessential
                warmth and unpretentious sophistication.
              </Body>
              <ButtonGroup>
                <Button className="w-full xs:w-fit" icon="photograph">
                  View Before
                </Button>
                <Button
                  className="hidden xs:flex md:hidden lg:flex"
                  secondary
                  icon="arrowDown"
                  onClick={() => executeScroll("main-lobby-more")}
                >
                  Learn More
                </Button>
              </ButtonGroup>
            </TextContainer>
            <ImageWrapper className="md:order-1">
              <Image
                src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                alt="placeholder"
              />
            </ImageWrapper>
          </ContentWrapper>
        </Element>
        <Element name="main-lobby-more">
          <ContentWrapper className="mt-24 sm:mt-36 lg:mt-48">
            <TextContainer>
              <HeaderContainer>
                <ScriptSmall>elevating</ScriptSmall>
                <TitleSmall>Warmth and Beauty.</TitleSmall>
              </HeaderContainer>
              <Body className="text-center max-w-[500px] md:text-start hidden lg:block">
                Witness the convergence of aesthetics and functionality, where
                each element is thoughtfully chosen to create an ambiance that
                greets our members and guests with familiarity.
              </Body>
              <FeaturesGroup>
                <Features icon="bright">Bright, Inviting Atmosphere</Features>
                <Features icon="connections">Multiple Meeting Spaces</Features>
                <Features icon="hostStand">Dedicated Reception Desk</Features>
                <Features icon="tech">Communal, Tech Table</Features>
              </FeaturesGroup>
            </TextContainer>
            <ImageWrapper>
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

export default MainLobby;
