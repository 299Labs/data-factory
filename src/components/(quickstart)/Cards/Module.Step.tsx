"use client";

import React, { useState } from "react";
import { Select } from "@/src/components/ui/Select";
import { Card } from "@/src/components/(quickstart)/Card";
import { Icons } from "@/src/components/icons";
import { Button } from "@/src/components/ui/Button";
import { useRouter } from "next/navigation";
import type { DBCompanyProfile } from "@/src/lib/db/schema";

interface ModuleStepProps {
  setCompany: React.Dispatch<React.SetStateAction<DBCompanyProfile>>;
  company?: DBCompanyProfile;
}

const ModuleStep: React.FC<ModuleStepProps> = ({ setCompany, company }) => {
  const router = useRouter();
  const [module, setModule] = useState<string>();
  return (
    <Card key={2}>
      <div className="flex flex-col justify-center">
        <p className="mb-4 text-lg text-gray-600/70">
          Choose the best that describes your company{" "}
        </p>
        <Select
          className="mx-auto w-64"
          onChangeOption={setModule}
          option={module}
          options={["Dentistry", "No similar"]}
        />
      </div>
      <Button
        className="absolute inset-y-0 right-2 h-full text-accent drop-shadow hover:scale-105 active:scale-95"
        variant="link"
        disabled={company?.name == null || module == null}
        size="icon"
        onClick={() => {
          if (company?.name != null && module != null) {
            setCompany({ name: company?.name, modules: [module] });
            router.push("?step=3");
          } else router.push("?step=1");
        }}
      >
        <Icons.arrowRightCircle />
      </Button>
    </Card>
  );
};

export default ModuleStep;
