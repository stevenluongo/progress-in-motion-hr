import ChevronDown from "@/components/icons/chevron-down";
import TextContainer from "@/components/text/text-container";
import TextHeadingPrimary from "@/components/text/text-heading-primary";
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
import Image from "../image/full-image";
import { useAnimation, motion } from "framer-motion";
import { useRef } from "react";
import { useAnimationInView } from "@/hooks/useAnimationInView";
import { opacity, translateY } from "@/utils/variants";

const BarLounge = () => {
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
    <section className="py-[200px]">
      <ContentWrapper>
        <ContentContainer reverse ref={headerRef}>
          <ContentPanel
            animate={headerControls}
            initial="initial"
            variants={translateY(0.2)}
          >
            <TextContainer>
              <TextHeadingPrimary number={4}>Bar Lounge</TextHeadingPrimary>
              <TextBody>
                Our Bar Lounge is more than just a place to unwind; it&apos;s a
                canvas of camaraderie, where conversations flow as freely as the
                libations. With the stroke of renovation magic, we are crafting
                a space that harmoniously blends modern touches with comfort.
              </TextBody>
              <ButtonPrimary scrollTo="bar-lounge-discover" offset={-100}>
                Read More
              </ButtonPrimary>
            </TextContainer>
          </ContentPanel>
          <ContentPanel
            animate={headerControls}
            initial="initial"
            variants={translateY(0.4)}
          >
            <ImageWrapper>
              <Image
                src="/bar-lounge/bar_1.png"
                alt="First conceptual rendering of the bar lounge"
              />
            </ImageWrapper>
          </ContentPanel>
        </ContentContainer>
        <Element name="bar-lounge-discover">
          <div className="grid gap-y-8" ref={discoverRef}>
            <TextHeadingSecondary
              heading="2023 - 2024 Season"
              animate={discoverControls}
              initial="initial"
              variants={opacity}
            >
              Where conversations flow freely
            </TextHeadingSecondary>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 h-[300px]">
              <motion.div
                animate={discoverControls}
                variants={translateY(0.2)}
                initial="initial"
                className="w-full h-full relative hidden md:block"
              >
                <Image
                  src="/bar-lounge/cocktail.jpg"
                  alt="Cocktail at the bar"
                />
              </motion.div>
              <motion.div
                animate={discoverControls}
                variants={translateY(0.4)}
                initial="initial"
                className="w-full relative max-h-[300px] hidden lg:block"
              >
                <Image src="/bar-lounge/drinks.jpg" alt="Drinks at the bar" />
              </motion.div>
              <motion.div
                animate={discoverControls}
                variants={translateY(0.6)}
                initial="initial"
                className="w-full h-ful relative"
              >
                <Image
                  src="/bar-lounge/talking.jpg"
                  alt="People talking at the bar"
                />
              </motion.div>
            </div>
          </div>
        </Element>
        <ContentContainer ref={footerRef}>
          <ContentPanel
            variants={translateY(0.2)}
            animate={footerControls}
            initial="initial"
          >
            <TextContainer>
              <TextHeadingSecondary>Sip, savor, and relax</TextHeadingSecondary>
              <TextBody>
                Step into a space that seamlessly marries comfort and style,
                offering an inviting sanctuary for both intimate conversations
                and vibrant gatherings. The newly renovated Bar Lounge boasts a
                harmonious fusion of textures, colors, and furnishings that
                exude an air of casual elegance.
              </TextBody>
              <FeaturesContainer>
                <FeaturesItem>Additional bar seating</FeaturesItem>
                <FeaturesItem>Refreshed upholstery</FeaturesItem>
                <FeaturesItem>Open floor plan</FeaturesItem>
                <FeaturesItem>Modern lighting</FeaturesItem>
                <FeaturesItem>Welcoming host station</FeaturesItem>
                <FeaturesItem>New carpeting</FeaturesItem>
              </FeaturesContainer>
            </TextContainer>
          </ContentPanel>
          <ContentPanel
            variants={translateY(0.4)}
            animate={footerControls}
            initial="initial"
          >
            <ImageWrapper>
              <Image
                src="/bar-lounge/bar_2.png"
                alt="Second conceptual rendering of the bar lounge"
              />
            </ImageWrapper>
          </ContentPanel>
        </ContentContainer>
        <ChevronDown
          scrollTo="east-course"
          className="w-12 h-12 m-auto stroke-2 stroke-blue-800 cursor-pointer"
        />
      </ContentWrapper>
    </section>
  );
};

export default BarLounge;
