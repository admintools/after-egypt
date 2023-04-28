// ./src/components/Button/Button.types.ts
import React from "react";

export type ButtonSize = "small" | "medium" | "large";
export type ButtonRounded = "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
export type ButtonVariant = "outline" | "solid";
export type ButtonBorderWidth = "border" | "border-2" | "border-4";
export type ButtonFontWeight =
  | "hairline"
  | "thin"
  | "light"
  | "normal"
  | "medium"
  | "semibold"
  | "bold"
  | "extrabold";

export type ButtonProps = {
  size?: ButtonSize;
  rounded?: ButtonRounded;
  label: React.ReactNode;
  variant?: ButtonVariant;
  borderWidth?: ButtonBorderWidth;
  fontWeight?: ButtonFontWeight;
  backgroundColor?: string;
  borderColor?: string;
  fontColor?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
