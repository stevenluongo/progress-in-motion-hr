import Image from "next/image";
import TextContainer from "../text/text-container";
import TextBody from "../text/text-body";
import ArrowSmDown from "../icons/arrow-sm-down";
import { scroller } from "react-scroll";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";

const Hero = () => {
  const { ref: myRef, inView } = useInView({ threshold: 0 });
  const controls = useAnimation();

  const variant = {
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 40, damping: 10 },
    },
    initial: { opacity: 0, x: 100 },
  };

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        controls.start("visible");
      });
    }
  }, [inView, controls]);

  const executeScroll = () => {
    scroller.scrollTo("twenty-six-north", {
      duration: 1500,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: 0,
    });
  };
  return (
    <section className="h-screen grid place-items-center bg-black">
      <div className="w-full h-full bg-gradient-to-b from-[#0000005a] from-30% to-transparent z-[1] absolute top-0 left-0" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 4,
        }}
        className="z-0 absolute w-full h-full"
      >
        <Image
          src="/header.jpeg"
          alt="header"
          className="z-0"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </motion.div>
      <TextContainer className="z-10 max-w-[500px] md:items-center px-8">
        <motion.h1
          initial={{ opacity: 0, y: 120 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 20,
          }}
          className="uppercase text-header-xs md:text-header-md lg:text-header-lg font-prata text-center text-white leading-header"
        >
          Progress in motion
        </motion.h1>
        <TextBody
          initial={{ opacity: 0, y: 140 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 20,
          }}
          className="text-center"
          light
        >
          Dive into updates & behind-the-scenes of our initiatives redefining
          Hunters Run
        </TextBody>
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 36,
            damping: 20,
          }}
        >
          <button
            onClick={executeScroll}
            className="relative inline-flex items-center justify-center overflow-hidden font-medium text-white transition duration-300 ease-out border bg-transparent shadow-md group px-4 py-2  md:px-10 md:py-4"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full duration-300 -translate-x-full bg-white group-hover:translate-x-0 ease">
              <ArrowSmDown className="h-[1.25rem] w-[1.25rem] stroke-2 stroke-blue-800" />
            </span>
            <span className="absolute flex justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease text-xs md:text-sm uppercase leading-body items-center tracking-[.245rem] font-[700]">
              EXPLORE
            </span>
            <span className="relative invisible">EXPLORE</span>
          </button>
        </motion.div>
      </TextContainer>
    </section>
  );
};

export default Hero;
