import Image from "next/image";
import TextContainer from "../text/text-container";
import TextBody from "../text/text-body";
import ArrowSmDown from "../icons/arrow-sm-down";

const Hero = () => {
  return (
    <section className="h-screen w-screen grid place-items-center">
      <div className="w-full h-full bg-gradient-to-b from-[#0000005a] from-30% to-transparent z-[1] absolute top-0 left-0" />
      <Image
        src="/header.jpeg"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        alt="header"
        className="z-0"
      />
      <TextContainer className="z-10 max-w-[500px] md:items-center px-8">
        <h1 className="uppercase text-header-xs md:text-header-md lg:text-header-lg font-prata text-center text-white leading-header">
          Progress in motion
        </h1>
        <TextBody className="text-center" light>
          Dive into updates & behind-the-scenes of our initiatives redefining
          Hunters Run
        </TextBody>
        <button className="flex bg-red-50 text-white bg-transparent border border-white px-4 py-2  md:px-8 md:py-4 text-xs md:text-sm uppercase leading-body items-center gap-x-2 md:gap-x-4 tracking-[.245rem] font-[700]">
          Explore{" "}
          <ArrowSmDown className="h-[1.25rem] w-[1.25rem] stroke-white stroke-2" />
        </button>
      </TextContainer>
    </section>
  );
};

export default Hero;
