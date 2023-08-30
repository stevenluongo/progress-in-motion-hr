import TextContainer from "@/components/text/text-container";
import TextHeadingPrimary from "@/components/text/text-heading-primary";
import Image from "next/image";
import TextBody from "@/components/text/text-body";
import ButtonPrimary from "@/components/button/button-primary";
import ContentWrapper from "@/components/content/content-wrapper";
import ContentPanel from "@/components/content/content-panel";
import ContentContainer from "@/components/content/content-container";
import TextHeadingSecondary from "@/components/text/text-heading-secondary";
import ImageWrapper from "@/components/image/image-wrapper";
import FeaturesItem from "@/components/features/features-item";
import FeaturesContainer from "@/components/features/features-container";
import { Element } from "react-scroll";

const MainLobby = () => {
  return (
    <Element name="main-lobby">
      <section className="py-[200px]">
        <ContentWrapper>
          <ContentContainer>
            <ContentPanel>
              <TextContainer>
                <TextHeadingPrimary number={3}>Main Lobby</TextHeadingPrimary>
                <TextBody>
                  26° North uncorks an intimate and artisanal experience for our
                  membership with seasonally sources ingredients.
                </TextBody>
                <ButtonPrimary scrollTo="main-lobby-discover">
                  Read More
                </ButtonPrimary>
              </TextContainer>
            </ContentPanel>
            <ContentPanel>
              <ImageWrapper>
                <Image
                  src="/header.jpeg"
                  alt="26 North Craft Kitchen"
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              </ImageWrapper>
            </ContentPanel>
          </ContentContainer>
          <Element name="main-lobby-discover">
            <ContentContainer reverse>
              <ContentPanel>
                <TextContainer>
                  <TextHeadingSecondary heading="2023 - 2024 Season">
                    Elevate your dining experience.
                  </TextHeadingSecondary>
                  <TextBody>
                    26° North uncorks an intimate and artisanal experience for
                    our membership with seasonally sources ingredients.
                  </TextBody>
                  <FeaturesContainer>
                    <FeaturesItem>More Driving Stations</FeaturesItem>
                    <FeaturesItem>More Driving Stations</FeaturesItem>
                    <FeaturesItem>More Driving Stations</FeaturesItem>
                    <FeaturesItem>More Driving Stations</FeaturesItem>
                    <FeaturesItem>More Driving Stations</FeaturesItem>
                  </FeaturesContainer>
                </TextContainer>
              </ContentPanel>
              <ContentPanel>
                <ImageWrapper>
                  <Image
                    src="/header.jpeg"
                    alt="26 North Craft Kitchen"
                    fill
                    sizes="100vw"
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </ImageWrapper>
              </ContentPanel>
            </ContentContainer>
          </Element>
        </ContentWrapper>
      </section>
    </Element>
  );
};

export default MainLobby;
