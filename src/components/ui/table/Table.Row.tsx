import React from "react";
import { cn } from "@/src/lib/utils";

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.TableHTMLAttributes<HTMLTableRowElement>
>(({ className, children, ...props }, ref) => {
  return (
    <tr
      className={cn(
        "bg-white hover:bg-gray-50 easy-in duration-150",
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </tr>
  );
});

export { TableRow };

TableRow.displayName = "TableRow";
