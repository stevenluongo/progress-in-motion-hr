"use client";

import Container from "@/components/layout/container";
import ContentWrapper from "@/components/layout/content-wrapper";
import Button from "@/components/ui/button";
import ButtonGroup from "@/components/ui/button-group";
import HeaderContainer from "@/components/layout/header-container";
import ImageWrapper from "@/components/ui/image-wrapper";
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

const EastCourse = () => {
  return (
    <section className="bg-blue-100">
      <Container className="flex flex-col justify-center pt-24 sm:pt-36 lg:pt-48">
        <HeaderContainer className="!items-center">
          <Script>vision</Script>
          <TitleSmall>Reimagining the greens.</TitleSmall>
        </HeaderContainer>
        <div className="relative w-full h-[300px] mt-12">
          <Image
            src="https://progress-in-motion.s3.amazonaws.com/East+Course/putting.png"
            alt="Image of a putting green with a golf ball"
          />
        </div>
      </Container>
      <Container className="py-24 sm:py-36 lg:py-48">
        <Element name="east-course">
          <ContentWrapper>
            <TextContainer className="md:order-2">
              <HeaderContainer>
                <Script>renovation</Script>
                <Title>East Course</Title>
              </HeaderContainer>
              <Body className="text-center max-w-[500px] md:text-start">
                Exciting changes are on the horizon as we proudly present the
                East Golf Course Renovation Project. This endeavor marks a
                thrilling chapter in our commitment to enhancing the golfing
                adventure, where tradition meets innovation for an even more
                enjoyable experience.
              </Body>
              <ButtonGroup>
                <Button className="w-full xs:w-fit" icon="video">
                  View Booklet
                </Button>
                <Button
                  className="hidden xs:flex md:hidden lg:flex"
                  secondary
                  icon="arrowDown"
                  onClick={() => executeScroll({ to: "east-course-more" })}
                >
                  Learn More
                </Button>
              </ButtonGroup>
            </TextContainer>
            <ImageWrapper className="md:order-1">
              <Image
                src="https://progress-in-motion.s3.amazonaws.com/East+Course/east-course.png"
                alt="An aerial view of the current east golf course"
              />
            </ImageWrapper>
          </ContentWrapper>
        </Element>
        <Element name="east-course-more">
          <ContentWrapper className="mt-24 sm:mt-36 lg:mt-48">
            <TextContainer>
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
              <Button className="w-full xs:w-fit" icon="video">
                View Booklet
              </Button>
            </TextContainer>
            <ImageWrapper>
              <ImageBackground />
              <Image
                src="https://progress-in-motion.s3.amazonaws.com/East+Course/map.png"
                alt="A map of the proposed changes to the east golf course"
              />
            </ImageWrapper>
          </ContentWrapper>
        </Element>
      </Container>
    </section>
  );
};

export default EastCourse;
