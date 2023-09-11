import React from "react";
import { cn } from "@/src/lib/utils";
import LinkDor from "next/link";

const Link = React.forwardRef<
  React.ElementRef<typeof LinkDor>,
  React.ComponentPropsWithoutRef<typeof LinkDor>
>(({ className, children, ...props }, ref) => {
  return (
    <LinkDor className={cn("text-accent", className)} ref={ref} {...props}>
      {children}
    </LinkDor>
  );
});
Link.displayName = "Link";

const ListLink = React.forwardRef<
  React.ElementRef<typeof LinkDor>,
  React.ComponentPropsWithoutRef<typeof LinkDor>
>(({ className, children, ...props }, ref) => {
  return (
    <LinkDor
      className={cn(
        "group inline-flex w-full items-center space-x-4 rounded p-2 text-gray-600 hover:bg-gray-50 hover:text-accent",
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </LinkDor>
  );
});
ListLink.displayName = "ListLink";

export { Link, ListLink };
