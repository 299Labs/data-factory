"use client";
import React, { useState } from "react";
import { Card } from "@/src/components/(quickstart)/Card";
import { Input } from "../../ui/Input";
import { Button } from "@/src/components/ui/Button";
import { Select } from "@/src/components/ui/Select";
import { AnimatePresence, motion } from "framer-motion";

const UserStep: React.FC = () => {
  const [times, setTimes] = useState(0);
  return (
    <Card className="flex flex-col space-y-3 sm:px-6" key={3}>
      <p className="text-lg font-semibold text-gray-800">
        Let&apos;s add your first user!
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        <Input className="w-full" label="Full name" />
        <Input className="w-full" label="Address" />
      </div>
      <Input
        type="date"
        className="w-2/3 max-sm:w-full"
        label="Birthday date"
      />
      <div className="grid grid-cols-2 gap-3">
        <AnimatePresence>
          {times >= 1 && (
            <motion.div
              key="times-1"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
            >
              <Input
                label="Phone number"
                className="w-full disabled:opacity-100 "
                disabled
                placeholder="+1 234567891"
              />
            </motion.div>
          )}
          {times >= 2 && (
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              key="times-2"
            >
              <Select
                options={["Crypto", "Bicycling"]}
                defaultValue="Bicycling"
                label="Interests"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="flex">
        <Button
          onClick={() => {
            setTimes((times) => times + 1);
          }}
          variant="white"
          className="mt-1 font-medium text-dark"
          size="md"
        >
          {times < 1
            ? "🔥 You can add more!"
            : times < 2
            ? "🔥 And More"
            : "⚡ Add to storage"}
        </Button>
      </div>
    </Card>
  );
};

export default UserStep;
