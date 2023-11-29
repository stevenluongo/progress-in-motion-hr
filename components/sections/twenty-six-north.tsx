import ButtonPrimary from "@/components/button/button-primary";
import ContentContainer from "@/components/content/content-container";
import ContentPanel from "@/components/content/content-panel";
import ContentWrapper from "@/components/content/content-wrapper";
import ImageWrapper from "@/components/image/image-wrapper";
import TextBody from "@/components/text/text-body";
import TextContainer from "@/components/text/text-container";
import TextHeadingPrimary from "@/components/text/text-heading-primary";
import TextHeadingSecondary from "@/components/text/text-heading-secondary";
import FeaturesContainer from "@/components/features/features-container";
import FeaturesItem from "@/components/features/features-item";
import ChevronDown from "@/components/icons/chevron-down";
import Image from "@/components/image/full-image";
import { Element } from "react-scroll";
import { useRef } from "react";
import { useAnimation, motion } from "framer-motion";
import { useAnimationInView } from "@/hooks/useAnimationInView";
import { opacity, translateY } from "@/utils/variants";

const TwentySixNorth = () => {
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
    <Element name="twenty-six-north">
      <section className="py-24 md:py-48">
        <ContentWrapper>
          <ContentContainer ref={headerRef}>
            <ContentPanel
              variants={translateY(0.2)}
              animate={headerControls}
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
                <ButtonPrimary
                  offset={-200}
                  scrollTo="twenty-six-north-discover"
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
                  src="/twenty-six-north/host.jpg"
                  alt="26 North Craft Kitchen"
                />
              </ImageWrapper>
            </ContentPanel>
          </ContentContainer>

          <Element name="twenty-six-north-discover">
            <div className="grid gap-y-8" ref={discoverRef}>
              <TextHeadingSecondary
                animate={discoverControls}
                initial="initial"
                variants={opacity}
                heading="2023 - 2024 Season"
              >
                Indulge in culinary excellence.
              </TextHeadingSecondary>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 h-[300px]">
                <motion.div
                  animate={discoverControls}
                  variants={translateY(0.2)}
                  initial="initial"
                  className="w-full h-full relative hidden md:block"
                >
                  <Image
                    src="/twenty-six-north/food_1.JPEG"
                    alt="26 North Craft Kitchen"
                  />
                </motion.div>
                <motion.div
                  animate={discoverControls}
                  variants={translateY(0.4)}
                  initial="initial"
                  className="w-full relative max-h-[300px] hidden lg:block"
                >
                  <Image
                    src="/twenty-six-north/cheers.jpg"
                    alt="26 North Craft Kitchen"
                  />
                </motion.div>
                <motion.div
                  animate={discoverControls}
                  variants={translateY(0.6)}
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
          <ContentContainer reverse ref={footerRef}>
            <ContentPanel
              variants={translateY(0.4)}
              animate={footerControls}
              initial="initial"
            >
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
            <ContentPanel
              variants={translateY(0.2)}
              animate={footerControls}
              initial="initial"
            >
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
