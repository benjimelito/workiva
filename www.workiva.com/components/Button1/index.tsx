import * as React from "react";
import { cn } from "@/lib/utils";
import { button1Variants, type Button1Variants } from "./variants";

/**
 * Button1
 * 
 * Extracted from source site.
 * Original structure:
 * <button class="icon icon-search" type="button"><span class="sr-only">Search the site</span></button>
 * 
 * Observed on: https://www.workiva.com, https://www.workiva.com/fr/blog/building-risk-assessment-matrix, https://www.workiva.com/resources/ai-office-cfo-partnering-your-cio-evaluate-assess-and-deploy-ai-scale, https://www.workiva.com/es-es/blog/5-steps-effective-strategic-risk-management, https://www.workiva.com/fr, https://www.workiva.com/sg/security
 * Usage count: 6x
 */
export interface Button1Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Button1Variants {}

export const Button1 = React.forwardRef<HTMLDivElement, Button1Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(button1Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Button1.displayName = "Button1";
