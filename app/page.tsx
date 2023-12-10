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
import Image from "@/components/ui/image";
import ImageBackground from "@/components/ui/image-background";

export default function Page() {
  return (
    <>
      {/* hero section */}
      <section>
        <Container className="h-screen grid place-items-center bg-black">
          <div className="w-full h-full bg-gradient-to-b from-[#0000005a] from-30% to-transparent z-[1] absolute top-0 left-0" />
          <Image src="/header.jpeg" alt="header" />
          <TextContainer className="z-30 !items-center">
            <TitleLarge className="!text-center text-white">
              Progress in
              <br /> Motion
            </TitleLarge>
            <Button light className="w-fit">
              explore
            </Button>
          </TextContainer>
        </Container>
      </section>

      {/* 26 North */}
      <section>
        <Container className="py-24 sm:py-36 lg:py-48">
          <ContentWrapper>
            <TextContainer>
              <HeaderContainer>
                <Script>welcome</Script>
                <Title>26° North</Title>
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
            <ImageWrapper>
              <Image
                src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                alt="placeholder"
              />
            </ImageWrapper>
          </ContentWrapper>
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
        </Container>
      </section>

      {/* Driving Range */}
      <section className="bg-gradient-to-t from-transparent via-blue-100 to-transparent">
        <Container className="py-24 sm:py-36 lg:py-48">
          <ContentWrapper>
            <TextContainer className="md:order-2">
              <HeaderContainer>
                <Script>refreshed</Script>
                <Title>Driving Range</Title>
              </HeaderContainer>
              <Body className="text-center max-w-[500px] md:text-start">
                Get ready to tee off into a new era of golfing excellence as we
                embark on a journey to elevate your practice experience through
                the renovation of our Golf Driving Range.
              </Body>
              <ButtonGroup>
                <Button className="w-full xs:w-fit" icon="video">
                  Watch Video
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
            <ImageWrapper className="md:order-1">
              <Image
                src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                alt="placeholder"
              />
            </ImageWrapper>
          </ContentWrapper>
          <ContentWrapper className="mt-24 sm:mt-36 lg:mt-48">
            <TextContainer>
              <HeaderContainer>
                <ScriptSmall>from</ScriptSmall>
                <TitleSmall>Drive to excellence.</TitleSmall>
              </HeaderContainer>
              <Body className="text-center max-w-[500px] md:text-start hidden lg:block">
                The renovated Driving Range provides the ideal space to unleash
                your potential.
              </Body>
              <FeaturesGroup>
                <Features icon="tee">Increased Tees</Features>
                <Features icon="drivingRange">More Driving Stations</Features>
                <Features icon="drainage">Improved Drainage</Features>
                <Features icon="target">Various Targets</Features>
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
        </Container>
      </section>

      {/* Main Lobby */}
      <section>
        <Container className="flex justify-center">
          <HeaderContainer className="!items-center">
            <Script>welcome</Script>
            <TitleSmall>A Warm Entrance Awaits</TitleSmall>
          </HeaderContainer>
        </Container>
        <div className="relative w-screen h-[800px] mt-12">
          <Image
            src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
            alt="placeholder"
          />
        </div>
        <Container className="py-24 sm:py-36 lg:py-48">
          <ContentWrapper>
            <TextContainer className="md:order-2">
              <HeaderContainer>
                <Script>reimagining the</Script>
                <Title>Main Lobby</Title>
              </HeaderContainer>
              <Body className="hidden lg:flex">
                A bright transformation is underway, as we re-imagine and
                refresh our current lobby space into a realm of quintessential
                warmth and unpretentious sophistication. As we refresh our
                lobby, we are also rejuvenating the heart of our club – a space
                where connections begin, and the future unfolds in the most
                graceful of ways.
              </Body>
              <Body className="text-center max-w-[500px] md:text-start lg:hidden">
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
        </Container>
      </section>

      {/* Bar Lounge */}
      <section>
        <Container className="py-24 sm:py-36 lg:py-48">
          <ContentWrapper>
            <TextContainer>
              <HeaderContainer>
                <Script>updating the</Script>
                <Title>Bar Lounge</Title>
              </HeaderContainer>
              <Body className="hidden lg:flex">
                Our Bar Lounge is more than just a place to unwind; it&apos;s a
                canvas of camaraderie, where conversations flow as freely as the
                libations. With the stroke of renovation magic, we are crafting
                a space that harmoniously blends modern touches with comfort.
              </Body>
              <Body className="text-center max-w-[500px] md:text-start lg:hidden">
                Our Bar Lounge is more than just a place to unwind.
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
            <ImageWrapper>
              <Image
                src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                alt="placeholder"
              />
            </ImageWrapper>
          </ContentWrapper>
          <ContentWrapper className="mt-24 sm:mt-36 lg:mt-48">
            <TextContainer className="md:order-2">
              <HeaderContainer>
                <ScriptSmall>sip</ScriptSmall>
                <TitleSmall>Savor and relax.</TitleSmall>
              </HeaderContainer>
              <Body className="text-center max-w-[500px] md:text-start hidden lg:block">
                The newly renovated Bar Lounge boasts a harmonious fusion of
                textures, colors, and furnishings that exude an air of casual
                elegance.
              </Body>
              <FeaturesGroup>
                <Features icon="barSeating">Additional Bar Seating</Features>
                <Features icon="furniture">Refreshed Upholstery</Features>
                <Features icon="light">Modern Lighting</Features>
                <Features icon="hostStand">Welcoming Host Station</Features>
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
        </Container>
      </section>

      {/* driving range */}

      {/* <section className="py-48 bg-blue-100 overflow-hidden">
        <Container className="flex items-end">
          <ImageWrapper>
            <Image
              src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
              alt="placeholder"
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
