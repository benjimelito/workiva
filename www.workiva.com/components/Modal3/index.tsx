import * as React from "react";
import { cn } from "@/lib/utils";
import { modal3Variants, type Modal3Variants } from "./variants";

/**
 * Modal3
 * 
 * Extracted from source site.
 * Original structure:
 * <div class="a2a_modal_body a2a_menu a2a_thanks a2a_hide" id="a2a_thanks" role="dialog" tabindex="0">
 * 
 * Observed on: https://www.workiva.com/fr/blog/building-risk-assessment-matrix, https://www.workiva.com/es-es/blog/5-steps-effective-strategic-risk-management
 * Usage count: 2x
 */
export interface Modal3Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Modal3Variants {}

export const Modal3 = React.forwardRef<HTMLDivElement, Modal3Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(modal3Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Modal3.displayName = "Modal3";
