// ./src/components/Button/Button.tsx
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
  fontColor,
  ...props
}) => {
  const computedClasses = useMemo(() => {
    const sizeClass = getSizeClasses(size);
    const roundedClass = getRoundedClasses(rounded);
    const fontWeightClass = getFontWeightClasses(fontWeight);
    const bgColorClass = backgroundColor ? `bg-[${backgroundColor}]` : "";
    const borderColorClass = borderColor ? `border-[${borderColor}]` : "";
    const fontColorClass = fontColor ? `text-[${fontColor}]` : "";

    return `${BASE_BUTTON_CLASSES} ${sizeClass} ${roundedClass} ${borderWidth} ${fontWeightClass} ${bgColorClass} ${borderColorClass} ${fontColorClass}`;
  }, [
    size,
    rounded,
    borderWidth,
    fontWeight,
    backgroundColor,
    borderColor,
    fontColor,
  ]);

  return (
    <button type="button" className={computedClasses} {...props}>
      {label}
    </button>
  );
};
