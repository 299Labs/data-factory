"use client";
import React from "react";
import { Icons } from "@/src/components/icons";
import { Button } from "@/src/components/ui/Button";
import { useRouter } from "next/navigation";
import { db } from "@/src/lib/db";
import { useLiveQuery } from "dexie-react-hooks";

const UsersModule: React.FC = () => {
  const router = useRouter();
  const company = useLiveQuery(async () => await db.profile.toArray());
  return (
    <div className="relative rounded border bg-white p-2">
      {company != null && (
        <p className=" absolute right-1.5 top-1.5 text-xs text-dark/50">
          {company[0]?.name}
        </p>
      )}
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
