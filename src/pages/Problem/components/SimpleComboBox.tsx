import { DropdownIcon, CheckIcon } from "@/assets";
import { ComboBoxOption } from "@/models";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import clsx from "clsx";
import { useState } from "react";

interface SimpleComboBoxProps {
  value: any;
  onChange: (value: any) => void;
  multiple?: boolean;
  options: ComboBoxOption[];
  className?: string;
}

export const SimpleComboBox = ({
  value,
  onChange,
  multiple = false,
  options,
  className,
}: SimpleComboBoxProps) => {
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? options
      : options.filter((option: { name: string }) => {
          return option.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox
      multiple={multiple}
      value={value}
      onChange={onChange}
      onClose={() => setQuery("")}
    >
      <div className={clsx("!relative flex flex-wrap")}>
        <ComboboxInput
          aria-label="Assignees"
          className={clsx("w-full rounded-lg pr-8 text-sm/6", className)}
          displayValue={(option: { name: string }) => option?.name}
          onChange={(event) => {
            setQuery(event.target.value);
            event.target.value = event.target.value.toUpperCase();
          }}
        />
        <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
          <DropdownIcon className="size-4 fill-transparent" />
        </ComboboxButton>
      </div>

      <ComboboxOptions
        transition
        className={clsx(
          "light-primary dark:dark-primary empty:invisible absolute overflow-y-scroll z-10",
          "!max-h-52 w-full rounded-xl border p-1 [--anchor-gap:var(--spacing-1)]",
          "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0"
        )}
      >
        {filteredPeople?.map((option) => (
          <ComboboxOption
            key={`${option.name}-${option.id}-option`}
            value={option}
            className={clsx(
              "group flex cursor-default items-center gap-1 rounded-lg py-1.5 px-3 select-none",
              "data-[focus]:dark-secondary data-[focus]:dark:light-secondary"
            )}
          >
            <CheckIcon className="invisible size-4 group-data-[selected]:visible" />
            <div className="text-sm/6 font-medium">{option.name}</div>
          </ComboboxOption>
        ))}
      </ComboboxOptions>

      {value?.length > 0 &&
        value?.some((option: ComboBoxOption) => option.id) && (
          <ul className="flex flex-wrap min-w-fit mt-2 gap-2">
            {value.map(
              (option: ComboBoxOption) =>
                (option.id && (
                  <li
                    key={`${option.name}-${option.id}-selected`}
                    className={clsx(
                      "border-2 my-auto px-2 h-7 text-sm flex items-center border-solid rounded-lg",
                      "light-primary dark:dark-primary"
                    )}
                  >
                    {option.shortName.toUpperCase()}
                  </li>
                )) || <></>
            )}
          </ul>
        )}
    </Combobox>
  );
};

export default SimpleComboBox;
