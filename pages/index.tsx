import ArrowSmDown from "@/components/icons/arrow-sm-down";
import ChevronDown from "@/components/icons/chevron-down";
import TextContainer from "@/components/text/text-container";
import TextHeadingPrimary from "@/components/text/text-heading-primary";
import Image from "next/image";
import React from "react";
import TextBody from "@/components/text/text-body";
import ButtonPrimary from "@/components/button/button-primary";
import ContentWrapper from "@/components/content/content-wrapper";
import ContentPanel from "@/components/content/content-panel";
import ContentContainer from "@/components/content/content-container";
import TextHeadingSecondary from "@/components/text/text-heading-secondary";
import ImageWrapper from "@/components/image/image-wrapper";

export default function Landing() {
  return (
    <>
      <section className="h-screen w-screen bg-slate-500 grid place-items-center">
        <div className="w-full h-full bg-gradient-to-b from-[#0000005a] from-30% to-transparent z-[1] absolute" />
        <Image
          src="/header.jpeg"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="header"
          className="z-0"
        />
        <div className="z-10 relative w-full max-w-[500px] grid place-items-center gap-y-8 px-4 box-border">
          <h1 className="uppercase text-header-xs md:text-header-md lg:text-header-lg font-prata text-center text-white leading-header">
            Progress in motion
          </h1>
          <p className="text-center font-poppins text-white leading-body">
            Dive into updates & behind-the-scenes of our initiatives redefining
            Hunters Run
          </p>
          <button className="flex bg-red-50 text-white bg-transparent border border-white px-4 py-2  md:px-8 md:py-4 text-xs md:text-sm uppercase leading-body items-center gap-x-2 md:gap-x-4 tracking-[.245rem] font-[700]">
            Explore{" "}
            <ArrowSmDown className="h-[1.25rem] w-[1.25rem] stroke-white stroke-2" />
          </button>
        </div>
      </section>
      <section className="py-[200px]">
        <ContentWrapper>
          <ContentContainer>
            <ContentPanel>
              <TextContainer>
                <TextHeadingPrimary number={1}>
                  26° NORTH
                  <br /> CRAFT KITCHEN
                </TextHeadingPrimary>
                <TextBody>
                  At 26° North, you’ll find a carefully crafted menu
                  complemented by hand-selected fine wines, craft cocktails and
                  exceptional service.
                </TextBody>
                <ButtonPrimary>Read More</ButtonPrimary>
              </TextContainer>
            </ContentPanel>
            <ContentPanel>
              <ImageWrapper>
                <Image
                  src="/header.jpeg"
                  fill
                  alt="26 North Craft Kitchen"
                  objectFit="cover"
                  objectPosition="center"
                />
              </ImageWrapper>
            </ContentPanel>
          </ContentContainer>
          <div className="grid gap-y-8">
            <TextHeadingSecondary heading="2023 - 2024 Season">
              Indulge in culinary excellence.
            </TextHeadingSecondary>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 h-[300px]">
              <div className="w-full h-full relative hidden md:block">
                <Image
                  src="/header.jpeg"
                  alt="26 North Craft Kitchen"
                  objectFit="cover"
                  objectPosition="center"
                  fill
                />
              </div>
              <div className="w-full relative max-h-[300px] hidden lg:block">
                <Image
                  src="/header.jpeg"
                  alt="26 North Craft Kitchen"
                  objectFit="cover"
                  objectPosition="center"
                  fill
                />
              </div>
              <div className="w-full h-ful relative">
                <Image
                  src="/header.jpeg"
                  alt="26 North Craft Kitchen"
                  objectFit="cover"
                  objectPosition="center"
                  fill
                />
              </div>
            </div>
          </div>
          <ContentContainer reverse>
            <ContentPanel>
              <TextContainer>
                <TextHeadingSecondary>
                  Elevate your dining experience.
                </TextHeadingSecondary>
                <TextBody>
                  26° North uncorks an intimate and artisanal experience for our
                  membership with seasonally sources ingredients.
                </TextBody>
                <ButtonPrimary>Read More</ButtonPrimary>
              </TextContainer>
            </ContentPanel>
            <ContentPanel>
              <ImageWrapper>
                <Image
                  src="/header.jpeg"
                  fill
                  alt="26 North Craft Kitchen"
                  objectFit="cover"
                  objectPosition="center"
                />
              </ImageWrapper>
            </ContentPanel>
          </ContentContainer>
          <ChevronDown className="w-12 h-12 m-auto stroke-2 stroke-blue-800 cursor-pointer" />
        </ContentWrapper>
      </section>
    </>
  );
}
