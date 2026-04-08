import * as React from "react";
import { cn } from "@/lib/utils";
import { form1Variants, type Form1Variants } from "./variants";

/**
 * Form1
 * 
 * Extracted from source site.
 * Original structure:
 * <form action="https://www.workiva.com/search" method="get" id="views-exposed-form-solr-site-search-search" accept-charset="UTF-8">
  <div class="container">
  <div class="row">
    <div class="form-gr
 * 
 * Observed on: https://www.workiva.com, https://www.workiva.com/fr/blog/building-risk-assessment-matrix, https://www.workiva.com/resources/ai-office-cfo-partnering-your-cio-evaluate-assess-and-deploy-ai-scale, https://www.workiva.com/es-es/blog/5-steps-effective-strategic-risk-management, https://www.workiva.com/fr, https://www.workiva.com/sg/security
 * Usage count: 6x
 */
export interface Form1Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Form1Variants {}

export const Form1 = React.forwardRef<HTMLDivElement, Form1Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(form1Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Form1.displayName = "Form1";
