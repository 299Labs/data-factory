"use client";
import { Input } from "@/src/components/ui/Input";
import React, { useState } from "react";
import { Table } from "@/src/components/ui/table";
import { TableHead } from "@/src/components/ui/table/Table.Head";
import { TableBody } from "@/src/components/ui/table/Table.Body";
import { TableRow } from "@/src/components/ui/table/Table.Row";
import { TableHeader } from "@/src/components/ui/table/Table.Header";
import { TableData } from "@/src/components/ui/table/Table.Data";
import { Icons } from "@/src/components/icons";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/src/lib/db";
import { cn, tr } from "@/src/lib/utils";
import Link from "next/link";

const Dashboard: React.FC = () => {
  const [name, setName] = useState("");
  const users = useLiveQuery(async () => {
    const filteredUsers = await db.users
      .where("name")
      .startsWithIgnoreCase(name)
      .toArray();

    return filteredUsers;
  }, [name]);
  return (
    <>
      <Input
        onChange={(e) => {
          setName(e.target.value);
        }}
        className="h-10 w-full text-lg sm:text-lg"
        searchIcon
      />
      <div className="mt-4">
        <Table className="w-full shadow">
          <TableHead className="border-b">
            <TableRow className="bg-gray-50">
              <TableHeader>Name</TableHeader>
              <TableHeader>Contacts</TableHeader>
              <TableHeader>Status</TableHeader>
              <TableHeader>Last</TableHeader>
              <TableHeader></TableHeader>
            </TableRow>
          </TableHead>
          <TableBody className="w-full">
            {/* to client component (below) */}
            {users?.map((user, idx) => (
              <TableRow className="group" key={idx}>
                <TableData>
                  <div className="flex items-center space-x-2.5">
                    <div className="flex h-8 w-8 select-none items-center justify-center rounded-full border bg-gray-100 uppercase duration-150 ">
                      {user.name.slice(0, 1)}
                    </div>
                    <Link href={`/dashboard/users/${user.id}`}>
                      {user.name}
                    </Link>
                  </div>
                </TableData>

                <TableData>
                  <p className="flex flex-col">
                    <span>{tr(user?.phone_number)}</span>
                    <span className="text-gray-500">{user?.email}</span>
                  </p>
                </TableData>

                <TableData>
                  <div className="flex items-center space-x-1.5">
                    <div
                      className={cn(
                        "w-1.5 h-1.5 rounded-full",
                        user.status?.color != null
                          ? `bg-[${user.status.color}]`
                          : "bg-gray-400",
                      )}
                      aria-disabled={true}
                    />
                    <span>{tr(user.status?.label)}</span>
                  </div>
                </TableData>
                <TableData>{user.updatedAt.toLocaleDateString()}</TableData>
                <TableData>
                  <Link href={`/dashboard/users/${user.id}`}>
                    <Icons.settings className="h-5 w-5 cursor-pointer text-gray-500 duration-150 hover:text-accent" />
                  </Link>
                </TableData>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default Dashboard;
