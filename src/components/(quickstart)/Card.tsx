"use client";
import React from "react";
import { motion } from "framer-motion";
import { FADE_DOWN_EXIT_BOTTOM_ANIMATION } from "@/src/config/framer";
import { cn } from "@/src/lib/utils";

const Card = React.forwardRef<
  React.ElementRef<typeof motion.div>,
  React.ComponentPropsWithoutRef<typeof motion.div>
>(({ children, className, ...props }, ref) => {
  return (
    <motion.div
      exit="exit"
      animate="animate"
      initial="initial"
      variants={FADE_DOWN_EXIT_BOTTOM_ANIMATION}
      className={cn(
        "relative border-5 border-border/50 rounded-xl bg-white sm:px-12 sm:py-6 p-4",
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </motion.div>
  );
});

export { Card };

Card.displayName = "Card";
