"use client";

import Container from "@/components/layout/container";
import ContentWrapper from "@/components/layout/content-wrapper";
import FeaturesGroup from "@/components/layout/features-group";
import Button from "@/components/ui/button";
import Features from "@/components/ui/features";
import HeaderContainer from "@/components/layout/header-container";
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
import { useAnimationInView } from "@/hooks/useAnimationInView";
import {
  MotionBody,
  MotionButtonGroup,
  MotionHeaderContainer,
  MotionImageWrapper,
  MotionTextContainer,
} from "@/components/motion";
import { translateX, translateY } from "@/utils/variants";
import { useModalStore } from "@/lib/store";

const BarLounge = () => {
  const { ref, controls } = useAnimationInView({
    margin: "-150px -150px",
    delay: 750,
  });
  const { ref: ref2, controls: controls2 } = useAnimationInView({
    margin: "-150px -150px",
    delay: 250,
  });

  const { setIsOpen } = useModalStore();

  return (
    <section>
      <Container className="py-24 sm:py-36 lg:py-48 overflow-x-hidden">
        <Element name="bar-lounge">
          <ContentWrapper ref={ref}>
            <TextContainer>
              <MotionHeaderContainer
                animate={controls}
                variants={translateY({ delay: 0 })}
                initial="initial"
              >
                <Script>revitalized</Script>
                <Title>Bar Lounge</Title>
              </MotionHeaderContainer>
              <MotionBody
                animate={controls}
                variants={translateY({ delay: 0.25 })}
                initial="initial"
                className="hidden lg:flex"
              >
                Our Bar Lounge is more than just a place to unwind; it&apos;s a
                canvas of camaraderie, where conversations flow as freely as the
                libations. With the stroke of renovation magic, we are crafting
                a space that harmoniously blends modern touches with comfort.
              </MotionBody>
              <MotionBody
                animate={controls}
                variants={translateY({ delay: 0.25 })}
                initial="initial"
                className="text-center max-w-[500px] md:text-start lg:hidden"
              >
                Our Bar Lounge is more than just a place to unwind.
              </MotionBody>
              <MotionButtonGroup
                animate={controls}
                variants={translateY({ delay: 0.5 })}
                initial="initial"
              >
                <Button
                  onClick={() =>
                    setIsOpen(
                      "https://progress-in-motion.s3.amazonaws.com/Before+Renovations/Bar.png"
                    )
                  }
                  className="w-full xs:w-fit"
                  icon="photograph"
                >
                  View Before
                </Button>
                <Button
                  className="hidden xs:flex md:hidden lg:flex"
                  secondary
                  icon="arrowDown"
                  onClick={() => executeScroll({ to: "bar-lounge-more" })}
                >
                  Learn More
                </Button>
              </MotionButtonGroup>
            </TextContainer>
            <MotionImageWrapper
              animate={controls}
              variants={translateX({ delay: 0.5 })}
              initial="initial"
            >
              <Image
                src="https://progress-in-motion.s3.amazonaws.com/Bar+Lounge/Bar4.jpg"
                alt="A side view of the newly renovated bar lounge"
              />
            </MotionImageWrapper>
          </ContentWrapper>
        </Element>
        <Element name="bar-lounge-more">
          <ContentWrapper className="mt-24 sm:mt-36 lg:mt-48" ref={ref2}>
            <MotionTextContainer
              className="md:order-2"
              animate={controls2}
              variants={translateY({ delay: 0.5 })}
              initial="initial"
            >
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
                <Features icon="candle">Sophisticated Ambiance</Features>
                <Features icon="light">Modern Lighting</Features>
                <Features icon="hostStand">Welcoming Host Station</Features>
              </FeaturesGroup>
            </MotionTextContainer>
            <MotionImageWrapper
              animate={controls2}
              variants={translateX({ delay: 0.25, reverse: true })}
              initial="initial"
              className="md:order-1"
            >
              <ImageBackground />
              <Image
                src="https://progress-in-motion.s3.amazonaws.com/Bar+Lounge/Batch.png"
                alt="Another view of the newly renovated bar lounge"
              />
            </MotionImageWrapper>
          </ContentWrapper>
        </Element>
      </Container>
    </section>
  );
};

export default BarLounge;
