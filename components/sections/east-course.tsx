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
import { Element } from "react-scroll";
import Image from "../image/full-image";
import { useAnimationInView } from "@/hooks/useAnimationInView";
import { useRef } from "react";
import { useAnimation } from "framer-motion";
import { opacity, translateY } from "@/utils/variants";

const EastCourse = () => {
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
    <Element name="east-course">
      <section className="py-[200px] bg-blue">
        <ContentWrapper>
          <ContentContainer light ref={headerRef}>
            <ContentPanel
              variants={translateY(0.2)}
              animate={headerControls}
              initial="initial"
            >
              <TextContainer>
                <TextHeadingPrimary number={5}>
                  East Course Renovation
                </TextHeadingPrimary>
                <TextBody>
                  Exciting changes are on the horizon as we proudly present the
                  East Golf Course Renovation Project. This endeavor marks a
                  thrilling chapter in our commitment to enhancing the golfing
                  adventure, where tradition meets innovation for an even more
                  enjoyable experience.
                </TextBody>
                <ButtonPrimary scrollTo="east-course-discover" offset={-200}>
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
                  src="/header.jpeg"
                  alt="Drone image of the East Course"
                />
              </ImageWrapper>
            </ContentPanel>
          </ContentContainer>
          <Element name="east-course-discover">
            <ContentContainer light reverse ref={discoverRef}>
              <ContentPanel
                variants={translateY(0.2)}
                animate={discoverControls}
                initial="initial"
              >
                <TextContainer>
                  <TextHeadingSecondary>
                    A fresh fairway forward
                  </TextHeadingSecondary>
                  <TextBody>
                    This project is a true reflection of our dedication to both
                    golf and nature. By revitalizing the East Golf Course,
                    we&apos;re ensuring that both avid golf enthusiasts and
                    newcomers can enjoy a fantastic golfing experience.
                  </TextBody>
                  <ButtonPrimary
                    onClick={() =>
                      window.open(
                        "https://www.huntersrun.net/documents/10184/14462025/East+Course+Renovation+Hole+by+Hole+Web+Booklet.pdf?t=1692393509574",
                        "_blank"
                      )
                    }
                  >
                    View the booklet
                  </ButtonPrimary>
                </TextContainer>
              </ContentPanel>
              <ContentPanel
                variants={translateY(0.4)}
                animate={discoverControls}
                initial="initial"
              >
                <ImageWrapper>
                  <Image
                    src="/east-course/map.png"
                    alt="Conceptual rendering of the updated East Course"
                  />
                </ImageWrapper>
              </ContentPanel>
            </ContentContainer>
          </Element>
          <div className="grid gap-y-8" ref={footerRef}>
            <TextHeadingSecondary
              heading="2023 - 2024 Season"
              light
              variants={opacity}
              animate={footerControls}
              initial="initial"
            >
              Reimagining the greens
            </TextHeadingSecondary>
            <div className="h-[300px]">
              <ImageWrapper
                full
                light
                variants={translateY(0.2)}
                animate={footerControls}
                initial="initial"
              >
                <Image
                  src="/east-course/footer.png"
                  alt="Putting green image of the East Course"
                />
              </ImageWrapper>
            </div>
          </div>
          <ChevronDown
            scrollTo="main-dining-room"
            className="w-12 h-12 m-auto stroke-2 stroke-white cursor-pointer"
          />
        </ContentWrapper>
      </section>
    </Element>
  );
};

export default EastCourse;
