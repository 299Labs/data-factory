"use client";
import React from "react";
import StepNavigation from "@/src/components/(quickstart)/Step.Navigation";

const Start: React.FC = () => {
  return (
    <div className="flex max-w-xl flex-col space-y-3 sm:space-y-8">
      <h1 className="text-2xl font-bold text-dark sm:text-3xl">
        Complete only 3 steps to start exploring the dashboard
      </h1>

      <div className="rounded-xl border-[6px] border-[#E5E7EB]/50 bg-white p-4 sm:px-12 sm:py-6">
        <StepNavigation />
      </div>
    </div>
  );
};

export default Start;
