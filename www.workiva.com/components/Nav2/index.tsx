import * as React from "react";
import { cn } from "@/lib/utils";
import { nav2Variants, type Nav2Variants } from "./variants";

/**
 * Nav2
 * 
 * Extracted from source site.
 * Original structure:
 * <nav role="navigation" aria-labelledby="block-workivautility" id="block-workivautility">

      
              <ul class="menu">
                    <li class="menu-item nav-item">
        <a href="ht
 * 
 * Observed on: https://www.workiva.com, https://www.workiva.com/fr/blog/building-risk-assessment-matrix, https://www.workiva.com/resources/ai-office-cfo-partnering-your-cio-evaluate-assess-and-deploy-ai-scale, https://www.workiva.com/es-es/blog/5-steps-effective-strategic-risk-management, https://www.workiva.com/fr, https://www.workiva.com/sg/security
 * Usage count: 6x
 */
export interface Nav2Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Nav2Variants {}

export const Nav2 = React.forwardRef<HTMLDivElement, Nav2Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(nav2Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Nav2.displayName = "Nav2";
