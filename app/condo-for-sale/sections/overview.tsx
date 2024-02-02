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
import { faCaretDown, faImage } from "@fortawesome/free-solid-svg-icons";

const Overview = () => {
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
        <Element name="twenty-six-north">
          <ContentWrapper ref={ref}>
            <TextContainer>
              <MotionHeaderContainer
                animate={controls}
                variants={translateY({ delay: 0 })}
                initial="initial"
              >
                <Script>welcome</Script>
                <Title>30D Southport Lane</Title>
              </MotionHeaderContainer>
              <MotionBody
                className="hidden lg:flex"
                animate={controls}
                variants={translateY({ delay: 0.25 })}
                initial="initial"
              >
                Residing at 30D Southport Lane offers an unparalleled living
                experience, where every detail has been meticulously remodeled
                from floor to ceiling. This top unit boasts breathtaking views
                of the golf course, ensuring a serene backdrop to your daily
                living.
              </MotionBody>
              <MotionButtonGroup
                animate={controls}
                variants={translateY({ delay: 0.5 })}
                initial="initial"
              >
                <Button
                  onClick={() =>
                    setIsOpen(
                      "https://progress-in-motion.s3.amazonaws.com/30D/master-2.jpg"
                    )
                  }
                  className="w-full xs:w-fit"
                  icon={faImage}
                >
                  View Image
                </Button>
                <Button
                  className="hidden xs:flex md:hidden lg:flex"
                  secondary
                  icon={faCaretDown}
                  onClick={() =>
                    executeScroll({
                      to: "twenty-six-north-more",
                    })
                  }
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
                src="https://progress-in-motion.s3.amazonaws.com/30D/master-2.jpg"
                alt="Image of the newly renovated 26 North restaurant."
              />
            </MotionImageWrapper>
          </ContentWrapper>
        </Element>
        <Element name="twenty-six-north-more">
          <ContentWrapper className="mt-24 sm:mt-36 lg:mt-48" ref={ref2}>
            <MotionTextContainer
              className="md:order-2"
              animate={controls2}
              variants={translateY({ delay: 0.5 })}
              initial="initial"
            >
              <HeaderContainer>
                <ScriptSmall>luxury</ScriptSmall>
                <TitleSmall>Designed for comfort.</TitleSmall>
              </HeaderContainer>
              <Body className="text-center max-w-[500px] md:text-start hidden lg:block">
                The heart of this home is the open concept kitchen and living
                area, illuminated by recessed lighting, featuring new
                stainless-steel appliances, soft-close cabinets, and a quartz
                kitchen island under elegant pendant lights.
              </Body>
              <FeaturesGroup>
                <Features icon="candle">2 Bed / 2 Bath</Features>
                <Features icon="drinks">Top Unit Second Floor</Features>
                <Features icon="service">1491 Square Feet</Features>
                <Features icon="outdoorSeating">
                  Modern Renovated Bathrooms
                </Features>
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
                src="https://progress-in-motion.s3.amazonaws.com/30D/living-2.jpg"
                alt="Another view of the newly renovated 26 North restaurant."
              />
            </MotionImageWrapper>
          </ContentWrapper>
        </Element>
      </Container>
    </section>
  );
};

export default Overview;
