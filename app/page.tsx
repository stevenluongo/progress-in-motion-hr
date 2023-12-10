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
  TitleLarge,
  TitleSmall,
} from "@/components/ui/typography";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <section className="h-screen grid place-items-center bg-black">
        <div className="w-full h-full bg-gradient-to-b from-[#0000005a] from-30% to-transparent z-[1] absolute top-0 left-0" />
        <Image
          src="/header.jpeg"
          alt="header"
          className="z-0"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        <TextContainer className="z-30 !items-center">
          <TitleLarge className="text-center text-white">
            Progress in
            <br /> Motion
          </TitleLarge>
          <Button light className="w-fit">
            explore
          </Button>
        </TextContainer>
      </section>
      <section>
        <Container className="py-24 sm:py-36 lg:py-48">
          <ContentWrapper>
            <TextContainer>
              <HeaderContainer>
                <Script>welcome</Script>
                <Title className="text-center md:text-start">26° North</Title>
              </HeaderContainer>
              <Body className="hidden lg:flex">
                Dining at 26° North Craft Kitchen will indeed be a feast for the
                senses. Here you&apos;ll find a carefully crafted menu
                complemented by hand-selected fine wines, craft cocktails and
                exceptional service.
              </Body>
              <Body className="text-center max-w-[500px] md:text-start lg:hidden">
                Dining at 26° North Craft Kitchen will indeed be a feast for the
                senses. Here you&apos;ll find a carefully crafted menu.
              </Body>
              <ButtonGroup>
                <Button className="w-full xs:w-fit" icon="photograph">
                  View Before
                </Button>
                <Button
                  className="hidden xs:flex md:hidden lg:flex"
                  secondary
                  icon="arrowDown"
                >
                  Learn More
                </Button>
              </ButtonGroup>
            </TextContainer>
            <div className="relative w-full h-[300px] xl:h-[340px] 2xl:h-[400px]">
              <Image
                src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                alt="placeholder"
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </div>
          </ContentWrapper>
          <ContentWrapper className="mt-24 sm:mt-36 lg:mt-48">
            <TextContainer className="md:order-2">
              <HeaderContainer>
                <ScriptSmall>elevate</ScriptSmall>
                <TitleSmall className="text-center md:text-start">
                  Your dining experience.
                </TitleSmall>
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
            <div className="relative w-full h-[300px] xl:h-[340px] 2xl:h-[400px] md:order-1">
              <div className="absolute w-full h-full md:h-[calc(100%+80px)] -bottom-10 md:bottom-0 md:-top-10 -left-10 bg-blue-100" />
              <Image
                src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                alt="placeholder"
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </div>
          </ContentWrapper>
          {/* <ContentWrapper className="mt-24 sm:mt-36 lg:mt-48">
            <div className="relative w-full h-full opacity-70">
              <div className="absolute w-full h-[calc(100%+80px)] -top-10 -left-10 bg-blue-100" />
              <Image
                src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                alt="placeholder"
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </div>
            <TextContainer>
              <HeaderContainer>
                <ScriptSmall>elevate</ScriptSmall>
                <TitleSmall>Your dining experience.</TitleSmall>
              </HeaderContainer>
              <Body>
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
          </ContentWrapper> */}
        </Container>
      </section>

      {/* <section className="py-48 bg-blue-100 overflow-hidden">
        <Container className="flex items-end">
          <ImageWrapper>
            <Image
              src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
              alt="placeholder"
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </ImageWrapper>
          <TextContainer className="w-1/2 box">
            <HeaderContainer>
              <Script>refreshed</Script>
              <Title>Driving Range</Title>
            </HeaderContainer>
            <Body>
              Get ready to tee off into a new era of golfing excellence as we
              embark on a journey to elevate your practice experience through
              the renovation of our Golf Driving Range.
            </Body>
            <ButtonGroup>
              <Button icon="video">Watch Video</Button>
              <Button secondary icon="arrowDown">
                Learn More
              </Button>
            </ButtonGroup>
          </TextContainer>
        </Container>

        <ContentWrapper className="container mx-auto px-4 py-48">
          <TextContainer>
            <HeaderContainer>
              <ScriptSmall>from</ScriptSmall>
              <TitleSmall>Drive to excellence.</TitleSmall>
            </HeaderContainer>
            <Body>
              The renovated Driving Range provides the ideal space to unleash
              your potential.
            </Body>
            <FeaturesGroup>
              <Features icon="tee">Increased Number of Tees</Features>
              <Features icon="drivingRange">More Driving Stations</Features>
              <Features icon="drainage">Improved Drainage</Features>
              <Features icon="target">Short & long range targets</Features>
            </FeaturesGroup>
          </TextContainer>
          <div className="relative w-full h-full opacity-70">
            <Image
              src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
              alt="placeholder"
              fill
            />
          </div>
        </ContentWrapper>
      </section> */}
    </>
  );
}

{
  /* <Container className="flex items-end mt-40">
          <TextContainer className="w-1/2 box">
            <HeaderContainer>
              <Script>refreshed</Script>
              <Title>Driving Range</Title>
            </HeaderContainer>
            <Body>
              Get ready to tee off into a new era of golfing excellence as we
              embark on a journey to elevate your practice experience through
              the renovation of our Golf Driving Range.
            </Body>
            <ButtonGroup>
              <Button icon="video">Watch Video</Button>
              <Button secondary icon="arrowDown">
                Learn More
              </Button>
            </ButtonGroup>
          </TextContainer>
          <ImageWrapper>
            <Image
              src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
              alt="placeholder"
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </ImageWrapper>
        </Container> */
}
