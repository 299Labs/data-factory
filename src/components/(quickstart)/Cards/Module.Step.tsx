"use client";

import React, { useState } from "react";
import { Select } from "@/src/components/ui/Select";
import { Card } from "@/src/components/(quickstart)/Card";
import { Icons } from "@/src/components/icons";
import { Button } from "@/src/components/ui/Button";
import { useRouter } from "next/navigation";
import { db } from "@/src/lib/db";

const ModuleStep: React.FC<{ companyName?: string }> = ({ companyName }) => {
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
        disabled={companyName == null || module == null}
        size="icon"
        onClick={() => {
          if (companyName != null && module != null) {
            void db.profile.add({
              name: companyName,
              modules: [module],
            });
            router.push("?step=3");
          }
        }}
      >
        <Icons.arrowRightCircle />
      </Button>
    </Card>
  );
};

export default ModuleStep;
