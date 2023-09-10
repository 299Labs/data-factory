import React from "react";
import { cn } from "@/src/lib/utils";

const Announce = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      className={cn(
        "text-sm rounded-full p-1.5 px-8 border bg-white hover:bg-white-foreground hover:border-gray-300 hover:bg-white/50 transition-all",
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
});
Announce.displayName = "Announce";

export { Announce };
