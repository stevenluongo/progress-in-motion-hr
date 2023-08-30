import ChevronDown from "@/components/icons/chevron-down";
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

const BarLounge = () => {
  return (
    <section className="py-[200px]">
      <ContentWrapper>
        <ContentContainer reverse>
          <ContentPanel>
            <TextContainer>
              <TextHeadingPrimary number={4}>Bar Lounge</TextHeadingPrimary>
              <TextBody>
                26° North uncorks an intimate and artisanal experience for our
                membership with seasonally sources ingredients.
              </TextBody>
              <ButtonPrimary scrollTo="bar-lounge-discover">
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
        <Element name="bar-lounge-discover">
          <div className="grid gap-y-8">
            <TextHeadingSecondary heading="2023 - 2024 Season">
              Indulge in culinary excellence.
            </TextHeadingSecondary>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 h-[300px]">
              <div className="w-full h-full relative hidden md:block">
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
              </div>
              <div className="w-full relative max-h-[300px] hidden lg:block">
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
              </div>
              <div className="w-full h-ful relative">
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
              </div>
            </div>
          </div>
        </Element>
        <ContentContainer>
          <ContentPanel>
            <TextContainer>
              <TextHeadingSecondary>
                Sip, savor, and relax.
              </TextHeadingSecondary>
              <TextBody>
                26° North uncorks an intimate and artisanal experience for our
                membership with seasonally sources ingredients.
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
        <ChevronDown
          scrollTo="east-course"
          className="w-12 h-12 m-auto stroke-2 stroke-blue-800 cursor-pointer"
        />
      </ContentWrapper>
    </section>
  );
};

export default BarLounge;
