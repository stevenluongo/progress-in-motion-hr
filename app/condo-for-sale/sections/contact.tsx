"use client";

import Container from "@/components/layout/container";
import ContentWrapper from "@/components/layout/content-wrapper";
import TextContainer from "@/components/layout/text-container";
import { ScriptSmall, TitleSmall } from "@/components/ui/typography";
import Image from "@/components/ui/image";
import { Element } from "react-scroll";
import { useAnimationInView } from "@/hooks/useAnimationInView";
import {
  MotionHeaderContainer,
  MotionImageWrapper,
  MotionWrapper,
} from "@/components/motion";
import { translateX, translateY } from "@/utils/variants";
import {
  faAlignCenter,
  faBriefcase,
  faBuilding,
  faCity,
  faComment,
  faEnvelope,
  faEnvelopeCircleCheck,
  faEnvelopeOpen,
  faPhone,
  faPhoneVolume,
  faSquarePhone,
  faUser,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { z } from "zod";
import { useZodForm } from "@/hooks/useZodForm";
import FormInput from "@/components/ui/form/form-input";
import FormTextArea from "@/components/ui/form/form-textarea";
import FormButton from "@/components/ui/form/button";
import ImageBackground from "@/components/ui/image-background";
import { sendEmail } from "@/lib/actions";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const contactValidationSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }).max(100, {
    message: "Name must be less than 100 characters",
  }),
  company: z
    .string()
    .max(100, {
      message: "Company name must be less than 100 characters",
    })
    .optional(),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z
    .string()
    .min(10, { message: "Invalid phone number" })
    .max(15, { message: "Invalid phone number" }),
  message: z.string().min(1, { message: "Message is required" }).max(1000, {
    message: "Message must be less than 1000 characters",
  }),
});

const ContactSection = () => {
  const [response, setResponse] = useState<{
    body: string;
    error: boolean;
  }>({
    body: "",
    error: false,
  });
  const { ref, controls } = useAnimationInView({
    margin: "-150px -150px",
    delay: 750,
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useZodForm({
    schema: contactValidationSchema,
  });

  const action: () => void = handleSubmit(async (data) => {
    try {
      const fd = new FormData();
      fd.append("name", data.name);
      if (data.company) fd.append("company", data.company);
      fd.append("email", data.email);
      fd.append("phone", data.phone);
      fd.append("message", data.message);
      const res = JSON.parse(await sendEmail(fd));
      if (res.MessageId) {
        setResponse({
          body: "Message sent successfully",
          error: false,
        });
        setTimeout(() => {
          setResponse({
            body: "",
            error: false,
          });
        }, 5000);
      }
      reset();
    } catch (e) {
      setResponse({
        body: "An error occurred, please try again later",
        error: true,
      });
    }
  });

  return (
    <section className=" overflow-x-hidden">
      <Container className="py-24 sm:py-36 lg:py-48">
        <Element name="contact">
          <ContentWrapper ref={ref}>
            <TextContainer className="md:order-2">
              <MotionHeaderContainer
                animate={controls}
                variants={translateY({ delay: 0 })}
                initial="initial"
              >
                <TitleSmall>Interested ? Let&apos;s Chat.</TitleSmall>
              </MotionHeaderContainer>
              <form className="w-full flex flex-col gap-y-2" action={action}>
                <motion.div
                  animate={controls}
                  variants={translateY({ delay: 0.15 })}
                  initial="initial"
                  className="flex flex-col md:flex-row gap-4"
                >
                  <FormInput
                    placeholder="Name"
                    error={errors.name}
                    icon={faUser}
                    {...register("name")}
                  >
                    <FormInput.Label>Name</FormInput.Label>
                  </FormInput>
                  <FormInput
                    placeholder="Company Name"
                    error={errors.company}
                    icon={faBuilding}
                    {...register("company")}
                  >
                    <FormInput.Label>Company Name (Opt)</FormInput.Label>
                  </FormInput>
                </motion.div>
                <motion.div
                  animate={controls}
                  variants={translateY({ delay: 0.35 })}
                  initial="initial"
                  className="flex flex-col md:flex-row gap-4"
                >
                  <FormInput
                    placeholder="Email Address"
                    error={errors.email}
                    icon={faEnvelopeOpen}
                    {...register("email")}
                  >
                    <FormInput.Label>Email Address</FormInput.Label>
                  </FormInput>
                  <FormInput
                    placeholder="(xxx) xxx-xxxx"
                    error={errors.phone}
                    icon={faPhoneVolume}
                    {...register("phone")}
                  >
                    <FormInput.Label>Phone Number</FormInput.Label>
                  </FormInput>
                </motion.div>
                <MotionWrapper
                  animate={controls}
                  variants={translateY({ delay: 0.55 })}
                  initial="initial"
                >
                  <FormTextArea
                    rows={3}
                    placeholder="How can we help ? ..."
                    error={errors.message}
                    icon={faComment}
                    {...register("message")}
                  >
                    <FormTextArea.Label>Message</FormTextArea.Label>
                  </FormTextArea>
                </MotionWrapper>
                <MotionWrapper
                  animate={controls}
                  variants={translateY({ delay: 0.75 })}
                  initial="initial"
                >
                  <FormButton className="mt-2 w-full md:w-fit" type="submit">
                    Send Message
                  </FormButton>
                </MotionWrapper>
                <p
                  className={twMerge(
                    "text-center text-primary",
                    response.error ? "text-red-500" : "text-green-500"
                  )}
                >
                  {response.body}
                </p>
              </form>
            </TextContainer>
            <MotionImageWrapper
              variants={translateX({ delay: 0.25 })}
              initial="initial"
              animate={controls}
              className="md:order-1 hidden md:block"
            >
              <ImageBackground />
              <Image
                src="https://progress-in-motion.s3.amazonaws.com/30D/kitchen-1.jpg"
                alt="Close up picture of a golf ball"
              />
            </MotionImageWrapper>
          </ContentWrapper>
        </Element>
      </Container>
    </section>
  );
};

export default ContactSection;
