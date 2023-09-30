"use client";
import React from "react";
import { useParams } from "next/navigation";
import { db } from "@/src/lib/db";
import { useLiveQuery } from "dexie-react-hooks";
import { tr } from "@/src/lib/utils";

const User: React.FC = () => {
  const params = useParams();
  const userId = params.userId as string;
  const user = useLiveQuery(async () => {
    const friends = await db.users.where("id").equals(+userId).toArray();
    return friends[0];
  }, [userId]);

  if (user != null)
    return (
      <>
        <div className="rounded border bg-white p-4">
          <div className="flex justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex h-12 w-12 select-none items-center justify-center rounded-full border bg-gray-100 text-xl uppercase duration-150 ">
                {user.name.slice(0, 1)}
              </div>
              <div>
                <p className="text-xl text-dark">{user.name}</p>
                <span className="text-gray-600">{user.status}</span>
              </div>
            </div>
            <div className="rounded border bg-gray-50 p-2">
              {/*  Mini-calendar here */}
            </div>
          </div>
          <hr className="my-3" />
          <div className="grid gap-4 sm:grid-cols-3 sm:gap-16">
            <div>
              <span className="text-sm text-gray-500">Contacts</span>
              <div className="flex flex-col space-y-0.5">
                <span>Phone: {tr(user?.phone_number)}</span>
                <span>Address: {tr(user?.address)}</span>
                <span>Email: {tr(user?.email)}</span>
              </div>
            </div>
            <div>
              <span className="text-sm text-gray-500">Base</span>
              <div className="flex flex-col space-y-0.5">
                <span>Birthday: {tr(user?.birthday)} 🎂</span>
                <span>Sex: {tr(user?.sex)}</span>
                <span>Age: {tr(user?.age)} yo</span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default User;
