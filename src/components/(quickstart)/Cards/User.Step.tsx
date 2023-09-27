"use client";
import React, { useState } from "react";
import { Card } from "@/src/components/(quickstart)/Card";
import { Input } from "../../ui/Input";
import { Button } from "@/src/components/ui/Button";
import { Select } from "@/src/components/ui/Select";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { getEntries } from "@/src/lib/form";
import { formatPhoneNum } from "@/src/lib/utils";
import type { DBCompanyProfile, DBUser } from "@/src/lib/db/schema";

interface ModuleProps {
  company?: DBCompanyProfile;
  setUser: React.Dispatch<React.SetStateAction<DBUser | undefined>>;
}
interface Inputs {
  name: string;
  address?: string;
  birthday?: string;
  phone?: string;
}
const UserStep: React.FC<ModuleProps> = ({ company, setUser }) => {
  const router = useRouter();
  const [times, setTimes] = useState(0);
  const [phoneInput, setPhoneInput] = useState<string>("");
  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    if (company?.name != null) {
      const data = getEntries<Inputs>(e);
      // void db.users.add({
      //   name: data.name,
      //   phone_number: data?.phone
      //     ?.replace(" ", "")
      //     .replace("(", "")
      //     .replace(")", "")
      //     .replace("-", ""),
      //   address: data?.address,
      //   birthday: data?.birthday,
      //   updatedAt: new Date(Date.now()),
      // });
      setUser({
        name: data.name,
        phone_number: data?.phone
          ?.replace(" ", "")
          .replace("(", "")
          .replace(")", "")
          .replace("-", ""),
        address: data?.address,
        birthday: data?.birthday,
        updatedAt: new Date(Date.now()),
      });
      router.push("?step=4");
    } else {
      router.push("?step=1");
    }
  };
  return (
    <Card className="flex flex-col space-y-3 sm:px-6" key={3}>
      <p className="text-lg font-semibold text-gray-800">
        Let&apos;s add your first user!
      </p>
      <form onSubmit={onSubmit} className="flex flex-col space-y-3">
        <div className="grid gap-3 sm:grid-cols-2">
          <Input required className="w-full" label="Full name" name="name" />
          <Input className="w-full" label="Address" name="address" />
        </div>
        <Input
          type="date"
          className="w-2/3 max-sm:w-full"
          label="Birthday date"
          name="birthday"
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
                  className="w-full disabled:opacity-100"
                  placeholder="(929) 999-8765"
                  type="tel"
                  value={phoneInput}
                  onChange={(e) => {
                    setPhoneInput(formatPhoneNum(e.target.value));
                  }}
                  name="phone"
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
                  options={["Male", "Female", "Other"]}
                  defaultValue="Male"
                  label="Sex"
                  name="sex"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="flex">
          {times < 2 && (
            <Button
              type="button"
              onClick={() => {
                times < 4 && setTimes((times) => times + 1);
              }}
              variant="white"
              className="mt-1 font-medium text-dark"
              size="md"
            >
              {times < 1 ? "🔥 You can add more!" : "🔥 And More"}
            </Button>
          )}
          {times >= 2 && (
            <Button
              type="submit"
              variant="white"
              className="mt-1 font-medium text-dark"
              size="md"
            >
              ⚡ Add to storage
            </Button>
          )}
        </div>
      </form>
    </Card>
  );
};

export default UserStep;
