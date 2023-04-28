// ./src/stories/Button.tsx

import React, { useMemo } from "react";

type ButtonSize = "small" | "medium" | "large";
type ButtonRounded = "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
type ButtonVariant = "outline" | "solid";
type ButtonBorderWidth = "border" | "border-2" | "border-4";
type ButtonFontWeight =
  | "hairline"
  | "thin"
  | "light"
  | "normal"
  | "medium"
  | "semibold"
  | "bold"
  | "extrabold";
type ButtonProps = {
  size?: ButtonSize;
  rounded?: ButtonRounded;
  label: React.ReactNode;
  variant?: ButtonVariant;
  borderWidth?: ButtonBorderWidth;
  fontWeight?: ButtonFontWeight;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const getSizeClasses = (size: ButtonSize): string => {
  switch (size) {
    case "small":
      return "px-4 py-2.5";
    case "large":
      return "px-6 py-3";
    default:
      return "px-5 py-2.5";
  }
};

const getRoundedClasses = (rounded: ButtonRounded): string => {
  switch (rounded) {
    case "none":
      return "rounded-none";
    case "sm":
      return "rounded-sm";
    case "md":
      return "rounded-md";
    case "lg":
      return "rounded-lg";
    case "xl":
      return "rounded-xl";
    case "2xl":
      return "rounded-2xl";
    case "full":
      return "rounded-full";
    default:
      return "rounded-none";
  }
};

const getVariantClasses = (variant: ButtonVariant): string => {
  switch (variant) {
    case "outline":
      return "bg-transparent text-slate-700 border-slate-700 dark:text-white dark:border-white";
    case "solid":
    default:
      return "bg-slate-700 text-white border-slate-700 dark:bg-white dark:text-slate-700";
  }
};

const getFontWeightClasses = (fontWeight: ButtonFontWeight): string => {
  switch (fontWeight) {
    case "hairline":
      return "font-hairline";
    case "thin":
      return "font-thin";
    case "light":
      return "font-light";
    case "normal":
      return "font-normal";
    case "medium":
      return "font-medium";
    case "semibold":
      return "font-semibold";
    case "bold":
      return "font-bold";
    case "extrabold":
      return "font-extrabold";
    default:
      return "font-normal";
  }
};

const BASE_BUTTON_CLASSES = "cursor-pointer leading-none inline-block";

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  size = "medium",
  rounded = "none",
  label,
  variant = "solid",
  borderWidth = "border",
  fontWeight = "normal",
  ...props
}) => {
  const computedClasses = useMemo(() => {
    const sizeClass = getSizeClasses(size);
    const roundedClass = getRoundedClasses(rounded);
    const variantClass = getVariantClasses(variant);
    const fontWeightClass = getFontWeightClasses(fontWeight);

    return `${BASE_BUTTON_CLASSES} ${sizeClass} ${roundedClass} ${variantClass} ${borderWidth} ${fontWeightClass}`;
  }, [size, rounded, variant, borderWidth, fontWeight]);

  return (
    <button type="button" className={computedClasses} {...props}>
      {label}
    </button>
  );
};
