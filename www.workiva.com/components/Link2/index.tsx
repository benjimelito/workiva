import * as React from "react";
import { cn } from "@/lib/utils";
import { link2Variants, type Link2Variants } from "./variants";

/**
 * Link2
 * 
 * Extracted from source site.
 * Original structure:
 * <a class="btn-link fancy-underline processed" data-entity-substitution="canonical" data-entity-type="node" data-entity-uuid="05ddefc8-44c6-4818-be23-a3933b350375" href="https://www.workiva.com/fr/requ
 * 
 * Observed on: https://www.workiva.com/fr/blog/building-risk-assessment-matrix
 * Usage count: 1x
 */
export interface Link2Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Link2Variants {}

export const Link2 = React.forwardRef<HTMLDivElement, Link2Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(link2Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Link2.displayName = "Link2";
