import type { Meta, StoryObj } from "@storybook/react";

import Button from "../components/ui/button";
import { faEnvelope, faImage } from "@fortawesome/free-solid-svg-icons";

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "subscribe",
    icon: faEnvelope,
  },
};

export const Photograph: Story = {
  args: {
    children: "View before",
    icon: faImage,
  },
};

export const Video: Story = {
  args: {
    children: "watch video",
    icon: "video",
  },
};

export const Secondary: Story = {
  args: {
    children: "View before",
    secondary: true,
    icon: faEnvelope,
  },
};

export const Light: Story = {
  args: {
    children: "View before",
    light: true,
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};
