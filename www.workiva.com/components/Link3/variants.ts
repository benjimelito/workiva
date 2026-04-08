import { cva, type VariantProps } from "class-variance-authority";

/**
 * Link3 Variants
 * Extracted from: https://www.workiva.com/fr/blog/building-risk-assessment-matrix, https://www.workiva.com/es-es/blog/5-steps-effective-strategic-risk-management
 * Usage count: 2x
 */
export const link3Variants = cva(
  // Base styles observed
  "button-marketo-event btn btn-primary",
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

export type Link3Variants = VariantProps<typeof link3Variants>;
