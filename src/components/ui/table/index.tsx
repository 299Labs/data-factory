import { cn } from "@/src/lib/utils";
import React from "react";

const Table = React.forwardRef<
  HTMLTableElement,
  React.TableHTMLAttributes<HTMLTableElement>
>(({ children, className, ...props }, ref) => {
  return (
    <table
      className={cn("shadow-sm rounded xl:rounded-xl", className)}
      ref={ref}
      {...props}
    >
      {children}
    </table>
  );
});

export { Table };

Table.displayName = "Table";
