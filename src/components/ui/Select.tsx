import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/src/lib/utils";
import { Icons } from "@/src/components/icons";

interface SelectProps extends React.HTMLAttributes<HTMLDivElement> {
  options: Option[];
  defaultValue?: Option;
}

type Option = string;

const Select = React.forwardRef<HTMLDivElement, SelectProps>(
  ({ options, defaultValue, className, ...props }, ref) => {
    const [open, setOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<undefined | Option>();

    return (
      <div className="relative">
        <div
          tabIndex={0}
          onBlur={() => {
            setOpen(false);
          }}
          onFocus={() => {
            setOpen(true);
          }}
          className="relative flex h-8 items-center rounded border bg-white p-1 shadow sm:text-sm"
          // role="combobox"
          aria-expanded={open}
          // aria-controls="select-1" idk how can i make custom id without js
          ref={ref}
          {...props}
        >
          {selectedOption != null ? (
            <span className="pointer-events-none absolute left-2 text-dark">
              {selectedOption}
            </span>
          ) : (
            <span
              className={cn(
                "pointer-events-none text-dark absolute left-2 opacity-50",
                defaultValue != null && "opacity-100",
              )}
            >
              {defaultValue ?? "Select..."}
            </span>
          )}
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              className={cn(
                "absolute top-9 w-full overflow-hidden rounded border bg-white shadow sm:text-sm z-10",
                className,
              )}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ul>
                {options.map((option, idx) => (
                  <li
                    className={cn(
                      "group relative cursor-pointer items-center text-left text-dark bg-white pl-3 py-1.5 flex duration-100 hover:bg-accent hover:text-white",
                      selectedOption === option && "font-semibold text-black",
                    )}
                    onClick={() => {
                      setSelectedOption(option);
                    }}
                    key={idx}
                  >
                    <span>{option}</span>
                    {selectedOption === option && (
                      <Icons.check className="absolute right-1.5 flex h-5 w-5 text-accent group-hover:text-white" />
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  },
);

export { Select };

Select.displayName = "Select";
