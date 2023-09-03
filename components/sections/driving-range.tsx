import ChevronDown from "@/components/icons/chevron-down";
import TextContainer from "@/components/text/text-container";
import TextHeadingPrimary from "@/components/text/text-heading-primary";
import React from "react";
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
import Image from "../image/full-image";
import ImageGrid from "../image/image-grid";

const DrivingRange = () => {
  return (
    <Element name="driving-range">
      <section className="py-[200px] bg-blue">
        <ContentWrapper>
          <ContentContainer reverse light={true}>
            <ContentPanel>
              <TextContainer>
                <TextHeadingPrimary number={2}>
                  Driving Range
                </TextHeadingPrimary>
                <TextBody>
                  Get ready to tee off into a new era of golfing excellence as
                  we embark on a journey to elevate your practice experience
                  through the renovation of our Golf Driving Range.
                </TextBody>
                <ButtonPrimary
                  light
                  scrollTo="driving-range-discover"
                  offset={-100}
                >
                  Read More
                </ButtonPrimary>
              </TextContainer>
            </ContentPanel>
            <ContentPanel>
              <ImageWrapper>
                <Image
                  src="/driving-range/range_upscaled.png"
                  alt="26 North Craft Kitchen"
                />
              </ImageWrapper>
            </ContentPanel>
          </ContentContainer>
          <Element name="driving-range-discover">
            <div className="grid gap-y-8">
              <TextHeadingSecondary heading="2023 - 2024 Season" light={true}>
                From drive to excellence.
              </TextHeadingSecondary>
              <div className="h-[300px]">
                <ImageWrapper full light={true}>
                  <Image
                    src="/driving-range/range_upscaled.png"
                    alt="26 North Craft Kitchen"
                  />
                </ImageWrapper>
              </div>
            </div>
          </Element>
          <ContentContainer light={true}>
            <ContentPanel>
              <TextContainer>
                <TextHeadingSecondary>Teeing up tomorrow.</TextHeadingSecondary>
                <TextBody>
                  Whether you&apos;re fine-tuning your technique or just
                  starting your golfing journey, the renovated Driving Range
                  provides the ideal space to unleash your potential.
                </TextBody>
                <FeaturesContainer>
                  <FeaturesItem>More driving stations</FeaturesItem>
                  <FeaturesItem>Short & long range targets</FeaturesItem>
                  <FeaturesItem>Increased number of tees</FeaturesItem>
                  <FeaturesItem>Covered tee stations</FeaturesItem>
                  <FeaturesItem>New Infrastructure</FeaturesItem>
                  <FeaturesItem>Improved drainage</FeaturesItem>
                </FeaturesContainer>
              </TextContainer>
            </ContentPanel>
            <ContentPanel>
              <ImageGrid>
                <ImageWrapper light={true}>
                  <Image
                    src="/driving-range/ball.png"
                    alt="26 North Craft Kitchen"
                  />
                </ImageWrapper>
                <ImageWrapper light={true}>
                  <Image
                    src="/driving-range/swing.JPG"
                    alt="26 North Craft Kitchen"
                  />
                </ImageWrapper>
              </ImageGrid>
            </ContentPanel>
          </ContentContainer>
          <ChevronDown
            scrollTo="main-lobby"
            className="w-12 h-12 m-auto stroke-2 stroke-white cursor-pointer"
          />
        </ContentWrapper>
      </section>
    </Element>
  );
};

export default DrivingRange;
