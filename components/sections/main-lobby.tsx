import TextContainer from "@/components/text/text-container";
import TextHeadingPrimary from "@/components/text/text-heading-primary";
import Image from "next/image";
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
import { useAnimationInView } from "@/hooks/useAnimationInView";
import { useRef } from "react";
import { useAnimation } from "framer-motion";
import { translateY } from "@/utils/variants";

const MainLobby = () => {
  const headerControls = useAnimation();
  const footerControls = useAnimation();

  const headerRef = useRef(null);
  const footerRef = useRef(null);

  useAnimationInView(headerRef, headerControls);
  useAnimationInView(footerRef, footerControls);

  return (
    <Element name="main-lobby">
      <section className="py-24 md:py-48">
        <ContentWrapper>
          <ContentContainer ref={headerRef}>
            <ContentPanel
              animate={headerControls}
              initial="initial"
              variants={translateY(0.2)}
            >
              <TextContainer>
                <TextHeadingPrimary number={3}>Main Lobby</TextHeadingPrimary>
                <TextBody>
                  A bright transformation is underway, as we re-imagine and
                  refresh our current lobby space into a realm of quintessential
                  warmth and unpretentious sophistication. As we refresh our
                  lobby, we are also rejuvenating the heart of our club – a
                  space where connections begin, and the future unfolds in the
                  most graceful of ways.
                </TextBody>
                <ButtonPrimary scrollTo="main-lobby-discover" offset={-100}>
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
                  src="/lobby/lobby_1.png"
                  alt="First conceptual rendering of the lobby"
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              </ImageWrapper>
            </ContentPanel>
          </ContentContainer>
          <Element name="main-lobby-discover">
            <ContentContainer reverse ref={footerRef}>
              <ContentPanel
                animate={footerControls}
                initial="initial"
                variants={translateY(0.4)}
              >
                <TextContainer>
                  <TextHeadingSecondary heading="2023 - 2024 Season">
                    Elevating warmth & beauty
                  </TextHeadingSecondary>
                  <TextBody>
                    Witness the convergence of aesthetics and functionality,
                    where each element is thoughtfully chosen to create an
                    ambiance that greets our members and guests with
                    familiarity.
                  </TextBody>
                  <FeaturesContainer>
                    <FeaturesItem>Dedicated reception desk</FeaturesItem>
                    <FeaturesItem>Bright, inviting atmosphere</FeaturesItem>
                    <FeaturesItem>Modern furnishings</FeaturesItem>
                    <FeaturesItem>Multiple seating spaces</FeaturesItem>
                    <FeaturesItem>Communal, tech table</FeaturesItem>
                  </FeaturesContainer>
                </TextContainer>
              </ContentPanel>
              <ContentPanel
                animate={footerControls}
                initial="initial"
                variants={translateY(0.2)}
              >
                <ImageWrapper>
                  <Image
                    src="/lobby/lobby_2.png"
                    alt="Second conceptual rendering of the lobby"
                    fill
                    sizes="100vw"
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </ImageWrapper>
              </ContentPanel>
            </ContentContainer>
          </Element>
        </ContentWrapper>
      </section>
    </Element>
  );
};

export default MainLobby;
