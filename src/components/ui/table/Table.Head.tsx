import { cn } from "@/src/lib/utils";
import React from "react";

const TableHead = React.forwardRef<
  HTMLTableSectionElement,
  React.TableHTMLAttributes<HTMLTableSectionElement>
>(({ className, children, ...props }, ref) => {
  return (
    <thead ref={ref} className={cn("", className)} {...props}>
      {children}
    </thead>
  );
});

export { TableHead };

TableHead.displayName = "TableHead";
