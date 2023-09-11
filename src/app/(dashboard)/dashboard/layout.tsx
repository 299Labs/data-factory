import React from "react";
import { Icons } from "@/src/components/icons";
import { ListLink } from "@/src/components/ui/Link";

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="flex">
      <aside className="hidden w-1/4 flex-col space-y-2 border-r p-4 sm:flex md:w-1/6">
        <ListLink href="/">
          <Icons.home className="h-6 w-6" />
          <span>Dashboard</span>
        </ListLink>
        <ListLink href="/">
          <Icons.calendar className="h-6 w-6" />
          <span>Calendar</span>
        </ListLink>
      </aside>
      <main className="p-4">{children}</main>
    </div>
  );
};

export default DashboardLayout;
