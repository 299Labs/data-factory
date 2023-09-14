import React from "react";

interface StepProps {
  number: number;
  title: string;
  description: React.ReactNode;
}

const Step: React.FC<StepProps> = ({ number, description, title }) => {
  return (
    <div className="flex flex-col space-y-2">
      <div className="h-[1px] border-b" aria-hidden />
      <span className="text-sm text-accent">Step {number}</span>
      <p className="font-medium text-black">{title}</p>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default Step;
