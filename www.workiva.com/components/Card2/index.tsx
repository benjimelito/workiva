import * as React from "react";
import { cn } from "@/lib/utils";
import { card2Variants, type Card2Variants } from "./variants";

/**
 * Card2
 * 
 * Extracted from source site.
 * Original structure:
 * <div class="card bg-zesty-neue card-large card-with-link card-with-media" tabindex="0">
        <div class="paragraph paragraph--type--template-card paragraph--view-mode--default">

          <h3>
   
 * 
 * Observed on: https://www.workiva.com, https://www.workiva.com/fr
 * Usage count: 2x
 */
export interface Card2Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Card2Variants {}

export const Card2 = React.forwardRef<HTMLDivElement, Card2Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(card2Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Card2.displayName = "Card2";
