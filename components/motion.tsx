import { motion } from "framer-motion";
import HeaderContainer from "./layout/header-container";
import { Body, Script, TitleLarge } from "./ui/typography";
import ButtonGroup from "./ui/button-group";
import ImageWrapper from "./ui/image-wrapper";
import TextContainer from "./layout/text-container";
import Button from "./ui/button";
import Image from "./ui/image";
import Container from "./layout/container";

export const MotionHeaderContainer = motion(HeaderContainer);

export const MotionBody = motion(Body);

export const MotionButtonGroup = motion(ButtonGroup);

export const MotionImageWrapper = motion(ImageWrapper);

export const MotionTextContainer = motion(TextContainer);

export const MotionButton = motion(Button);

export const MotionTitleLarge = motion(TitleLarge);

export const MotionImage = motion(Image);

export const MotionContainer = motion(Container);

export const MotionScript = motion(Script);
