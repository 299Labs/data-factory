import React, { Suspense } from "react";
import { Icons } from "@/src/components/icons";
import { ListLink } from "@/src/components/ui/Link";
import UsersModule from "@/src/components/(dashboard)/aside/Users.Module";

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="flex">
      <aside className="hidden min-h-[94vh] w-1/4 flex-col space-y-2 border-r p-4 sm:flex md:w-1/6">
        <ListLink href="/dashboard">
          <Icons.home className="h-6 w-6" />
          <span>Dashboard</span>
        </ListLink>
        <ListLink href="/">
          <Icons.calendar className="h-6 w-6" />
          <span>Calendar</span>
        </ListLink>
        <ListLink href="/">
          <Icons.calendar className="h-6 w-6" />
          <span>Reminders</span>
        </ListLink>

        <ListLink className="hover:text-warning" href="/dashboard/settings">
          <Icons.cog className="h-6 w-6" />
          <span>Settings</span>
        </ListLink>
        <hr />
        <UsersModule />
      </aside>
      <main className="w-full p-4 sm:w-2/3">
        <Suspense>{children}</Suspense>
      </main>
    </div>
  );
};

export default DashboardLayout;
