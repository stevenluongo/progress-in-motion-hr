"use client";

import Container from "@/components/layout/container";
import TextContainer from "@/components/layout/text-container";
import { Element } from "react-scroll";
import { executeScroll } from "@/utils/scroll";
import {
  MotionImage,
  MotionTitleLarge,
  MotionWrapper,
} from "@/components/motion";
import { translateY } from "@/utils/variants";
import { useAnimationInView } from "@/hooks/useAnimationInView";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import Button from "@/components/ui/button";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  const { ref, controls } = useAnimationInView({});
  const isMobile = useMediaQuery("(max-width: 640px)");

  return (
    <Element
      name="hero"
      className="bg-blue-900 max-w-screen h-screen overflow-x-hidden"
    >
      <Container ref={ref} className="grid place-items-center h-full">
        <div className="max-w-screen w-full h-screen bg-gradient-to-b from-[#00000089] z-10 from-30% to-transparent absolute top-0 left-0" />
        <div className="max-w-screen h-screen absolute top-0 left-0 right-0 bottom-0 overflow-hidden">
          <MotionImage
            src="https://progress-in-motion.s3.amazonaws.com/30D/living-6.jpg"
            alt="Image of the renovated 26 North restaurant"
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: -5, opacity: 0 }}
            priority
            transition={{
              type: "linear",
              duration: 2,
            }}
          />
        </div>
        <TextContainer className="z-20 !items-center">
          <MotionTitleLarge
            className="!text-center text-white"
            animate={controls}
            variants={translateY({ delay: 0 })}
            initial="initial"
          >
            30D Southport <br /> Condo For Sale
          </MotionTitleLarge>
          <MotionWrapper
            animate={controls}
            variants={translateY({ delay: 0.35 })}
            initial="initial"
          >
            <Button
              onClick={() =>
                executeScroll({
                  to: "twenty-six-north",
                  offset: isMobile ? -100 : -200,
                })
              }
              light
              className="w-fit"
              icon={faCaretDown}
            >
              Learn More
            </Button>
          </MotionWrapper>
        </TextContainer>
      </Container>
    </Element>
  );
};

export default Hero;
