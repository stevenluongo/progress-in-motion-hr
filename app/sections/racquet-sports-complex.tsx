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

const RacquetSportsComplex = () => {
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
        <Element name="racquet-complex">
          <ContentWrapper ref={ref}>
            <TextContainer>
              <MotionHeaderContainer
                animate={controls}
                variants={translateY({ delay: 0 })}
                initial="initial"
              >
                <Script>premier</Script>
                <Title>Racquet Sports Complex</Title>
              </MotionHeaderContainer>
              <MotionBody
                className="hidden lg:flex"
                animate={controls}
                variants={translateY({ delay: 0.25 })}
                initial="initial"
              >
                After serving our community for over 40 years, we're excited to
                unveil our transformational new Racquet Sports Complex. Designed
                to meet the needs of our 300+ pickleball and 250+ tennis
                enthusiasts, this modern facility will enhance our vibrant
                lifestyle while ensuring Hunters Run remains competitive in the
                country club marketplace.
              </MotionBody>
              <MotionBody
                className="text-center max-w-[500px] md:text-start lg:hidden"
                animate={controls}
                variants={translateY({ delay: 0.25 })}
                initial="initial"
              >
                After serving our community for over 40 years, we're excited to
                unveil our transformational new Racquet Sports Complex, designed
                to meet the needs of our growing racquet sports community.
              </MotionBody>
              <MotionButtonGroup
                animate={controls}
                variants={translateY({ delay: 0.5 })}
                initial="initial"
              >
                <Button
                  onClick={() =>
                    setIsOpen(
                      "https://progress-in-motion.s3.amazonaws.com/racquet-sports-complex/drawings.webp"
                    )
                  }
                  className="w-full xs:w-fit"
                  icon={faImage}
                >
                  View Plans
                </Button>
                <Button
                  className="hidden xs:flex md:hidden lg:flex"
                  secondary
                  icon={faCaretDown}
                  onClick={() =>
                    executeScroll({
                      to: "racquet-complex-more",
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
                src="https://progress-in-motion.s3.amazonaws.com/racquet-sports-complex/aerial_front.webp"
                alt="Image of the newly constructed racquet sports complex with professional tennis courts."
              />
            </MotionImageWrapper>
          </ContentWrapper>
        </Element>
        <Element name="racquet-complex-more">
          <ContentWrapper className="mt-24 sm:mt-36 lg:mt-48" ref={ref2}>
            <MotionTextContainer
              className="md:order-2"
              animate={controls2}
              variants={translateY({ delay: 0.5 })}
              initial="initial"
            >
              <HeaderContainer>
                <ScriptSmall>exceptional</ScriptSmall>
                <TitleSmall>World-class facilities.</TitleSmall>
              </HeaderContainer>
              <Body className="text-center max-w-[500px] md:text-start hidden lg:block">
                Construction begins Summer 2026 with an estimated 16-month
                timeline. The complex will feature championship courts, covered
                stadium seating, a pro shop, flexible meeting space, and
                luxurious amenities that enhance both competitive play and
                social connection.
              </Body>
              <FeaturesGroup>
                <Features icon="tennis">16 Lighted Tennis Courts</Features>
                <Features icon="racquet">16 Pickleball Courts</Features>
                <Features icon="boules">4 Bocce Courts</Features>
                <Features icon="drinks">2 Beverage Stations</Features>
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
                src="https://progress-in-motion.s3.amazonaws.com/racquet-sports-complex/front_entrance.webp"
                alt="View of the pickleball courts at the new racquet sports complex."
              />
            </MotionImageWrapper>
          </ContentWrapper>
        </Element>
      </Container>
    </section>
  );
};

export default RacquetSportsComplex;
