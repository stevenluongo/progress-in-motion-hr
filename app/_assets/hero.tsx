"use client";

import Container from "@/components/layout/container";
import TextContainer from "@/components/layout/text-container";
import { Element } from "react-scroll";
import { executeScroll } from "@/utils/scroll";
import {
  MotionButton,
  MotionImage,
  MotionTitleLarge,
} from "@/components/motion";
import { translateY } from "@/utils/variants";
import { useAnimationInView } from "@/hooks/useAnimationInView";

const Hero = () => {
  const { ref, controls } = useAnimationInView({});
  return (
    <Element name="hero" className="bg-blue-900">
      <Container
        ref={ref}
        className="h-screen w-screen overflow-hidden grid place-items-center"
      >
        <div className="w-full h-full bg-gradient-to-b from-[#00000089] z-10 from-30% to-transparent absolute top-0 left-0" />
        <div className="w-screen h-screen absolute top-0 left-0 overflow-hidden">
          <MotionImage
            src="https://progress-in-motion.s3.amazonaws.com/26+North/26North1.jpg"
            alt="Image of the renovated 26 North restaurant"
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: -5, opacity: 0 }}
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
            Progress in
            <br /> Motion
          </MotionTitleLarge>
          <MotionButton
            onClick={() => executeScroll("twenty-six-north")}
            light
            className="w-fit"
            animate={controls}
            variants={translateY({ delay: 0.35 })}
            initial="initial"
          >
            explore
          </MotionButton>
        </TextContainer>
      </Container>
    </Element>
  );
};

export default Hero;
