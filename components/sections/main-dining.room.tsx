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
import Image from "@/components/image/full-image";
import ImageGrid from "@/components/image/image-grid";
import { useAnimation } from "framer-motion";
import { useRef } from "react";
import { useAnimationInView } from "@/hooks/useAnimationInView";
import { translateY } from "@/utils/variants";

const MainDiningRoom = () => {
  const headerControls = useAnimation();
  const footerControls = useAnimation();

  const headerRef = useRef(null);
  const footerRef = useRef(null);

  useAnimationInView(headerRef, headerControls);
  useAnimationInView(footerRef, footerControls);

  return (
    <Element name="main-dining-room">
      <section className="py-24 md:py-48">
        <ContentWrapper>
          <ContentContainer ref={headerRef}>
            <ContentPanel
              variants={translateY(0.2)}
              animate={headerControls}
              initial="initial"
            >
              <TextContainer>
                <TextHeadingPrimary number={3}>
                  Main Dining Room
                </TextHeadingPrimary>
                <TextBody>
                  The Main Dining Room has always been the heart of our culinary
                  affairs, where flavors come to life and memories are made.
                  With this refurbishment, we&apos;re not just upgrading the
                  setting; we&apos;re crafting an event space that reflects the
                  artistry of our Club and the warmth of our hospitality.
                </TextBody>
                <ButtonPrimary scrollTo="main-dining-room-discover">
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
                  src="/main-dining-room/dining_1.png"
                  alt="Conceptual rendering of the main dining room"
                />
              </ImageWrapper>
            </ContentPanel>
          </ContentContainer>
          <Element name="main-dining-room-discover">
            <ContentContainer reverse ref={footerRef}>
              <ContentPanel
                variants={translateY(0.2)}
                animate={footerControls}
                initial="initial"
              >
                <TextContainer>
                  <TextHeadingSecondary heading="2023 - 2024 Season">
                    A taste of tomorrow
                  </TextHeadingSecondary>
                  <TextBody>
                    Whether you&apos;re planning a grand celebration, a company
                    gala, or a corporate meeting, our banquet space can be
                    tailored to suit your needs. With flexible seating
                    arrangements and state-of-the-art audiovisual equipment,
                    we&apos;ve got you covered.
                  </TextBody>
                  <FeaturesContainer>
                    <FeaturesItem icon="carpet">New carpeting</FeaturesItem>
                    <FeaturesItem icon="infrastructure">
                      Improved infrastructure
                    </FeaturesItem>
                    <FeaturesItem icon="seating">Updated seating</FeaturesItem>
                    <FeaturesItem icon="window">
                      Modern furnishings
                    </FeaturesItem>
                  </FeaturesContainer>
                </TextContainer>
              </ContentPanel>
              <ContentPanel>
                <ImageGrid>
                  <ImageWrapper
                    variants={translateY(0.4)}
                    animate={footerControls}
                    initial="initial"
                  >
                    <Image
                      src="/main-dining-room/plate.png"
                      alt="26 North Craft Kitchen"
                    />
                  </ImageWrapper>
                  <ImageWrapper
                    variants={translateY(0.6)}
                    animate={footerControls}
                    initial="initial"
                  >
                    <Image
                      src="/main-dining-room/dining_2.png"
                      alt="Second conceptual rendering of the main dining room"
                    />
                  </ImageWrapper>
                </ImageGrid>
              </ContentPanel>
            </ContentContainer>
          </Element>
        </ContentWrapper>
      </section>
    </Element>
  );
};

export default MainDiningRoom;
