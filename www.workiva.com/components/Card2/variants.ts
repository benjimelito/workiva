import { cva, type VariantProps } from "class-variance-authority";

/**
 * Card2 Variants
 * Extracted from: https://www.workiva.com, https://www.workiva.com/fr
 * Usage count: 2x
 */
export const card2Variants = cva(
  // Base styles observed
  "card bg-zesty-neue card-large card-with-link card-with-media",
  {
    variants: {
      variant: {
        default: "",
        // Add more variants based on observed patterns
      },
      size: {
        default: "",
        // Add size variants if detected
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export type Card2Variants = VariantProps<typeof card2Variants>;
