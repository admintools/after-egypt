// ./src/stories/Button.tsx

import React, { useMemo } from "react";

type ButtonSize = "small" | "medium" | "large";
type ButtonRounded = "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
type ButtonProps = {
  primary?: boolean;
  size?: ButtonSize;
  rounded?: ButtonRounded;
  label: React.ReactNode;
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

const getModeClasses = (isPrimary: boolean): string =>
  isPrimary
    ? "text-white bg-pink-600 border-pink-600 dark:bg-pink-700 dark:border-pink-700"
    : "text-slate-700 bg-transparent border-slate-700 dark:text-white dark:border-white";

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
  }
};

const BASE_BUTTON_CLASSES =
  "cursor-pointer border-2 font-bold leading-none inline-block";

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = "medium",
  rounded = "none",
  label,
  ...props
}) => {
  const computedClasses = useMemo(() => {
    const modeClass = getModeClasses(primary);
    const sizeClass = getSizeClasses(size);
    const roundedClass = getRoundedClasses(rounded);

    return `${BASE_BUTTON_CLASSES} ${modeClass} ${sizeClass} ${roundedClass}`;
  }, [primary, size, rounded]);

  return (
    <button type="button" className={computedClasses} {...props}>
      {label}
    </button>
  );
};
