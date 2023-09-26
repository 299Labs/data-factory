import { cn } from "@/src/lib/utils";
import React from "react";

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.TableHTMLAttributes<HTMLTableSectionElement>
>(({ className, children, ...props }, ref) => {
  return (
    <tbody
      className={cn("divide-y divide-border", className)}
      ref={ref}
      {...props}
    >
      {children}
    </tbody>
  );
});

export { TableBody };

TableBody.displayName = "TableBody";
