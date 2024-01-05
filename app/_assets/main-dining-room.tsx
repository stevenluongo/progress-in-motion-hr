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
  MotionImageWrapper,
  MotionTextContainer,
} from "@/components/motion";
import { useAnimationInView } from "@/hooks/useAnimationInView";
import { translateX, translateY } from "@/utils/variants";
import { useModalStore } from "@/lib/store";
import { faCamera, faCaretDown } from "@fortawesome/free-solid-svg-icons";

const MainDiningRoom = () => {
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
        <Element name="main-dining-room">
          <ContentWrapper ref={ref}>
            <TextContainer>
              <MotionHeaderContainer
                animate={controls}
                variants={translateY({ delay: 0 })}
                initial="initial"
              >
                <Script>reimagined</Script>
                <Title>Dining Room</Title>
              </MotionHeaderContainer>
              <MotionBody
                animate={controls}
                variants={translateY({ delay: 0.25 })}
                initial="initial"
                className="text-center max-w-[500px] md:text-start"
              >
                The Dining Room has always been the heart of our culinary
                affairs, where flavors come to life and memories are made. With
                this refurbishment, we&apos;re not just upgrading the setting;
                we&apos;re crafting an event space that reflects the artistry of
                our Club and the warmth of our hospitality.
              </MotionBody>
              <MotionButtonGroup
                animate={controls}
                variants={translateY({ delay: 0.5 })}
                initial="initial"
              >
                <Button
                  onClick={() =>
                    setIsOpen(
                      "https://progress-in-motion.s3.amazonaws.com/Before+Renovations/Main+Dining+Room.png"
                    )
                  }
                  className="w-full xs:w-fit"
                  icon={faCamera}
                >
                  View Before
                </Button>
                <Button
                  className="hidden xs:flex md:hidden lg:flex"
                  secondary
                  icon={faCaretDown}
                  onClick={() => executeScroll({ to: "main-dining-room-more" })}
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
                src="https://progress-in-motion.s3.amazonaws.com/Main+Dining+Room/Dining2.jpg"
                alt="A front view of the newly renovated main dining room"
              />
            </MotionImageWrapper>
          </ContentWrapper>
        </Element>
        <Element name="main-dining-room-more">
          <ContentWrapper className="mt-24 sm:mt-36 lg:mt-48" ref={ref2}>
            <MotionTextContainer
              className="md:order-2"
              animate={controls2}
              variants={translateY({ delay: 0.5 })}
              initial="initial"
            >
              <HeaderContainer>
                <ScriptSmall>experience</ScriptSmall>
                <TitleSmall>A taste of tomorrow.</TitleSmall>
              </HeaderContainer>
              <Body className="text-center max-w-[500px] md:text-start hidden lg:block">
                Whether you&apos;re planning a grand celebration, a company
                gala, or a corporate meeting, our banquet space can be tailored
                to suit your needs. With flexible seating arrangements and
                state-of-the-art audiovisual equipment, we&apos;ve got you
                covered.
              </Body>
              <FeaturesGroup>
                <Features icon="window">Modern Furnishings</Features>
                <Features icon="light">Updated Lighting</Features>
                <Features icon="infrastructure">
                  Improved Infrastructure
                </Features>
                <Features icon="seating">New Seating</Features>
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
                src="https://progress-in-motion.s3.amazonaws.com/Main+Dining+Room/Dining3.jpg"
                alt="Another view of the newly renovated main dining room"
              />
            </MotionImageWrapper>
          </ContentWrapper>
        </Element>
      </Container>
    </section>
  );
};

export default MainDiningRoom;
