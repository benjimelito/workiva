import { cva, type VariantProps } from "class-variance-authority";

/**
 * Header2 Variants
 * Extracted from: https://www.workiva.com/resources/ai-office-cfo-partnering-your-cio-evaluate-assess-and-deploy-ai-scale
 * Usage count: 1x
 */
export const header2Variants = cva(
  // Base styles observed
  "workiva-header bg-paper",
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

export type Header2Variants = VariantProps<typeof header2Variants>;
