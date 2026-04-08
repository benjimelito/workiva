import * as React from "react";
import { cn } from "@/lib/utils";
import { header2Variants, type Header2Variants } from "./variants";

/**
 * Header2
 * 
 * Extracted from source site.
 * Original structure:
 * <header class="workiva-header bg-paper" id="header" style="translate: none; rotate: none; scale: none; inset: 0px auto auto 0px; margin: 0px; max-width: 1905px; width: 1905px; max-height: 62.9219px; h
 * 
 * Observed on: https://www.workiva.com/resources/ai-office-cfo-partnering-your-cio-evaluate-assess-and-deploy-ai-scale
 * Usage count: 1x
 */
export interface Header2Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Header2Variants {}

export const Header2 = React.forwardRef<HTMLDivElement, Header2Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(header2Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Header2.displayName = "Header2";
