import * as React from "react";
import { cn } from "@/lib/utils";
import { modal2Variants, type Modal2Variants } from "./variants";

/**
 * Modal2
 * 
 * Extracted from source site.
 * Original structure:
 * <div class="a2a_modal_body a2a_menu a2a_hide" id="a2a_copy_link">
 * 
 * Observed on: https://www.workiva.com/fr/blog/building-risk-assessment-matrix, https://www.workiva.com/es-es/blog/5-steps-effective-strategic-risk-management
 * Usage count: 2x
 */
export interface Modal2Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Modal2Variants {}

export const Modal2 = React.forwardRef<HTMLDivElement, Modal2Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(modal2Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Modal2.displayName = "Modal2";
