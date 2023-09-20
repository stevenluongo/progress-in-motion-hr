import ChevronDown from "@/components/icons/chevron-down";
import TextContainer from "@/components/text/text-container";
import TextHeadingPrimary from "@/components/text/text-heading-primary";
import React, { useRef } from "react";
import TextBody from "@/components/text/text-body";
import ButtonPrimary from "@/components/button/button-primary";
import ContentWrapper from "@/components/content/content-wrapper";
import ContentPanel from "@/components/content/content-panel";
import ContentContainer from "@/components/content/content-container";
import TextHeadingSecondary from "@/components/text/text-heading-secondary";
import ImageWrapper from "@/components/image/image-wrapper";
import FeaturesItem from "@/components/features/features-item";
import FeaturesContainer from "@/components/features/features-container";
import { Element } from "react-scroll";
import Image from "@/components/image/full-image";
import ImageGrid from "@/components/image/image-grid";
import { useAnimation, motion } from "framer-motion";
import { useAnimationInView } from "@/hooks/useAnimationInView";
import { opacity, translateY } from "@/utils/variants";

const DrivingRange = () => {
  const headerControls = useAnimation();
  const footerControls = useAnimation();
  const discoverControls = useAnimation();

  const headerRef = useRef(null);
  const footerRef = useRef(null);
  const discoverRef = useRef(null);

  useAnimationInView(headerRef, headerControls);
  useAnimationInView(discoverRef, discoverControls);
  useAnimationInView(footerRef, footerControls);

  return (
    <Element name="driving-range">
      <section className="py-[200px] bg-blue background">
        <ContentWrapper className="z-10 relative">
          <ContentContainer reverse light={true} ref={headerRef}>
            <ContentPanel
              variants={translateY(0.2)}
              animate={headerControls}
              initial="initial"
            >
              <TextContainer>
                <TextHeadingPrimary number={2}>
                  Driving Range
                </TextHeadingPrimary>
                <TextBody>
                  Get ready to tee off into a new era of golfing excellence as
                  we embark on a journey to elevate your practice experience
                  through the renovation of our Golf Driving Range.
                </TextBody>
                <ButtonPrimary
                  light
                  scrollTo="driving-range-discover"
                  offset={-200}
                >
                  Read More
                </ButtonPrimary>
              </TextContainer>
            </ContentPanel>
            <ContentPanel
              variants={translateY(0.4)}
              animate={headerControls}
              initial="initial"
            >
              <ImageWrapper>
                <Image
                  src="/driving-range/range_upscaled.png"
                  alt="26 North Craft Kitchen"
                />
              </ImageWrapper>
            </ContentPanel>
          </ContentContainer>
          <Element name="driving-range-discover">
            <div className="grid gap-y-8" ref={discoverRef}>
              <TextHeadingSecondary
                variants={opacity}
                animate={discoverControls}
                initial="initial"
                heading="2023 - 2024 Season"
                light={true}
              >
                From drive to excellence.
              </TextHeadingSecondary>
              <motion.div className="h-[300px]">
                <ImageWrapper
                  variants={translateY(0.2)}
                  animate={discoverControls}
                  initial="initial"
                  full
                  light={true}
                >
                  <Image
                    src="/driving-range/range_upscaled.png"
                    alt="26 North Craft Kitchen"
                  />
                </ImageWrapper>
              </motion.div>
            </div>
          </Element>
          <ContentContainer light={true} ref={footerRef}>
            <ContentPanel
              variants={opacity}
              initial="initial"
              animate={footerControls}
            >
              <TextContainer>
                <TextHeadingSecondary>Teeing up tomorrow.</TextHeadingSecondary>
                <TextBody>
                  Whether you&apos;re fine-tuning your technique or just
                  starting your golfing journey, the renovated Driving Range
                  provides the ideal space to unleash your potential.
                </TextBody>
                <FeaturesContainer>
                  <FeaturesItem>More driving stations</FeaturesItem>
                  <FeaturesItem>Short & long range targets</FeaturesItem>
                  <FeaturesItem>Increased number of tees</FeaturesItem>
                  <FeaturesItem>Covered tee stations</FeaturesItem>
                  <FeaturesItem>New Infrastructure</FeaturesItem>
                  <FeaturesItem>Improved drainage</FeaturesItem>
                </FeaturesContainer>
              </TextContainer>
            </ContentPanel>
            <ContentPanel>
              <ImageGrid>
                <ImageWrapper
                  variants={translateY(0.2)}
                  initial="initial"
                  animate={footerControls}
                  light={true}
                >
                  <Image
                    src="/driving-range/ball.png"
                    alt="26 North Craft Kitchen"
                  />
                </ImageWrapper>
                <ImageWrapper
                  variants={translateY(0.4)}
                  initial="initial"
                  animate={footerControls}
                  light={true}
                >
                  <Image
                    src="/driving-range/swing.JPG"
                    alt="26 North Craft Kitchen"
                  />
                </ImageWrapper>
              </ImageGrid>
            </ContentPanel>
          </ContentContainer>
          <ChevronDown
            scrollTo="main-lobby"
            className="w-12 h-12 m-auto stroke-2 stroke-white cursor-pointer"
          />
        </ContentWrapper>
      </section>
    </Element>
  );
};

export default DrivingRange;
