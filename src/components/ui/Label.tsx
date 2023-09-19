import React, { type LabelHTMLAttributes } from "react";
import { cn } from "@/src/lib/utils";

const Label = React.forwardRef<
  HTMLLabelElement,
  LabelHTMLAttributes<HTMLLabelElement>
>(({ children, className, ...props }, ref) => {
  return (
    <label
      ref={ref}
      className={cn("text-left text-xs text-gray-700", className)}
      {...props}
    >
      {children}
    </label>
  );
});

export { Label };
Label.displayName = "Label";
