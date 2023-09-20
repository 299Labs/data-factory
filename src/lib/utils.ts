import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function formatPhoneNum(value: string): string {
  if (value === "") return value;
  const phoneNum = value.replace(/[^\d]/g, "");
  const phoneNumLength = phoneNum.length;
  if (phoneNumLength < 4) return phoneNum;
  if (phoneNumLength < 7)
    return `(${phoneNum.slice(0, 3)}) ${phoneNum.slice(3)}`;
  return `(${phoneNum.slice(0, 3)}) ${phoneNum.slice(3, 6)}-${phoneNum.slice(
    6,
    10,
  )}`;
}
