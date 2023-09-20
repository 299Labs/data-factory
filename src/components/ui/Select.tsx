import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/src/lib/utils";
import { Icons } from "@/src/components/icons";
import { Label } from "@/src/components/ui/Label";

interface SelectProps extends React.HTMLAttributes<HTMLDivElement> {
  options: Option[];
  defaultValue?: Option;
  disabled?: boolean;
  onChangeOption?: React.Dispatch<React.SetStateAction<undefined | Option>>;
  option?: Option | undefined;
  label?: string;
  name?: string;
}

type Option = string;

const Select = React.forwardRef<HTMLDivElement, SelectProps>(
  (
    {
      options,
      defaultValue,
      className,
      disabled,
      onChangeOption,
      option,
      placeholder,
      name,
      label,
      ...props
    },
    ref,
  ) => {
    const [open, setOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<undefined | Option>(
      defaultValue ?? undefined,
    );
    return (
      <div className="flex flex-col space-y-1">
        {label != null && <Label htmlFor={label}>{label}</Label>}
        {/* invisible input for formData */}
        <input
          readOnly
          hidden
          aria-hidden={true}
          value={option ?? selectedOption}
          name={name}
        />
        <div
          className={cn("relative", disabled != null && "pointer-events-none")}
        >
          <div
            tabIndex={0}
            onBlur={() => {
              setOpen(false);
            }}
            onFocus={() => {
              setOpen(true);
            }}
            className={cn(
              "relative flex h-8 items-center rounded border bg-white p-1 shadow sm:text-sm",
              className,
            )}
            // role="combobox"
            aria-expanded={open}
            // aria-controls="select-1" idk how can i make custom id without js
            ref={ref}
            {...props}
          >
            {(option ?? selectedOption) != null ? (
              <span className="pointer-events-none absolute left-2 text-dark">
                {option ?? selectedOption}
              </span>
            ) : (
              <span
                className={cn(
                  "pointer-events-none select-none text-dark absolute left-2 opacity-50",
                  defaultValue != null && "opacity-100",
                )}
              >
                {defaultValue ?? placeholder ?? "Select..."}
              </span>
            )}
            {/* arrow */}
            <Icons.chevronDown
              className={cn(
                "absolute right-1.5 h-2.5 w-2 scale-150 items-center opacity-50 duration-200",
                open && "-rotate-180",
              )}
              aria-disabled
            />
          </div>
          <AnimatePresence>
            {open && (
              <motion.div
                id={label}
                className={cn(
                  "absolute left-0 right-0 top-9 w-full overflow-hidden rounded border bg-white shadow sm:text-sm z-10",
                  className,
                )}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <ul>
                  {options.map((opt, idx) => (
                    <li
                      className={cn(
                        "group relative cursor-pointer items-center text-left text-dark bg-white pl-3 py-1.5 flex duration-100 hover:bg-accent hover:text-white",
                        (option ?? selectedOption) === opt &&
                          "font-semibold text-black",
                      )}
                      onClick={() => {
                        onChangeOption == null
                          ? setSelectedOption(opt)
                          : onChangeOption(opt);
                      }}
                      key={idx}
                    >
                      <span>{opt}</span>
                      {(option ?? selectedOption) === opt && (
                        <Icons.check className="absolute right-1.5 flex h-5 w-5 text-accent group-hover:text-white" />
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    );
  },
);

export { Select };

Select.displayName = "Select";
