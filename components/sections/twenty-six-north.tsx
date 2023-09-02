import ButtonPrimary from "../button/button-primary";
import ContentContainer from "../content/content-container";
import ContentPanel from "../content/content-panel";
import ContentWrapper from "../content/content-wrapper";
import ImageWrapper from "../image/image-wrapper";
import TextBody from "../text/text-body";
import TextContainer from "../text/text-container";
import TextHeadingPrimary from "../text/text-heading-primary";
import TextHeadingSecondary from "../text/text-heading-secondary";
import FeaturesContainer from "../features/features-container";
import FeaturesItem from "../features/features-item";
import ChevronDown from "../icons/chevron-down";
import Image from "../image/full-image";
import { Element } from "react-scroll";
import { default as NextImage } from "next/image";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TwentySixNorth = () => {
  const { ref, inView } = useInView({ threshold: 0 });
  const controls = useAnimation();

  const variant = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 30, damping: 10 },
    },
    initial: { opacity: 0, y: 100 },
  };
  const variant2 = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 30, damping: 10 },
    },
    initial: { opacity: 0, y: 100 },
  };

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        controls.start("visible");
      });
    }
  }, [inView, controls]);
  return (
    <Element name="twenty-six-north">
      <section className="py-[200px]">
        <ContentWrapper>
          <ContentContainer>
            <ContentPanel
              ref={ref}
              variants={variant}
              animate={controls}
              initial="initial"
            >
              <TextContainer>
                <TextHeadingPrimary number={1}>
                  26° NORTH
                  <br /> CRAFT KITCHEN
                </TextHeadingPrimary>
                <TextBody>
                  Dining at 26° North will indeed be a feast for the senses.
                  Here you&apos;ll find a carefully crafted menu complemented by
                  hand-selected fine wines, craft cocktails and exceptional
                  service.
                </TextBody>
                <ButtonPrimary scrollTo="twenty-six-north-discover">
                  Read More
                </ButtonPrimary>
              </TextContainer>
            </ContentPanel>
            <ContentPanel
              ref={ref}
              variants={variant2}
              animate={controls}
              initial="initial"
            >
              <ImageWrapper>
                <Image
                  src="/twenty-six-north/host.jpg"
                  alt="26 North Craft Kitchen"
                />
              </ImageWrapper>
            </ContentPanel>
          </ContentContainer>

          <Discover />

          <ContentContainer reverse>
            <ContentPanel>
              <TextContainer>
                <TextHeadingSecondary>
                  Elevate your dining experience.
                </TextHeadingSecondary>
                <TextBody>
                  26° North uncorks an intimate and artisanal experience for our
                  membership with seasonally sourced ingredients.
                </TextBody>
                <FeaturesContainer>
                  <FeaturesItem>Sophisticated restaurant</FeaturesItem>
                  <FeaturesItem>Attentive service</FeaturesItem>
                  <FeaturesItem>Covered outdoor seating</FeaturesItem>
                  <FeaturesItem>Craft cocktails</FeaturesItem>
                  <FeaturesItem>Intimate ambiance</FeaturesItem>
                </FeaturesContainer>
              </TextContainer>
            </ContentPanel>
            <ContentPanel>
              <ImageWrapper>
                <Image
                  src="/twenty-six-north/bar.jpg"
                  alt="26 North Craft Kitchen"
                />
              </ImageWrapper>
            </ContentPanel>
          </ContentContainer>
          <ChevronDown
            scrollTo="driving-range"
            className="w-12 h-12 m-auto stroke-2 stroke-blue-800 cursor-pointer"
          />
        </ContentWrapper>
      </section>
    </Element>
  );
};

export default TwentySixNorth;

const Discover = () => {
  const { ref, inView } = useInView({ threshold: 0 });
  const controls = useAnimation();

  const variant = {
    visible: {
      opacity: 1,
      transition: { duration: 1 },
    },
    initial: { opacity: 0 },
  };
  const variant2 = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 30, damping: 10 },
    },
    initial: { opacity: 0, y: 130 },
  };
  const variant3 = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 25, damping: 10 },
    },
    initial: { opacity: 0, y: 140 },
  };
  const variant4 = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 20, damping: 10 },
    },
    initial: { opacity: 0, y: 150 },
  };

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        controls.start("visible");
      });
    }
  }, [inView, controls]);

  return (
    <Element name="twenty-six-north-discover">
      <div className="grid gap-y-8">
        <TextHeadingSecondary
          animate={controls}
          ref={ref}
          initial="initial"
          variants={variant}
          heading="2023 - 2024 Season"
        >
          Indulge in culinary excellence.
        </TextHeadingSecondary>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 h-[300px]">
          <motion.div
            ref={ref}
            animate={controls}
            variants={variant2}
            initial="initial"
            className="w-full h-full relative hidden md:block"
          >
            <Image
              src="/twenty-six-north/food_1.JPEG"
              alt="26 North Craft Kitchen"
            />
          </motion.div>
          <motion.div
            ref={ref}
            animate={controls}
            variants={variant3}
            initial="initial"
            className="w-full relative max-h-[300px] hidden lg:block"
          >
            <NextImage
              src="/twenty-six-north/cheers.jpg"
              alt="26 North Craft Kitchen"
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </motion.div>
          <motion.div
            ref={ref}
            animate={controls}
            variants={variant4}
            initial="initial"
            className="w-full h-ful relative"
          >
            <Image
              src="/twenty-six-north/food_2.png"
              alt="26 North Craft Kitchen"
            />
          </motion.div>
        </div>
      </div>
    </Element>
  );
};
