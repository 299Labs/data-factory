"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/src/components/ui/Button";
import { Icons } from "@/src/components/icons";

const GetStartedButton: React.FC = () => {
  const router = useRouter();
  return (
    <Button
      onClick={() => {
        router.push("/start");
      }}
      className="font-medium shadow"
    >
      <span>Get Started</span>
      <Icons.rocket className="h-5 w-5" />
    </Button>
  );
};

export default GetStartedButton;
