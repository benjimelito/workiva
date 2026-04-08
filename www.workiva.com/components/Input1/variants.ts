import { cva, type VariantProps } from "class-variance-authority";

/**
 * Input1 Variants
 * Extracted from: https://www.workiva.com, https://www.workiva.com/fr/blog/building-risk-assessment-matrix, https://www.workiva.com/resources/ai-office-cfo-partnering-your-cio-evaluate-assess-and-deploy-ai-scale, https://www.workiva.com/es-es/blog/5-steps-effective-strategic-risk-management, https://www.workiva.com/fr, https://www.workiva.com/sg/security
 * Usage count: 6x
 */
export const input1Variants = cva(
  // Base styles observed
  "form-search form-control",
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

export type Input1Variants = VariantProps<typeof input1Variants>;
