import * as React from "react";
import { cn } from "@/lib/utils";
import { modal1Variants, type Modal1Variants } from "./variants";

/**
 * Modal1
 * 
 * Extracted from source site.
 * Original structure:
 * <div id="a2a_modal" class="a2a_modal a2a_hide" role="dialog" tabindex="-1" aria-label="">
 * 
 * Observed on: https://www.workiva.com/fr/blog/building-risk-assessment-matrix, https://www.workiva.com/es-es/blog/5-steps-effective-strategic-risk-management
 * Usage count: 2x
 */
export interface Modal1Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Modal1Variants {}

export const Modal1 = React.forwardRef<HTMLDivElement, Modal1Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(modal1Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Modal1.displayName = "Modal1";
