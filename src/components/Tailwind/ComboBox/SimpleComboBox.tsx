import { DropdownIcon } from "@/assets";
import { ComboBoxOption } from "@/models";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { useState } from "react";

interface Props {
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
}: Props) => {
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
      {value?.length > 0 && (
        <ul className="flex flex-wrap min-w-fit mb-1">
          {value.map((option: ComboBoxOption) => (
            <li
              key={`${option.name}-${option.id}-selected`}
              className="border-2 my-auto me-2 px-2 h-7 text-sm flex items-center border-solid rounded-lg"
            >
              {option.shortName.toUpperCase()}
            </li>
          ))}
        </ul>
      )}
      <div className={clsx("!relative flex flex-wrap")}>
        <ComboboxInput
          aria-label="Assignees"
          className={clsx(
            "w-full rounded-lg border-none pr-8 text-sm/6 light-primary dark:dark-secondary",
            className
          )}
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
          "!max-h-52 w-full rounded-xl border border-white/5 bg-white p-1 [--anchor-gap:var(--spacing-1)] empty:invisible",
          "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0 absolute overflow-y-scroll z-10"
        )}
      >
        {filteredPeople?.map((option) => (
          <ComboboxOption
            key={`${option.name}-${option.id}-option`}
            value={option}
            className="group flex cursor-default items-center gap-1 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-black/10"
          >
            <CheckIcon className="invisible size-4 fill-black group-data-[selected]:visible" />
            <div className="text-sm/6 text-black">{option.name}</div>
          </ComboboxOption>
        ))}
      </ComboboxOptions>
    </Combobox>
  );
};

export default SimpleComboBox;
