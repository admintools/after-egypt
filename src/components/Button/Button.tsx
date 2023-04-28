// ./src/components/Button/Button.tsx
import React, { useMemo } from "react";
import { ButtonProps } from "./Button.types";
import {
  getSizeClasses,
  getRoundedClasses,
  getVariantClasses,
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
