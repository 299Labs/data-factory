"use client";
import React from "react";
import Step from "@/src/components/(quickstart)/Step";
import { Icons } from "@/src/components/icons";
import { cn } from "@/src/lib/utils";
import { useStepQuery } from "@/src/hooks/useStepQuery";

const StepNavigation: React.FC = () => {
  const step = useStepQuery();

  return (
    <div className="relative">
      <div className="relative z-10 flex flex-row justify-between">
        <Step step={1} status="here">
          1
        </Step>
        <Step step={2} status={step >= 2 ? "here" : "almost"}>
          2
        </Step>
        <Step
          step={3}
          status={step >= 3 ? "here" : step < 2 ? "far" : "almost"}
        >
          3
        </Step>
        <Step status={step >= 3 ? "almost" : "far"}>
          <Icons.faceSmile className="h-6 w-6 text-dark" />
        </Step>
      </div>
      <div
        className={cn(
          "absolute top-[25%] h-[2px] w-full bg-gradient-to-r via-accent to-[#F4F7FF] from-accent sm:top-[30%] transition-all duration-500",
          step === 1 && "to-60% via-40%",
          step === 2 && "to-80% via-60%",
          step === 3 && "to-100% via-90%",
        )}
      />
    </div>
  );
};

export default StepNavigation;
