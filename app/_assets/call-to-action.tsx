"use client";

import Container from "@/components/layout/container";
import { MotionBody, MotionScript, MotionButton } from "@/components/motion";
import { useAnimationInView } from "@/hooks/useAnimationInView";
import { translateY } from "@/utils/variants";

const CallToAction = () => {
  const { ref, controls } = useAnimationInView({
    delay: 500,
    margin: "-150px -150px",
  });
  return (
    <section className="py-24 bg-blue-100" ref={ref}>
      <Container className="flex flex-col items-center gap-y-8">
        <MotionScript
          animate={controls}
          variants={translateY({ delay: 0 })}
          initial="initial"
        >
          stay tuned
        </MotionScript>
        <MotionBody
          animate={controls}
          variants={translateY({ delay: 0.25 })}
          initial="initial"
          className="text-center max-w-[400px]"
        >
          Join our newsletter and be informed of our news and exceptional new
          projects.
        </MotionBody>
        <MotionButton
          animate={controls}
          variants={translateY({ delay: 0.5 })}
          initial="initial"
          className="w-full xs:w-fit"
          icon="mail"
        >
          Subscribe
        </MotionButton>
      </Container>
    </section>
  );
};

export default CallToAction;
