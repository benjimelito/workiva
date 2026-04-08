import * as React from "react";
import { cn } from "@/lib/utils";
import { nav3Variants, type Nav3Variants } from "./variants";

/**
 * Nav3
 * 
 * Extracted from source site.
 * Original structure:
 * <nav role="navigation" aria-labelledby="block-particle-megamenuna" id="block-particle-megamenuna">

      

      <ul data-region="workiva_header_menu" class="navbar-nav">
  
          
              
 * 
 * Observed on: https://www.workiva.com, https://www.workiva.com/fr/blog/building-risk-assessment-matrix, https://www.workiva.com/resources/ai-office-cfo-partnering-your-cio-evaluate-assess-and-deploy-ai-scale, https://www.workiva.com/es-es/blog/5-steps-effective-strategic-risk-management, https://www.workiva.com/fr, https://www.workiva.com/sg/security
 * Usage count: 6x
 */
export interface Nav3Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Nav3Variants {}

export const Nav3 = React.forwardRef<HTMLDivElement, Nav3Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(nav3Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Nav3.displayName = "Nav3";
