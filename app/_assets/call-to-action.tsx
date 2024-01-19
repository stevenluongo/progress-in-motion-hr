"use client";

import Container from "@/components/layout/container";
import { MotionBody, MotionScript, MotionWrapper } from "@/components/motion";
import Button from "@/components/ui/button";
import { useAnimationInView } from "@/hooks/useAnimationInView";
import { translateY } from "@/utils/variants";
import { faContactCard } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const CallToAction = () => {
  const { ref, controls } = useAnimationInView({
    delay: 500,
    margin: "-150px -150px",
  });
  return (
    <section className="py-24 bg-blue-100 overflow-x-hidden" ref={ref}>
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
          Exciting progress is happening every day in many ways! Contact us for
          more information or to arrange a tour.
        </MotionBody>
        <Link
          aria-label="View the hnters run magazine"
          href="https://www.huntersrun.net/contact-info"
        >
          <MotionWrapper
            animate={controls}
            variants={translateY({ delay: 0.5 })}
            initial="initial"
          >
            <Button className="w-full xs:w-fit" icon={faContactCard}>
              Contact
            </Button>
          </MotionWrapper>
        </Link>
      </Container>
    </section>
  );
};

export default CallToAction;
