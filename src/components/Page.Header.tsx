import React, { type FC } from "react";
import { Icons } from "@/src/components/icons";
import { Input } from "./ui/Input";

const PageHeader: FC = () => {
  return (
    <div className="sticky top-0 w-full border-b bg-white backdrop-blur-lg">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="flex h-14 items-center justify-between">
          <Icons.logo />
          <div>
            <Input placeholder="Name" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
