import Dexie, { type Table } from "dexie";
import type { DBCompanyProfile, DBUser } from "@/src/lib/db/schema";

export class SubClassedDexie extends Dexie {
  // 'friends' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  users!: Table<DBUser>;
  profile!: Table<DBCompanyProfile>;

  constructor() {
    super("data-factory-company-1");
    this.version(1).stores({
      users: "++id, name, age, email, phone_number, status, modules", // Primary key and indexed props
      profile: "++id, name, modules",
    });
  }
}

export const db = new SubClassedDexie();
