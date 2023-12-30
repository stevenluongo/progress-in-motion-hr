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
import {
  MotionBody,
  MotionButtonGroup,
  MotionHeaderContainer,
  MotionImage,
  MotionImageWrapper,
  MotionTextContainer,
} from "@/components/motion";
import { useScroll, useTransform } from "framer-motion";
import { useAnimationInView } from "@/hooks/useAnimationInView";
import { translateX, translateY } from "@/utils/variants";
import { useModalStore } from "@/lib/store";

const MainLobby = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [-0.25, 0.45], [0, 1]);

  const { ref, controls } = useAnimationInView({
    delay: 250,
    margin: "-150px -150px",
  });

  const { ref: ref2, controls: controls2 } = useAnimationInView({
    delay: 750,
    margin: "-150px -150px",
  });

  const { ref: ref3, controls: controls3 } = useAnimationInView({
    delay: 250,
    margin: "-150px -150px",
  });

  const { setIsOpen } = useModalStore();

  return (
    <section className="pt-24">
      <Container className="flex justify-center">
        <MotionHeaderContainer
          ref={ref}
          animate={controls}
          variants={translateY({ delay: 0 })}
          initial="initial"
          className="!items-center"
        >
          <Script>welcome</Script>
          <TitleSmall>A Warm Entrance Awaits</TitleSmall>
        </MotionHeaderContainer>
      </Container>
      <div className="relative max-w-screen h-[700px] lg:mt-6">
        <MotionImage
          src="https://progress-in-motion.s3.amazonaws.com/Main+Lobby/Lobby4.jpg"
          alt="Large display of the main lobby of the club"
          style={{ scale }}
          className="transtiion-all duration-[50ms] ease-out"
        />
      </div>
      <Container className="my-24 sm:my-36 lg:my-48 box-border">
        <Element name="main-lobby">
          <ContentWrapper ref={ref2}>
            <TextContainer className="md:order-2">
              <MotionHeaderContainer
                animate={controls2}
                variants={translateY({ delay: 0 })}
                initial="initial"
              >
                <Script>reimagining the</Script>
                <Title>Main Lobby</Title>
              </MotionHeaderContainer>
              <MotionBody
                animate={controls2}
                variants={translateY({ delay: 0.25 })}
                initial="initial"
                className="text-center max-w-[500px] md:text-start"
              >
                A bright transformation is underway, as we re-imagine and
                refresh our current lobby space into a realm of quintessential
                warmth and unpretentious sophistication.
              </MotionBody>
              <MotionButtonGroup
                animate={controls2}
                variants={translateY({ delay: 0.5 })}
                initial="initial"
              >
                <Button
                  onClick={() =>
                    setIsOpen(
                      "https://progress-in-motion.s3.amazonaws.com/Before+Renovations/Lobby.png"
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
                  onClick={() => executeScroll({ to: "main-lobby-more" })}
                >
                  Learn More
                </Button>
              </MotionButtonGroup>
            </TextContainer>
            <MotionImageWrapper
              className="md:order-1"
              animate={controls2}
              variants={translateX({ delay: 0.5, reverse: true })}
              initial="initial"
            >
              <Image
                src="https://progress-in-motion.s3.amazonaws.com/Main+Lobby/Lobby8.jpg"
                alt="Another view of the main lobby of the club"
              />
            </MotionImageWrapper>
          </ContentWrapper>
        </Element>
        <Element name="main-lobby-more">
          <ContentWrapper className="mt-24 sm:mt-36 lg:mt-48" ref={ref3}>
            <MotionTextContainer
              animate={controls3}
              variants={translateY({ delay: 0.5 })}
              initial="initial"
            >
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
            </MotionTextContainer>
            <MotionImageWrapper
              animate={controls3}
              variants={translateX({ delay: 0.25 })}
              initial="initial"
            >
              <ImageBackground />
              <Image
                src="https://progress-in-motion.s3.amazonaws.com/Main+Lobby/Lobby1.jpg"
                alt="A final view of the main lobby of the club"
              />
            </MotionImageWrapper>
          </ContentWrapper>
        </Element>
      </Container>
    </section>
  );
};

export default MainLobby;
