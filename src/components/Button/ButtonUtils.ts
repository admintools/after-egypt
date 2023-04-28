import {
  ButtonSize,
  ButtonRounded,
  ButtonVariant,
  ButtonFontWeight,
} from "./Button.types";

/**
 * Returns the appropriate size classes based on the ButtonSize.
 * @param size - ButtonSize enum value
 * @returns string containing the appropriate size classes
 */
export const getSizeClasses = (size: ButtonSize): string => {
  switch (size) {
    case "small":
      return "px-4 py-2";
    case "large":
      return "px-6 py-3";
    default:
      return "px-5 py-2.5";
  }
};

/**
 * Returns the appropriate rounded classes based on the ButtonRounded.
 * @param rounded - ButtonRounded enum value
 * @returns string containing the appropriate rounded classes
 */
export const getRoundedClasses = (rounded: ButtonRounded): string => {
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

/**
 * Returns the appropriate variant classes based on the ButtonVariant.
 * @param variant - ButtonVariant enum value
 * @param backgroundColor - Custom background color
 * @param borderColor - Custom border color
 * @returns string containing the appropriate variant classes
 */
export const getVariantClasses = (
  variant: ButtonVariant,
  backgroundColor?: string,
  borderColor?: string,
): string => {
  const defaultBgColor =
    variant === "outline"
      ? "bg-transparent text-slate-700 border-stone-900 dark:text-stone-900 dark:border-stone-100"
      : "bg-slate-700 text-white dark:bg-stone-100 dark:text-stone-900";

  return backgroundColor || borderColor ? "" : defaultBgColor;
};

/**
 * Returns the appropriate font weight classes based on the ButtonFontWeight.
 * @param fontWeight - ButtonFontWeight enum value
 * @returns string containing the appropriate font weight classes
 */
export const getFontWeightClasses = (fontWeight: ButtonFontWeight): string => {
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
