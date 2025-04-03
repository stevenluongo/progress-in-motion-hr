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
import { motion } from "framer-motion";
import Link from "next/link";
import {
  faBook,
  faCaretDown,
  faPlay,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { useModalStore } from "@/lib/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EastCourse = () => {
  const { setVideoModalOpen } = useModalStore();
  const { ref, controls } = useAnimationInView({
    delay: 500,
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
  return (
    <section className="bg-blue-100 overflow-x-hidden">
      <Container
        ref={ref}
        className="flex flex-col justify-center pt-24 sm:pt-36 lg:pt-48"
      >
        <MotionHeaderContainer
          animate={controls}
          variants={translateY({ delay: 0.5 })}
          initial="initial"
          className="!items-center"
        >
          <Script>vision</Script>
          <TitleSmall>Reimagining the greens.</TitleSmall>
        </MotionHeaderContainer>
        <motion.div
          animate={controls}
          variants={translateY({ delay: 0.75 })}
          initial="initial"
          className="relative w-full h-[300px] mt-12"
        >
          <Image
            src="https://progress-in-motion.s3.amazonaws.com/East+Course/putting.png"
            alt="Image of a putting green with a golf ball"
          />
        </motion.div>
      </Container>
      <Container className="py-24 sm:py-36 lg:py-48">
        <Element name="east-course">
          <ContentWrapper ref={ref2}>
            <TextContainer className="md:order-2">
              <MotionHeaderContainer
                animate={controls2}
                variants={translateY({ delay: 0 })}
                initial="initial"
              >
                <Script>refreshed</Script>
                <Title>East Course</Title>
              </MotionHeaderContainer>
              <MotionBody
                animate={controls2}
                variants={translateY({ delay: 0.25 })}
                initial="initial"
                className="text-center max-w-[500px] md:text-start"
              >
                We&apos;re proud to announce the successful completion of the
                East Golf Course Renovation Project! This transformative upgrade
                marks a new chapter in our commitment to enhancing the golfing
                experience to create an even more enjoyable and memorable game
                for all.
              </MotionBody>
              <MotionButtonGroup
                animate={controls2}
                variants={translateY({ delay: 0.5 })}
                initial="initial"
              >
                <Button
                  className="hidden xs:flex md:hidden lg:flex"
                  icon={faCaretDown}
                  onClick={() => executeScroll({ to: "east-course-more" })}
                >
                  Learn More
                </Button>
              </MotionButtonGroup>
            </TextContainer>
            <MotionImageWrapper
              animate={controls2}
              variants={translateX({ delay: 0.5, reverse: true })}
              initial="initial"
              className="md:order-1"
            >
              <Image
                src="/hunters-run-east.png"
                alt="An aerial view of the current east golf course"
              />
            </MotionImageWrapper>
          </ContentWrapper>
        </Element>
        <Element name="east-course-more">
          <ContentWrapper className="mt-24 sm:mt-36 lg:mt-48" ref={ref3}>
            <MotionTextContainer
              animate={controls3}
              variants={translateY({ delay: 0.5 })}
              initial="initial"
            >
              <HeaderContainer>
                <ScriptSmall>a fresh</ScriptSmall>
                <TitleSmall>Fairway forward.</TitleSmall>
              </HeaderContainer>
              <Body className="text-center max-w-[500px] md:text-start hidden lg:block">
                This project stands as a true reflection of our dedication to
                both golf and nature. With the revitalization of the East Golf
                Course now complete, both avid golf enthusiasts and newcomers
                alike can enjoy a refreshed and exceptional golfing experience.
              </Body>

              <MotionButtonGroup
                animate={controls3}
                variants={translateY({ delay: 0.5 })}
                initial="initial"
              >
                <Link
                  target="_blank"
                  aria-label="View the East Course Renovation Hole by Hole Web Booklet"
                  href="https://www.huntersrun.net/documents/10184/14462025/East+Course+Renovation+Hole+by+Hole+Web+Booklet.pdf?t=1692393509574"
                >
                  <Button className="w-full xs:w-fit" icon={faBook}>
                    View Booklet
                  </Button>
                </Link>

                <Button
                  icon={faVideo}
                  onClick={() =>
                    setVideoModalOpen(
                      "https://player.vimeo.com/video/1069712641?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                    )
                  }
                >
                  Photo Slideshow
                </Button>
              </MotionButtonGroup>
            </MotionTextContainer>
            <MotionImageWrapper
              animate={controls3}
              variants={translateX({ delay: 0.25 })}
              initial="initial"
            >
              <ImageBackground />
              <Image
                src="https://progress-in-motion.s3.amazonaws.com/East+Course/map.png"
                alt="A map of the proposed changes to the east golf course"
              />
              <div
                className="absolute w-full h-full top-0 left-0 bg-black bg-opacity-40 transition-all duration-300 group hover:bg-opacity-30 flex justify-center items-center cursor-pointer"
                onClick={() =>
                  setVideoModalOpen(
                    "https://player.vimeo.com/video/1069712641?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
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
      </Container>
    </section>
  );
};

export default EastCourse;
