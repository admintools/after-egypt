import React, { useMemo } from "react";
import { ButtonProps } from "./Button.types";
import {
  getSizeClasses,
  getRoundedClasses,
  getFontWeightClasses,
} from "./ButtonUtils";

const BASE_BUTTON_CLASSES = "cursor-pointer leading-none inline-block";

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  size = "medium",
  rounded = "full",
  label,
  variant = "outline",
  borderWidth = "border",
  fontWeight = "normal",
  backgroundColor,
  borderColor,
  ...props
}) => {
  const computedClasses = useMemo(() => {
    const sizeClass = getSizeClasses(size);
    const roundedClass = getRoundedClasses(rounded);
    const fontWeightClass = getFontWeightClasses(fontWeight);

    const bgColorClass = backgroundColor
      ? `bg-[${backgroundColor}]`
      : variant === "outline"
      ? "bg-transparent"
      : "bg-slate-700 dark:bg-stone-100";
    const textColorClass =
      variant === "outline"
        ? "text-slate-700 dark:text-stone-900"
        : "text-white";
    const borderColorClass = borderColor
      ? `border-[${borderColor}]`
      : variant === "outline"
      ? "border-stone-900 dark:border-stone-100"
      : "border-transparent";

    return `${BASE_BUTTON_CLASSES} ${sizeClass} ${roundedClass} ${bgColorClass} ${textColorClass} ${borderColorClass} ${borderWidth} ${fontWeightClass}`;
  }, [
    size,
    rounded,
    variant,
    borderWidth,
    fontWeight,
    backgroundColor,
    borderColor,
  ]);

  return (
    <button type="button" className={computedClasses} {...props}>
      {label}
    </button>
  );
};
