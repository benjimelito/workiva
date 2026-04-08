import * as React from "react";
import { cn } from "@/lib/utils";
import { footer1Variants, type Footer1Variants } from "./variants";

/**
 * Footer1
 * 
 * Extracted from source site.
 * Original structure:
 * <footer class="workiva-footer bg-warm-light" id="footer" role="contentinfo" data-gtm-hook="wk-footer">
  <div class="container-fluid wk-footer-container py-104">
    <div class="row">
      <div class
 * 
 * Observed on: https://www.workiva.com, https://www.workiva.com/fr/blog/building-risk-assessment-matrix, https://www.workiva.com/resources/ai-office-cfo-partnering-your-cio-evaluate-assess-and-deploy-ai-scale, https://www.workiva.com/es-es/blog/5-steps-effective-strategic-risk-management, https://www.workiva.com/fr, https://www.workiva.com/sg/security
 * Usage count: 6x
 */
export interface Footer1Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Footer1Variants {}

export const Footer1 = React.forwardRef<HTMLDivElement, Footer1Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(footer1Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Footer1.displayName = "Footer1";
