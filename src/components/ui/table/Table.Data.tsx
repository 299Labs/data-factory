import { cn } from "@/src/lib/utils";
import React from "react";

const TableData = React.forwardRef<
  HTMLTableCellElement,
  React.TableHTMLAttributes<HTMLTableCellElement>
>(({ className, children, ...props }, ref) => {
  return (
    <td
      className={cn(
        "first:pl-4 first:sm:pl-6 first:pr-3 text-dark py-4 text-sm",
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </td>
  );
});

export { TableData };

TableData.displayName = "TableData";
