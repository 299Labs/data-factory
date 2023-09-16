"use client";
import React, { useMemo, useState } from "react";
import { AnimatePresence, MotionConfig } from "framer-motion";
import { Button } from "@/src/components/ui/Button";
import { Icons } from "@/src/components/icons";
import { useStepQuery } from "@/src/hooks/useStepQuery";
import { useRouter } from "next/navigation";
import { Card } from "@/src/components/(quickstart)/Card";
import { Input } from "../ui/Input";
import { Select } from "@/src/components/ui/Select";

const Cards: React.FC = () => {
  const router = useRouter();
  const step = useStepQuery();
  const [inputValue, setInputValue] = useState<string | undefined>();

  const companyName = useMemo(() => {
    if (inputValue !== undefined && inputValue.length > 0) return inputValue;
  }, [inputValue]);

  return (
    <MotionConfig transition={{ type: "spring", bounce: 0.25, duration: 0.45 }}>
      <AnimatePresence mode="wait">
        {step === 1 && (
          <Card key="1">
            <div className="flex flex-col justify-center">
              <p className="text-lg text-gray-600/70">Give company a name</p>
              <Input
                onChange={(e) => {
                  setInputValue(e.target.value);
                }}
                className="mx-auto text-center text-xl tracking-tight sm:text-3xl"
                variant="invisible"
              />
            </div>
            <LocalButton
              onClick={() => {
                router.push("?step=2");
              }}
              disabled={companyName == null}
            />
          </Card>
        )}
        {step === 2 && (
          <Card key={2}>
            <div className="flex flex-col justify-center">
              <p className="text-lg text-gray-600/70">
                Choose the best that describes your company{" "}
              </p>
              <Select options={["Dentistry", "No similar"]} />
            </div>
            <LocalButton
              onClick={() => {
                router.push("?step=3");
              }}
            />
          </Card>
        )}
        {step === 3 && <Card key={3}>{/* <LocalButton/> */}</Card>}
      </AnimatePresence>
    </MotionConfig>
  );
};

export default Cards;

const LocalButton: React.FC<{
  disabled?: boolean;
  onClick: () => void;
}> = ({ disabled, onClick }) => {
  return (
    <Button
      className="absolute inset-y-0 right-2 h-full text-accent drop-shadow hover:scale-105 active:scale-95"
      variant="link"
      disabled={disabled}
      size="icon"
      onClick={onClick}
    >
      <Icons.arrowRightCircle />
    </Button>
  );
};
