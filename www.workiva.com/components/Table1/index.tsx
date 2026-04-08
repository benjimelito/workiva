import * as React from "react";
import { cn } from "@/lib/utils";
import { table1Variants, type Table1Variants } from "./variants";

/**
 * Table1
 * 
 * Extracted from source site.
 * Original structure:
 * <table align="left" border="0" cellpadding="1" cellspacing="1" style="width: 100%;" class="table">
	<tbody>
		<tr>
			<th scope="row" style="width: 15%;">SOC 1 Type II</th>
			<td style="width: 85%;">
 * 
 * Observed on: https://www.workiva.com/sg/security
 * Usage count: 3x
 */
export interface Table1Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Table1Variants {}

export const Table1 = React.forwardRef<HTMLDivElement, Table1Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(table1Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Table1.displayName = "Table1";
