"use client";
import React from "react";
import { Icons } from "@/src/components/icons";
import { Button } from "@/src/components/ui/Button";
import { useRouter } from "next/navigation";

const UsersModule: React.FC = () => {
  const router = useRouter();
  return (
    <div className="rounded border bg-white p-2">
      <div className="flex items-center space-x-4">
        <div className="flex h-8 w-8 items-center justify-center rounded-full border">
          <Icons.users className="h-4 w-4 text-gray-600" />
        </div>
        <span className="text-dark">Users: 292</span>
      </div>
      <div className="mt-3">
        <Button
          onClick={() => {
            router.push("/dashboard/new");
          }}
          size="sm"
        >
          Add
        </Button>
      </div>
    </div>
  );
};

export default UsersModule;
