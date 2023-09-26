import React, { type HTMLAttributes } from "react";
import { cn } from "@/src/lib/utils";

const TableItem = React.forwardRef<
  HTMLTableRowElement,
  HTMLAttributes<HTMLTableRowElement>
>(({ className, children, ...props }, ref) => {
  return (
    <tr
      className={cn("cursor-pointer hover:bg-gray-50", className)}
      ref={ref}
      {...props}
    >
      {children}
    </tr>
  );
});

export default TableItem;

TableItem.displayName = "TableItem";
