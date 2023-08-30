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
import Image from "../image/full-image";
import { Element } from "react-scroll";

const TwentySixNorth = () => {
  return (
    <Element name="twenty-six-north">
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
                  Dining at 26° North will indeed be a feast for the senses.
                  Here you&apos;ll find a carefully crafted menu complemented by
                  hand-selected fine wines, craft cocktails and exceptional
                  service.
                </TextBody>
                <ButtonPrimary scrollTo="twenty-six-north-discover">
                  Read More
                </ButtonPrimary>
              </TextContainer>
            </ContentPanel>
            <ContentPanel>
              <ImageWrapper>
                <Image
                  src="/twenty-six-north/host.jpg"
                  alt="26 North Craft Kitchen"
                />
              </ImageWrapper>
            </ContentPanel>
          </ContentContainer>
          <Element name="twenty-six-north-discover">
            <div className="grid gap-y-8">
              <TextHeadingSecondary heading="2023 - 2024 Season">
                Indulge in culinary excellence.
              </TextHeadingSecondary>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 h-[300px]">
                <div className="w-full h-full relative hidden md:block">
                  <Image
                    src="/twenty-six-north/food_1.JPEG"
                    alt="26 North Craft Kitchen"
                  />
                </div>
                <div className="w-full relative max-h-[300px] hidden lg:block">
                  <Image
                    src="/twenty-six-north/cheers.jpg"
                    alt="26 North Craft Kitchen"
                  />
                </div>
                <div className="w-full h-ful relative">
                  <Image
                    src="/twenty-six-north/food_2.JPEG"
                    alt="26 North Craft Kitchen"
                  />
                </div>
              </div>
            </div>
          </Element>

          <ContentContainer reverse>
            <ContentPanel>
              <TextContainer>
                <TextHeadingSecondary>
                  Elevate your dining experience.
                </TextHeadingSecondary>
                <TextBody>
                  26° North uncorks an intimate and artisanal experience for our
                  membership with seasonally sourced ingredients.
                </TextBody>
                <FeaturesContainer>
                  <FeaturesItem>Sophisticated restaurant</FeaturesItem>
                  <FeaturesItem>Attentive service</FeaturesItem>
                  <FeaturesItem>Covered outdoor seating</FeaturesItem>
                  <FeaturesItem>Craft cocktails</FeaturesItem>
                  <FeaturesItem>Intimate ambiance</FeaturesItem>
                </FeaturesContainer>
              </TextContainer>
            </ContentPanel>
            <ContentPanel>
              <ImageWrapper>
                <Image
                  src="/twenty-six-north/bar.jpg"
                  alt="26 North Craft Kitchen"
                />
              </ImageWrapper>
            </ContentPanel>
          </ContentContainer>
          <ChevronDown
            scrollTo="driving-range"
            className="w-12 h-12 m-auto stroke-2 stroke-blue-800 cursor-pointer"
          />
        </ContentWrapper>
      </section>
    </Element>
  );
};

export default TwentySixNorth;
