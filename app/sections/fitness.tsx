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
import { useModalStore } from "@/lib/store";
import { faCaretDown, faImage } from "@fortawesome/free-solid-svg-icons";

const Fitness = () => {
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
    <section className="overflow-x-hidden">
      <Container className="py-24 sm:py-36 lg:py-48">
        <Element name="fitness">
          <ContentWrapper ref={ref}>
            <TextContainer>
              <MotionHeaderContainer
                animate={controls}
                variants={translateY({ delay: 0 })}
                initial="initial"
              >
                <Script>energize</Script>
                <Title>Fitness Center</Title>
              </MotionHeaderContainer>
              <MotionBody
                className="hidden lg:flex"
                animate={controls}
                variants={translateY({ delay: 0.25 })}
                initial="initial"
              >
                Elevate your fitness experience at our state-of-the-art Fitness
                Center, featuring the latest True Palladium equipment. A modern
                layout ensures optimal flow and functionality, allowing you to
                achieve your best workout.
              </MotionBody>
              <MotionBody
                className="text-center max-w-[500px] md:text-start lg:hidden"
                animate={controls}
                variants={translateY({ delay: 0.25 })}
                initial="initial"
              >
                Elevate your fitness experience with our state-of-the-art
                equipment.
              </MotionBody>
              <MotionButtonGroup
                animate={controls}
                variants={translateY({ delay: 0.5 })}
                initial="initial"
              >
                <Button
                  onClick={() =>
                    setIsOpen(
                      "https://progress-in-motion.s3.amazonaws.com/Fitness/old.png"
                    )
                  }
                  className="w-full xs:w-fit"
                  icon={faImage}
                >
                  View Before
                </Button>
                <Button
                  className="hidden xs:flex md:hidden lg:flex"
                  secondary
                  icon={faCaretDown}
                  onClick={() => executeScroll({ to: "fitness-more" })}
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
                src="https://progress-in-motion.s3.amazonaws.com/Fitness/front.png"
                alt="Image of the newly renovated 26 North restaurant."
              />
            </MotionImageWrapper>
          </ContentWrapper>
        </Element>
        <Element name="fitness-more">
          <ContentWrapper className="mt-24 sm:mt-36 lg:mt-48" ref={ref2}>
            <MotionTextContainer
              className="md:order-2"
              animate={controls2}
              variants={translateY({ delay: 0.5 })}
              initial="initial"
            >
              <HeaderContainer>
                <ScriptSmall>enhance</ScriptSmall>
                <TitleSmall>Your workout experience.</TitleSmall>
              </HeaderContainer>
              <Body className="text-center max-w-[500px] md:text-start hidden lg:block">
                Our Fitness Center is designed for the well-being of our
                members, featuring a variety of machines and spaces for both
                strength and cardio workouts.
              </Body>
              <FeaturesGroup>
                <Features icon="tech">Advanced Equipment</Features>
                <Features icon="target">Cardio Zone</Features>
                <Features icon="carpet">Functional Training Area</Features>
                <Features icon="bright">Refreshing Design</Features>
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
                src="https://progress-in-motion.s3.amazonaws.com/Fitness/back.png"
                alt="Another view of the newly renovated 26 North restaurant."
              />
            </MotionImageWrapper>
          </ContentWrapper>
        </Element>
      </Container>
    </section>
  );
};

export default Fitness;
