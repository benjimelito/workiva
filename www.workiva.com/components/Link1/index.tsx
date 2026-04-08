import * as React from "react";
import { cn } from "@/lib/utils";
import { link1Variants, type Link1Variants } from "./variants";

/**
 * Link1
 * 
 * Extracted from source site.
 * Original structure:
 * <a href="https://www.workiva.com/request-demo" class="btn-primary nav-link" data-drupal-link-system-path="node/1949" rel="noopener noreferrer" aria-label="(opens in a new tab)">Request A Demo</a>
 * 
 * Observed on: https://www.workiva.com, https://www.workiva.com/fr/blog/building-risk-assessment-matrix, https://www.workiva.com/resources/ai-office-cfo-partnering-your-cio-evaluate-assess-and-deploy-ai-scale, https://www.workiva.com/es-es/blog/5-steps-effective-strategic-risk-management, https://www.workiva.com/fr, https://www.workiva.com/sg/security
 * Usage count: 6x
 */
export interface Link1Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Link1Variants {}

export const Link1 = React.forwardRef<HTMLDivElement, Link1Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(link1Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Link1.displayName = "Link1";
