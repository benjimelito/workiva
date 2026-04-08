import { cva, type VariantProps } from "class-variance-authority";

/**
 * Link2 Variants
 * Extracted from: https://www.workiva.com/fr/blog/building-risk-assessment-matrix
 * Usage count: 1x
 */
export const link2Variants = cva(
  // Base styles observed
  "btn-link fancy-underline processed",
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

export type Link2Variants = VariantProps<typeof link2Variants>;
