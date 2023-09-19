"use client";

import React from "react";
import { motion } from "framer-motion";
import StepNavigation from "@/src/components/(quickstart)/Step.Navigation";
import Cards from "@/src/components/(quickstart)/Cards";

const Start: React.FC = () => {
  return (
    <motion.div className="flex max-w-xl flex-col space-y-3 sm:space-y-8">
      <h1 className="text-2xl font-bold text-dark sm:text-3xl">
        Complete only 3 steps to start exploring the dashboard
      </h1>

      <div className="rounded-xl border-5 border-border/50 bg-white p-4 sm:px-12 sm:py-6">
        <StepNavigation />
      </div>

      <Cards />
    </motion.div>
  );
};

export default Start;
