"use client";

import Container from "@/components/layout/container";
import ContentWrapper from "@/components/layout/content-wrapper";
import Button from "@/components/ui/button";
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
import { motion } from "framer-motion";
import Link from "next/link";

const EastCourse = () => {
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
    <section className="bg-blue-100">
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
                Exciting changes are on the horizon as we proudly present the
                East Golf Course Renovation Project. This endeavor marks a
                thrilling chapter in our commitment to enhancing the golfing
                adventure, where tradition meets innovation for an even more
                enjoyable experience.
              </MotionBody>
              <MotionButtonGroup
                animate={controls2}
                variants={translateY({ delay: 0.5 })}
                initial="initial"
              >
                <Button
                  className="hidden xs:flex md:hidden lg:flex"
                  secondary
                  icon="arrowDown"
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
                src="https://progress-in-motion.s3.amazonaws.com/East+Course/east-course.png"
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
                This project is a true reflection of our dedication to both golf
                and nature. By revitalizing the East Golf Course, we&apos;re
                ensuring that both avid golf enthusiasts and newcomers can enjoy
                a fantastic golfing experience.
              </Body>
              <Link
                target="_blank"
                href="https://www.huntersrun.net/documents/10184/14462025/East+Course+Renovation+Hole+by+Hole+Web+Booklet.pdf?t=1692393509574"
              >
                <Button className="w-full xs:w-fit" icon="photograph">
                  View Booklet
                </Button>
              </Link>
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
            </MotionImageWrapper>
          </ContentWrapper>
        </Element>
      </Container>
    </section>
  );
};

export default EastCourse;
