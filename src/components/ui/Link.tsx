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

export { Link };
