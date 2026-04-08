import * as React from "react";
import { cn } from "@/lib/utils";
import { input3Variants, type Input3Variants } from "./variants";

/**
 * Input3
 * 
 * Extracted from source site.
 * Original structure:
 * <input id="a2a_copy_link_text" type="text" title="Copy link" readonly="">
 * 
 * Observed on: https://www.workiva.com/fr/blog/building-risk-assessment-matrix, https://www.workiva.com/es-es/blog/5-steps-effective-strategic-risk-management
 * Usage count: 2x
 */
export interface Input3Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Input3Variants {}

export const Input3 = React.forwardRef<HTMLDivElement, Input3Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(input3Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Input3.displayName = "Input3";
