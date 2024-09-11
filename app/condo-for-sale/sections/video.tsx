"use client";

import Container from "@/components/layout/container";
import ContentWrapper from "@/components/layout/content-wrapper";
import Button from "@/components/common/button";
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
import {
  faCaretDown,
  faCircleInfo,
  faCirclePlay,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useModalStore } from "@/lib/store";
import Link from "next/link";

const VideoSection = () => {
  const { setVideoModalOpen } = useModalStore();
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
        <Element name="video">
          <ContentWrapper ref={ref}>
            <TextContainer className="md:order-2">
              <MotionHeaderContainer
                animate={controls}
                variants={translateY({ delay: 0 })}
                initial="initial"
              >
                <Script>visualize</Script>
                <Title>Tour your dream home.</Title>
              </MotionHeaderContainer>
              <MotionBody
                animate={controls}
                variants={translateY({ delay: 0.25 })}
                initial="initial"
                className="text-center max-w-[500px] md:text-start"
              >
                Step inside the essence of luxury living with our exclusive
                video tour of 30D Southport Lane. Experience the meticulous
                attention to detail, from the modern, open-concept design and
                high-end finishes to the serene golf course views.
              </MotionBody>
              <MotionButtonGroup
                animate={controls}
                variants={translateY({ delay: 0.5 })}
                initial="initial"
              >
                <Button
                  onClick={() =>
                    setVideoModalOpen(
                      "https://player.vimeo.com/video/902402136?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                    )
                  }
                  className="w-full xs:w-fit"
                  icon={faCirclePlay}
                >
                  Watch Video
                </Button>
                <Button
                  className="hidden xs:flex md:hidden lg:flex"
                  secondary
                  icon={faCaretDown}
                  onClick={() =>
                    executeScroll({
                      to: "pricing",
                    })
                  }
                >
                  Keep Reading
                </Button>
              </MotionButtonGroup>
            </TextContainer>
            <MotionImageWrapper
              animate={controls}
              variants={translateX({ delay: 0.5, reverse: true })}
              initial="initial"
              className="md:order-1 relative"
            >
              <Image
                src="https://progress-in-motion.s3.amazonaws.com/30D/guest-2.jpg"
                alt="Close up picture of a golf ball"
              />
              <div
                className="absolute w-full h-full top-0 left-0 bg-black bg-opacity-40 transition-all duration-300 group hover:bg-opacity-30 flex justify-center items-center cursor-pointer"
                onClick={() =>
                  setVideoModalOpen(
                    "https://player.vimeo.com/video/902402136?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  )
                }
              >
                <FontAwesomeIcon
                  icon={faPlay}
                  className="group-hover:scale-105 transition-all duration-300"
                  style={{ width: 30, height: 30, color: "white" }}
                />
              </div>
            </MotionImageWrapper>
          </ContentWrapper>
        </Element>
        <Element name="pricing">
          <ContentWrapper className="mt-24 sm:mt-36 lg:mt-48" ref={ref2}>
            <MotionTextContainer
              animate={controls2}
              variants={translateY({ delay: 0.5 })}
              initial="initial"
            >
              <HeaderContainer>
                <ScriptSmall>elegance</ScriptSmall>
                <TitleSmall>Secure your sanctuary.</TitleSmall>
              </HeaderContainer>
              <Body className="text-center max-w-[500px] md:text-start hidden lg:block">
                Offered at $185,000, 30D Southport Lane is an investment in
                unparalleled luxury and convenience. The comprehensive 2024
                Quarterly HOA Fee of $2,398 ensures access to premium services
                including 24-hour security, pest control, entertainment options,
                and exclusive community facilities.
              </Body>
              <Body className="text-center md:text-start lg:hidden">
                Offered at $185,000, 30D Southport Lane is an investment in
                unparalleled luxury and convenience.
              </Body>
              <MotionButtonGroup
                animate={controls2}
                variants={translateY({ delay: 0.5 })}
                initial="initial"
              >
                <Link
                  href="https://progressive-buyer.s3.amazonaws.com/realtor+prospective+buyer+30D.pdf"
                  target="_blank"
                  className="w-full xs:w-fit"
                >
                  <Button className="w-full xs:w-fit" icon={faCircleInfo}>
                    More Information
                  </Button>
                </Link>
                <Button
                  className="hidden xs:flex md:hidden lg:flex"
                  secondary
                  icon={faCaretDown}
                  onClick={() =>
                    executeScroll({
                      to: "pricing",
                    })
                  }
                >
                  Keep Reading
                </Button>
              </MotionButtonGroup>
            </MotionTextContainer>
            <MotionImageWrapper
              variants={translateX({ delay: 0.25 })}
              initial="initial"
              animate={controls2}
              className="md:order-1"
            >
              <ImageBackground />
              <Image
                src="https://progress-in-motion.s3.amazonaws.com/30D/kitchen-1.jpg"
                alt="Close up picture of a golf ball"
              />
            </MotionImageWrapper>
          </ContentWrapper>
        </Element>
      </Container>
    </section>
  );
};

export default VideoSection;
