import React from "react";
import { cn } from "@/src/lib/utils";
import { Icons } from "@/src/components/icons";
import { cva, type VariantProps } from "class-variance-authority";
import { Label } from "@/src/components/ui/Label";

const inputVariants = cva(
  "h-8 rounded py-1 pl-2 text-dark focus-visible:outline-none disabled:opacity-50 sm:text-sm",
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

interface InputProps extends VariantProps<typeof inputVariants> {
  searchIcon?: boolean;
  label?: string;
}

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & InputProps
>(({ className, variant, label, searchIcon, ...props }, ref) => {
  return (
    <div className="flex flex-col space-y-1">
      {label != null && <Label htmlFor={label}>{label}</Label>}
      <div className="relative flex items-center">
        {searchIcon === true && (
          <Icons.search className="absolute left-1 h-4 w-4 cursor-pointer" />
        )}
        <input
          className={cn(
            inputVariants({ variant, className }),
            searchIcon === true && "pl-6",
          )}
          ref={ref}
          id={label}
          {...props}
        />
      </div>
    </div>
  );
});
Input.displayName = "Input";

export { Input };
