import React from "react";
import { cn } from "@/src/lib/utils";

const TableHeader = React.forwardRef<
  HTMLTableCellElement,
  React.TableHTMLAttributes<HTMLTableCellElement>
>(({ className, children, ...props }, ref) => {
  return (
    <th
      className={cn(
        "py-3.5 first:px-3 first:pl-4 text-left uppercase font-medium text-xs text-gray-500 first:sm:pl-6",
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </th>
  );
});

export { TableHeader };

TableHeader.displayName = "TableHeader";
