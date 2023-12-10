import type { Meta, StoryObj } from "@storybook/react";

import Button from "../components/ui/button";

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
    icon: "mail",
  },
};

export const Photograph: Story = {
  args: {
    children: "View before",
    icon: "photograph",
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
    icon: "mail",
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
