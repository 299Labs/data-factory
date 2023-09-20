import { toast as toastRad, Toaster as RadToaster } from "sonner";
import React from "react";

export function Toast(): React.ReactElement {
  return (
    <RadToaster
      position="bottom-left"
      toastOptions={{
        style: {
          background: "white",
          color: "#111827",
          border: "1px solid #E5E7EB",
        },
      }}
    />
  );
}

export const toastPromiseDefault = {
  loading: "Wait...",
  error: "Something went wrong, try again",
};

export const toast = toastRad;
