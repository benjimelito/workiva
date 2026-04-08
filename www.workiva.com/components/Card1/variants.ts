import { cva, type VariantProps } from "class-variance-authority";

/**
 * Card1 Variants
 * Extracted from: https://www.workiva.com/sg/security
 * Usage count: 1x
 */
export const card1Variants = cva(
  // Base styles observed
  "container-fluid callout-cards-container px-100 pb-104",
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

export type Card1Variants = VariantProps<typeof card1Variants>;
