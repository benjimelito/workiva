import * as React from "react";
import { cn } from "@/lib/utils";
import { card3Variants, type Card3Variants } from "./variants";

/**
 * Card3
 * 
 * Extracted from source site.
 * Original structure:
 * <div class="card__summary mt-16">
        <p>Découvrez comment Melexis a transformé son reporting annuel en simplifiant la conformité CSRD et ESEF, en réduisant les risques d’erreurs et en mettant en 
 * 
 * Observed on: https://www.workiva.com/fr/blog/building-risk-assessment-matrix, https://www.workiva.com/es-es/blog/5-steps-effective-strategic-risk-management
 * Usage count: 2x
 */
export interface Card3Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Card3Variants {}

export const Card3 = React.forwardRef<HTMLDivElement, Card3Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(card3Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Card3.displayName = "Card3";
