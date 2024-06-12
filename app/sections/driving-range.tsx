"use client";

import Container from "@/components/layout/container";
import ContentWrapper from "@/components/layout/content-wrapper";
import FeaturesGroup from "@/components/layout/features-group";
import Button from "@/components/common/button";
import Features from "@/components/common/features";
import HeaderContainer from "@/components/layout/header-container";
import TextContainer from "@/components/layout/text-container";
import {
  Body,
  Script,
  ScriptSmall,
  Title,
  TitleSmall,
} from "@/components/common/typography";
import Image from "@/components/common/image";
import ImageBackground from "@/components/common/image-background";
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
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const DrivingRange = () => {
  const { ref, controls } = useAnimationInView({
    margin: "-150px -150px",
    delay: 750,
  });
  const { ref: ref2, controls: controls2 } = useAnimationInView({
    margin: "-150px -150px",
    delay: 250,
  });
  return (
    <section className="bg-gradient-to-t from-transparent via-blue-100 to-transparent overflow-x-hidden">
      <Container className="py-24 sm:py-36 lg:py-48">
        <Element name="driving-range">
          <ContentWrapper ref={ref}>
            <TextContainer className="md:order-2">
              <MotionHeaderContainer
                animate={controls}
                variants={translateY({ delay: 0 })}
                initial="initial"
              >
                <Script>redesigned</Script>
                <Title>Driving Range</Title>
              </MotionHeaderContainer>
              <MotionBody
                animate={controls}
                variants={translateY({ delay: 0.25 })}
                initial="initial"
                className="text-center max-w-[500px] md:text-start"
              >
                Get ready to tee off into a new era of golfing excellence as we
                embark on a journey to elevate your practice experience through
                the renovation of our Golf Driving Range.
              </MotionBody>
              <MotionButtonGroup
                animate={controls}
                variants={translateY({ delay: 0.5 })}
                initial="initial"
              >
                <Button
                  className="hidden xs:flex md:hidden lg:flex"
                  icon={faCaretDown}
                  onClick={() => executeScroll({ to: "driving-range-more" })}
                >
                  Learn More
                </Button>
              </MotionButtonGroup>
            </TextContainer>
            <MotionImageWrapper
              animate={controls}
              variants={translateX({ delay: 0.5, reverse: true })}
              initial="initial"
              className="md:order-1"
            >
              <Image
                src="https://progress-in-motion.s3.amazonaws.com/Driving+Range/aerial_2.png"
                alt="Image of golf course"
              />
            </MotionImageWrapper>
          </ContentWrapper>
        </Element>
        <Element name="driving-range-more">
          <ContentWrapper className="mt-24 sm:mt-36 lg:mt-48" ref={ref2}>
            <MotionTextContainer
              animate={controls2}
              variants={translateY({ delay: 0.5 })}
              initial="initial"
            >
              <HeaderContainer>
                <ScriptSmall>from</ScriptSmall>
                <TitleSmall>Drive to excellence.</TitleSmall>
              </HeaderContainer>
              <Body className="text-center max-w-[500px] md:text-start hidden lg:block">
                The renovated Driving Range provides the ideal space to unleash
                your potential.
              </Body>
              <FeaturesGroup>
                <Features icon="tee">Toptracer by Topgolf</Features>
                <Features icon="drivingRange">
                  More Driving Stations & Shade Structures
                </Features>
                <Features icon="drainage">Improved Drainage</Features>
                <Features icon="target">Various Targets</Features>
              </FeaturesGroup>
            </MotionTextContainer>
            <MotionImageWrapper
              variants={translateX({ delay: 0.25 })}
              initial="initial"
              animate={controls2}
              className="md:order-1"
            >
              <ImageBackground />
              <Image
                src="https://progress-in-motion.s3.amazonaws.com/Driving+Range/bays.png"
                alt="Close up picture of a golf ball"
              />
            </MotionImageWrapper>
          </ContentWrapper>
        </Element>
      </Container>
    </section>
  );
};

export default DrivingRange;
