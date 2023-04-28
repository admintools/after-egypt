// ./src/stories/Button.stories.ts
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/Button";

const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    rounded: {
      control: "select",
      options: ["none", "sm", "md", "lg", "xl", "2xl", "full"],
    },
    label: {
      control: "text",
    },
    variant: {
      control: "select",
      options: ["outline", "solid"],
    },
    borderWidth: {
      control: "select",
      options: ["border", "border-2", "border-4"],
    },
    fontWeight: {
      control: "select",
      options: [
        "hairline",
        "thin",
        "light",
        "normal",
        "medium",
        "semibold",
        "bold",
        "extrabold",
      ],
    },
    backgroundColor: {
      control: "color",
    },
    borderColor: {
      control: "color",
    },
    fontColor: {
      control: "color",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: "Button",
    rounded: "none",
    borderWidth: "border",
  },
};
