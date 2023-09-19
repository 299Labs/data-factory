import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/src/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center space-x-1.5 rounded duration-150 active:scale-95",
  {
    variants: {
      variant: {
        default: "bg-accent text-white shadow hover:bg-accent/90",
        ghost: "hover:bg-accent hover:text-accent",
        link: "underline-offset-4 hover:underline",
        white: "border bg-white shadow-sm hover:bg-black/[1%]",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        md: "h-8 rounded px-2 text-sm",
        lg: "h-10 rounded-md px-8",
        icon: "disabled: h-9 w-9 disabled:scale-100 disabled:text-gray-500",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
