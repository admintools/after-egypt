// ./src/stories/Button.stories.ts

import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: {
      control: "color",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
    rounded: "default",
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
    rounded: "default",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Button",
    rounded: "default",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Button",
    rounded: "default",
  },
};

export const RoundedExamples: Story = {
  args: {
    label: "Button",
    rounded: "none",
  },
};
