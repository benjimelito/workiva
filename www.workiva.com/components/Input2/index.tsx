import * as React from "react";
import { cn } from "@/lib/utils";
import { input2Variants, type Input2Variants } from "./variants";

/**
 * Input2
 * 
 * Extracted from source site.
 * Original structure:
 * <input data-drupal-selector="edit-submit-solr-site-search" type="submit" id="edit-submit-solr-site-search" value="Submit" class="button js-form-submit form-submit form-control js-button-exists" aria-l
 * 
 * Observed on: https://www.workiva.com, https://www.workiva.com/fr/blog/building-risk-assessment-matrix, https://www.workiva.com/resources/ai-office-cfo-partnering-your-cio-evaluate-assess-and-deploy-ai-scale, https://www.workiva.com/es-es/blog/5-steps-effective-strategic-risk-management, https://www.workiva.com/fr, https://www.workiva.com/sg/security
 * Usage count: 6x
 */
export interface Input2Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Input2Variants {}

export const Input2 = React.forwardRef<HTMLDivElement, Input2Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(input2Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Input2.displayName = "Input2";
