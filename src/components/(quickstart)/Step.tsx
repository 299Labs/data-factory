import React from "react";
import { cn } from "@/src/lib/utils"; // type StepAdditions = {

interface StepProps {
  children?: React.ReactNode;
  step?: number;
  status: "here" | "almost" | "far";
}

const Step: React.FC<StepProps> = ({ children, status, step }) => {
  return (
    <div className="pointer-events-none select-none items-center font-medium">
      <div
        className={cn(
          "w-10 h-10 sm:text-lg sm:w-12 text-sm sm:h-12 mx-auto mb-2 rounded-full border-2 justify-center items-center flex transition-colors duration-500",
          status === "here" && "bg-accent text-white border-accent",
          status === "almost" && "border-accent text-accent bg-[#F4F7FF]",
          status === "far" && "bg-[#F4F7FF] text-dark",
        )}
      >
        <span>{children}</span>
      </div>
      <span>{step !== undefined ? `Step ${step}` : "Finish"}</span>
    </div>
  );
};

export default Step;
