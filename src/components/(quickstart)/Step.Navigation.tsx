"use client";
import React from "react";
import Step from "@/src/components/(quickstart)/Step";
import { Icons } from "@/src/components/icons";
import { useSearchParams } from "next/navigation";

const StepNavigation: React.FC = () => {
  const searchParams = useSearchParams();
  const paramsStep = searchParams.get("step");
  const step = paramsStep !== null ? +paramsStep : 1;

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
        className={`absolute top-[25%] h-[2px] w-full bg-black bg-gradient-to-r from-accent via-accent ${step > 1 ? 'via-60%' : 'via-30%'} ${step > 1 ? 'to-90%' : 'to-60%'} to-[#E7E7E7] transition-all sm:top-[30%]`}
      />
      {/*    initial via-30 to-60, then via-60 to-90 end etc */}
    </div>
  );
};

export default StepNavigation;
