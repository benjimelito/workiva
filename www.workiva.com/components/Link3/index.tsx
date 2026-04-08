import * as React from "react";
import { cn } from "@/lib/utils";
import { link3Variants, type Link3Variants } from "./variants";

/**
 * Link3
 * 
 * Extracted from source site.
 * Original structure:
 * <a href="https://www.workiva.com/fr/blog/building-risk-assessment-matrix#modal" data-target="#wk_modal" data-toggle="modal" role="button" class="button-marketo-event btn btn-primary" data-callback-typ
 * 
 * Observed on: https://www.workiva.com/fr/blog/building-risk-assessment-matrix, https://www.workiva.com/es-es/blog/5-steps-effective-strategic-risk-management
 * Usage count: 2x
 */
export interface Link3Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Link3Variants {}

export const Link3 = React.forwardRef<HTMLDivElement, Link3Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(link3Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Link3.displayName = "Link3";
