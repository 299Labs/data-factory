"use client";
import React, { useState } from "react";
import { AnimatePresence, MotionConfig } from "framer-motion";
import { useStepQuery } from "@/src/hooks/useStepQuery";
import CompanyStep from "@/src/components/(quickstart)/Cards/Company.Step";
import ModuleStep from "@/src/components/(quickstart)/Cards/Module.Step";
import UserStep from "@/src/components/(quickstart)/Cards/User.Step";

const Cards: React.FC = () => {
  const [companyName, setCompanyName] = useState<string>();
  const step = useStepQuery();

  return (
    <MotionConfig transition={{ type: "spring", bounce: 0.25, duration: 0.45 }}>
      <AnimatePresence mode="wait">
        {step === 1 && <CompanyStep setCompany={setCompanyName} />}
        {step === 2 && <ModuleStep companyName={companyName} />}
        {step === 3 && <UserStep />}
      </AnimatePresence>
    </MotionConfig>
  );
};

export default Cards;
