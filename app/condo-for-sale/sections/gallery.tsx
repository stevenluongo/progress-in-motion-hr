"use client";

import Container from "@/components/layout/container";
import { MotionHeaderContainer } from "@/components/motion";
import { Script, TitleSmall } from "@/components/common/typography";
import { useAnimationInView } from "@/hooks/useAnimationInView";
import { translateY } from "@/utils/variants";

const Gallery = () => {
  const { ref, controls } = useAnimationInView({
    margin: "-150px -150px",
    delay: 750,
  });
  return (
    <Container className="flex justify-center">
      <MotionHeaderContainer
        ref={ref}
        animate={controls}
        variants={translateY({ delay: 0 })}
        initial="initial"
        className="!items-center"
      >
        <Script>welcome</Script>
        <TitleSmall>A Warm Entrance Awaits</TitleSmall>
      </MotionHeaderContainer>
    </Container>
  );
};

export default Gallery;
