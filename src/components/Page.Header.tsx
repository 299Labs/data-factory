import React, { type FC } from "react";
import { Icons } from "@/src/components/icons";
import Link from "next/link";

const PageHeader: FC = () => {
  return (
    <div className="sticky top-0 z-10 w-screen border-b bg-white backdrop-blur-lg">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="flex h-14 items-center justify-between">
          <Link href="/">
            <Icons.logo />
          </Link>
          <Link
            href="/start"
            className="text-sm font-medium underline-offset-4 hover:underline"
          >
            <span>Create project</span>
          </Link>
          {/* <div> */}
          {/*  <Input className="py-1.5" placeholder="Search someone..." /> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
