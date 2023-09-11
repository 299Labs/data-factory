import React, { type FC } from "react";
import { Icons } from "@/src/components/icons";
import { Button } from "@/src/components/ui/Button";

const PageHeader: FC = () => {
  return (
    <div className="sticky top-0 w-full border-b bg-white backdrop-blur-lg">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="flex h-14 items-center justify-between">
          <Icons.logo />
          <Button variant="link" className="text-sm font-medium">
            <span>Create project</span>
          </Button>
          {/* <div> */}
          {/*  <Input className="py-1.5" placeholder="Search someone..." /> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
