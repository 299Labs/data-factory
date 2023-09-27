"use client";

import React, { type FormEvent } from "react";
import { Input } from "../../ui/Input";
import { Select } from "@/src/components/ui/Select";
import { Button } from "@/src/components/ui/Button";
import { getEntries } from "@/src/lib/form";
import type { DBUser } from "@/src/lib/db/schema";
import { useRouter } from "next/navigation";
import { db } from "@/src/lib/db";

const CreateForm: React.FC = () => {
  const router = useRouter();
  function onSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    const data = getEntries<DBUser>(e);
    void db.users.add({ ...data, updatedAt: new Date(Date.now()) });
    router.push("/dashboard");
  }
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col space-y-2.5 rounded border bg-white p-2"
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <Input placeholder="Alex Salikoff" required name="name" label="Name*" />
        <Input name="phone_number" type="tel" label="Phone number" />
      </div>
      <Input className="w-full" name="birthday" type="date" label="Birthday" />
      <div className="grid gap-3 sm:grid-cols-2">
        <Input
          placeholder="example@mail.com"
          name="email"
          type="email"
          label="Email"
        />
        <Select name="sex" options={["Male", "Female", "Other"]} label="Sex" />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <Input placeholder="Bork street, 88" name="address" label="Address" />
        <Input name="age" placeholder="24" type="number" label="Age" />
      </div>
      <Select
        label="Status"
        name="status"
        options={["Active", "Healthy", "Sick", "+ Add yours"]}
      />
      <Button size="md" type="submit">
        Create
      </Button>
    </form>
  );
};

export default CreateForm;
