import { cva, type VariantProps } from "class-variance-authority";

/**
 * Modal3 Variants
 * Extracted from: https://www.workiva.com/fr/blog/building-risk-assessment-matrix, https://www.workiva.com/es-es/blog/5-steps-effective-strategic-risk-management
 * Usage count: 2x
 */
export const modal3Variants = cva(
  // Base styles observed
  "a2a_modal_body a2a_menu a2a_thanks a2a_hide",
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

export type Modal3Variants = VariantProps<typeof modal3Variants>;
