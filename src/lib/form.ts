import type React from "react";

const getEntries = <T>(formEvent: React.FormEvent<HTMLFormElement>): T => {
  formEvent.preventDefault();
  const formData = new FormData(formEvent.currentTarget);
  let output: Record<string, T | FormDataEntryValue> = {}; // I don't know how to destructure T type...
  for (const [key, value] of formData) {
    if (value.length > 0)
      output = {
        ...output,
        [key]: value,
      };
  }
  return output as T;
  // generics 0_0 !fix
};

export { getEntries };
