"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Card } from "@/src/components/(quickstart)/Card";
import { Input } from "@/src/components/ui/Input";
import { Icons } from "@/src/components/icons";
import { Button } from "@/src/components/ui/Button";
import { useRouter } from "next/navigation";
import { type DBCompanyProfile } from "@/src/lib/db/schema";

const CompanyStep: React.FC<{
  setCompany: React.Dispatch<React.SetStateAction<DBCompanyProfile>>;
}> = ({ setCompany }) => {
  const [inputValue, setInputValue] = useState<string | undefined>();
  const router = useRouter();
  const input = useRef<HTMLInputElement | null>(null);

  // initial focus on input
  useEffect(() => {
    return input.current?.focus();
  }, [input]);

  const companyName = useMemo(() => {
    if (inputValue !== undefined && inputValue.length > 0) return inputValue;
  }, [inputValue]);

  function setName(): void {
    if (companyName != null) {
      setCompany({ name: companyName });
      router.push("?step=2");
    }
  }

  return (
    <Card key="1">
      <div className="flex flex-col justify-center">
        <p className="text-lg text-gray-600/70">Give company a name</p>
        <Input
          ref={input}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          onKeyDown={(e) => {
            e.key === "Enter" && setName();
          }}
          className="mx-auto text-center text-xl tracking-tight sm:text-3xl"
          variant="invisible"
          searchIcon={false}
        />
      </div>
      <Button
        className="absolute inset-y-0 right-2 h-full text-accent drop-shadow hover:scale-105 active:scale-95"
        variant="link"
        disabled={companyName == null}
        size="icon"
        onClick={() => {
          companyName != null && setName();
        }}
      >
        <Icons.arrowRightCircle />
      </Button>
    </Card>
  );
};

export default CompanyStep;
