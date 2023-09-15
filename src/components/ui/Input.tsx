import React from "react";
import { cn } from "@/src/lib/utils";
import { Icons } from "@/src/components/icons";
import { cva, type VariantProps } from "class-variance-authority";

const inputVariants = cva(
  "rounded py-1 pl-6 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 sm:text-sm",
  {
    variants: {
      variant: {
        default: "border shadow-sm focus-visible:ring-1 ",
        invisible: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> &
    VariantProps<typeof inputVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <div className="relative flex items-center">
      {variant !== "invisible" && (
        <Icons.search className="absolute left-1 h-4 w-4 cursor-pointer" />
      )}
      <input
        className={cn(inputVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    </div>
  );
});
Input.displayName = "Input";

export { Input };
