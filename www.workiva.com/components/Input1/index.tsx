import * as React from "react";
import { cn } from "@/lib/utils";
import { input1Variants, type Input1Variants } from "./variants";

/**
 * Input1
 * 
 * Extracted from source site.
 * Original structure:
 * <input placeholder="What can we help you find today?" data-drupal-selector="edit-keys" type="search" id="edit-keys" name="keys" value="" size="30" maxlength="128" class="form-search form-control">
 * 
 * Observed on: https://www.workiva.com, https://www.workiva.com/fr/blog/building-risk-assessment-matrix, https://www.workiva.com/resources/ai-office-cfo-partnering-your-cio-evaluate-assess-and-deploy-ai-scale, https://www.workiva.com/es-es/blog/5-steps-effective-strategic-risk-management, https://www.workiva.com/fr, https://www.workiva.com/sg/security
 * Usage count: 6x
 */
export interface Input1Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Input1Variants {}

export const Input1 = React.forwardRef<HTMLDivElement, Input1Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(input1Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Input1.displayName = "Input1";
