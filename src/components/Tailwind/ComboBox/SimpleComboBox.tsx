import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { useState, forwardRef } from "react";

export const SimpleComboBox = forwardRef(
  ({ value, onChange, multiple = false, datalist, ...props }, ref) => {
    const [query, setQuery] = useState("");

    const filteredPeople =
      query === ""
        ? datalist
        : datalist.filter((option) => {
            return option.name.toLowerCase().includes(query.toLowerCase());
          });

    return (
      <Combobox
        multiple={multiple}
        value={value}
        onChange={onChange}
        onClose={() => setQuery("")}
      >
        <div className={clsx("!relative flex flex-wrap", props["className"])}>
          {value?.length > 0 && (
            <ul className="flex flex-wrap min-w-fit">
              {value.map(
                (option: { id: number; name: string; shorName: string }) => (
                  <li
                    key={`${option.name}-${option.id}-selected`}
                    className="border-2 my-auto me-2 px-1 h-7 text-sm flex items-center border-solid rounded-lg"
                  >
                    {option.shorName?.toUpperCase()}
                  </li>
                )
              )}
            </ul>
          )}
          <ComboboxInput
            {...props}
            ref={ref}
            aria-label="Assignees"
            className={clsx(
              "w-full rounded-lg border-none bg-white/5 pr-8 text-sm/6 text-black",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
            )}
            displayValue={(option: { name: string }) => option?.name}
            onChange={(event) => {
              setQuery(event.target.value);
              event.target.value = event.target.value.toUpperCase();
            }}
          />
          <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
            <ChevronDownIcon className="size-4 fill-black/60 group-data-[hover]:fill-black" />
          </ComboboxButton>
        </div>

        <ComboboxOptions
          transition
          className={clsx(
            "!max-h-52 w-full rounded-xl border border-white/5 bg-white p-1 [--anchor-gap:var(--spacing-1)] empty:invisible",
            "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0 absolute overflow-y-scroll z-10"
          )}
        >
          {filteredPeople?.map(
            (option: { id: number; name: string; shorName: string }) => (
              <ComboboxOption
                key={`${option.name}-${option.id}-option`}
                value={option}
                className="group flex cursor-default items-center gap-1 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-black/10"
              >
                <CheckIcon className="invisible size-4 fill-black group-data-[selected]:visible" />
                <div className="text-sm/6 text-black">{option.name}</div>
              </ComboboxOption>
            )
          )}
        </ComboboxOptions>
      </Combobox>
    );
  }
);

export default SimpleComboBox;
