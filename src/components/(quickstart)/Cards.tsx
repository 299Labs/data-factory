"use client";
import React, { useState } from "react";
import { AnimatePresence, MotionConfig } from "framer-motion";
import { useStepQuery } from "@/src/hooks/useStepQuery";
import CompanyStep from "@/src/components/(quickstart)/Cards/Company.Step";
import ModuleStep from "@/src/components/(quickstart)/Cards/Module.Step";
import UserStep from "@/src/components/(quickstart)/Cards/User.Step";
import FinishStep from "@/src/components/(quickstart)/Cards/Finish.Step";
import type { DBCompanyProfile, DBUser } from "@/src/lib/db/schema";

const Cards: React.FC = () => {
  const [company, setCompany] = useState<DBCompanyProfile>();
  const [firstUser, setFirstUser] = useState<DBUser>();
  const step = useStepQuery();

  return (
    <MotionConfig transition={{ type: "spring", bounce: 0.25, duration: 0.45 }}>
      <AnimatePresence mode="wait">
        {step === 1 && <CompanyStep setCompany={setCompany} />}
        {step === 2 && <ModuleStep company={company} setCompany={setCompany} />}
        {step === 3 && <UserStep company={company} setUser={setFirstUser} />}
        {step === 4 && <FinishStep user={firstUser} company={company} />}
      </AnimatePresence>
    </MotionConfig>
  );
};

export default Cards;
