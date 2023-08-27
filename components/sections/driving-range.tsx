import ChevronDown from "@/components/icons/chevron-down";
import TextContainer from "@/components/text/text-container";
import TextHeadingPrimary from "@/components/text/text-heading-primary";
import Image from "next/image";
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

const DrivingRange = () => {
  return (
    <section className="py-[200px] bg-blue">
      <ContentWrapper>
        <ContentContainer reverse light>
          <ContentPanel>
            <TextContainer>
              <TextHeadingPrimary number={2}>Driving Range</TextHeadingPrimary>
              <TextBody>
                26° North uncorks an intimate and artisanal experience for our
                membership with seasonally sources ingredients.
              </TextBody>
              <ButtonPrimary>Read More</ButtonPrimary>
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
                  objectPosition: "center"
                }} />
            </ImageWrapper>
          </ContentPanel>
        </ContentContainer>
        <div className="grid gap-y-8">
          <TextHeadingSecondary heading="2023 - 2024 Season" light>
            Indulge in culinary excellence.
          </TextHeadingSecondary>
          <div className="h-[300px]">
            <ImageWrapper full light>
              <Image
                src="/header.jpeg"
                alt="26 North Craft Kitchen"
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover",
                  objectPosition: "center"
                }} />
            </ImageWrapper>
          </div>
        </div>
        <ContentContainer light>
          <ContentPanel>
            <TextContainer>
              <TextHeadingSecondary>Teeing up tomorrow.</TextHeadingSecondary>
              <TextBody>
                Whether you&apos;re fine-tuning your technique or just starting
                your golfing journey, the renovated Driving Range provides the
                ideal space to unleash your potential.
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
                  objectPosition: "center"
                }} />
            </ImageWrapper>
          </ContentPanel>
        </ContentContainer>
        <ChevronDown className="w-12 h-12 m-auto stroke-2 stroke-white cursor-pointer" />
      </ContentWrapper>
    </section>
  );
};

export default DrivingRange;
