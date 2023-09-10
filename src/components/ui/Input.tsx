import React from "react";
import { cn } from "@/src/lib/utils";
import { Icons } from "@/src/components/icons";

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  return (
    <div className="relative flex items-center">
      <Icons.search className="absolute left-1 h-4 w-4 cursor-pointer" />
      <input
        className={cn(
          "border rounded sm:text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 pl-6 py-1 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    </div>
  );
});
Input.displayName = "Input";

export { Input };
