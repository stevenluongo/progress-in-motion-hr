import Image from "next/legacy/image";
import ButtonPrimary from "../button/button-primary";
import ContentContainer from "../content/content-container";
import ContentPanel from "../content/content-panel";
import ContentWrapper from "../content/content-wrapper";
import ImageWrapper from "../image/image-wrapper";
import TextBody from "../text/text-body";
import TextContainer from "../text/text-container";
import TextHeadingPrimary from "../text/text-heading-primary";
import TextHeadingSecondary from "../text/text-heading-secondary";
import FeaturesContainer from "../features/features-container";
import FeaturesItem from "../features/features-item";
import ChevronDown from "../icons/chevron-down";

const TwentySixNorth = () => {
  return (
    <section className="py-[200px]">
      <ContentWrapper>
        <ContentContainer>
          <ContentPanel>
            <TextContainer>
              <TextHeadingPrimary number={1}>
                26° NORTH
                <br /> CRAFT KITCHEN
              </TextHeadingPrimary>
              <TextBody>
                At 26° North, you’ll find a carefully crafted menu complemented
                by hand-selected fine wines, craft cocktails and exceptional
                service.
              </TextBody>
              <ButtonPrimary>Read More</ButtonPrimary>
            </TextContainer>
          </ContentPanel>
          <ContentPanel>
            <ImageWrapper>
              <Image
                src="/header.jpeg"
                layout="fill"
                alt="26 North Craft Kitchen"
                objectFit="cover"
                objectPosition="center"
              />
            </ImageWrapper>
          </ContentPanel>
        </ContentContainer>
        <div className="grid gap-y-8">
          <TextHeadingSecondary heading="2023 - 2024 Season">
            Indulge in culinary excellence.
          </TextHeadingSecondary>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 h-[300px]">
            <div className="w-full h-full relative hidden md:block">
              <Image
                src="/header.jpeg"
                alt="26 North Craft Kitchen"
                objectFit="cover"
                objectPosition="center"
                layout="fill"
              />
            </div>
            <div className="w-full relative max-h-[300px] hidden lg:block">
              <Image
                src="/header.jpeg"
                alt="26 North Craft Kitchen"
                objectFit="cover"
                objectPosition="center"
                layout="fill"
              />
            </div>
            <div className="w-full h-ful relative">
              <Image
                src="/header.jpeg"
                alt="26 North Craft Kitchen"
                objectFit="cover"
                objectPosition="center"
                layout="fill"
              />
            </div>
          </div>
        </div>
        <ContentContainer reverse>
          <ContentPanel>
            <TextContainer>
              <TextHeadingSecondary>
                Elevate your dining experience.
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
                layout="fill"
                alt="26 North Craft Kitchen"
                objectFit="cover"
                objectPosition="center"
              />
            </ImageWrapper>
          </ContentPanel>
        </ContentContainer>
        <ChevronDown className="w-12 h-12 m-auto stroke-2 stroke-blue-800 cursor-pointer" />
      </ContentWrapper>
    </section>
  );
};

export default TwentySixNorth;
