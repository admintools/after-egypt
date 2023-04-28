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

export const Default: Story = {
  args: {
    label: "Button",
    rounded: "none",
    borderWidth: "border",
  },
};

// Other examples...

export const FontWeightHairline: Story = {
  args: {
    label: "Font Weight Hairline",
    fontWeight: "hairline",
  },
};

export const FontWeightThin: Story = {
  args: {
    label: "Font Weight Thin",
    fontWeight: "thin",
  },
};

export const FontWeightLight: Story = {
  args: {
    label: "Font Weight Light",
    fontWeight: "light",
  },
};

export const FontWeightNormal: Story = {
  args: {
    label: "Font Weight Normal",
    fontWeight: "normal",
  },
};

export const FontWeightMedium: Story = {
  args: {
    label: "Font Weight Medium",
    fontWeight: "medium",
  },
};

export const FontWeightSemibold: Story = {
  args: {
    label: "Font Weight Semibold",
    fontWeight: "semibold",
  },
};

export const FontWeightBold: Story = {
  args: {
    label: "Font Weight Bold",
    fontWeight: "bold",
  },
};

export const FontWeightExtrabold: Story = {
  args: {
    label: "Font Weight Extrabold",
    fontWeight: "extrabold",
  },
};
