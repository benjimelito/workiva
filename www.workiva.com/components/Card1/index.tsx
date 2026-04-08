import * as React from "react";
import { cn } from "@/lib/utils";
import { card1Variants, type Card1Variants } from "./variants";

/**
 * Card1
 * 
 * Extracted from source site.
 * Original structure:
 * <div class="container-fluid callout-cards-container px-100 pb-104">
      
      <div class="field field--name-field-callout-card field--type-entity-reference-revisions field--label-hidden card-deck f
 * 
 * Observed on: https://www.workiva.com/sg/security
 * Usage count: 1x
 */
export interface Card1Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Card1Variants {}

export const Card1 = React.forwardRef<HTMLDivElement, Card1Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(card1Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Card1.displayName = "Card1";
