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
import {
  faCaretDown,
  faCircleInfo,
  faCirclePlay,
  faPlay,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useModalStore } from "@/lib/store";
import ButtonGroup from "@/components/ui/button-group";

const VideoSection = () => {
  const { setVideoModalOpen, setPDFModalOpen } = useModalStore();
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
                <Button onClick={() => setVideoModalOpen()} icon={faCirclePlay}>
                  Watch Video
                </Button>
                <Button
                  className="hidden xs:flex md:hidden lg:flex"
                  icon={faCaretDown}
                  onClick={() => executeScroll({ to: "driving-range-more" })}
                  secondary
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
                onClick={() => setVideoModalOpen()}
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
        <Element name="driving-range-more">
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
              <MotionButtonGroup
                animate={controls2}
                variants={translateY({ delay: 0.5 })}
                initial="initial"
              >
                <Button
                  onClick={() =>
                    setPDFModalOpen(
                      "https://progressive-buyer.s3.amazonaws.com/realtor+prospective+buyer+30D.pdf"
                    )
                  }
                  icon={faCircleInfo}
                >
                  More Information
                </Button>
                <Button
                  className="hidden xs:flex md:hidden lg:flex"
                  icon={faCaretDown}
                  onClick={() => executeScroll({ to: "driving-range-more" })}
                  secondary
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
