import React from "react";
import { SimpleToggleProps } from "./SimpleToggle";

interface ToggleWithTextProps extends SimpleToggleProps {
  switchText: string;
}

export const ToggleWithText = ({
  isOn,
  toggleSwitch,
  switchText,
}: ToggleWithTextProps) => {
  return (
    <button
      type="button"
      className={`bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-32 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 ${
        isOn ? "bg-indigo-500" : "bg-gray-200"
      }`}
      role="switch"
      aria-checked={isOn}
      onClick={toggleSwitch}
    >
      <span
        aria-hidden="true"
        className={`translate-x-0 inline-block h-5 w-24 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200 ${
          isOn ? "translate-x-7" : "translate-x-0"
        }`}
      >
        <p className="flex justify-center items-center h-full text-xs font-medium text-center transition-opacity ease-in-out duration-200">
          {switchText}
        </p>
      </span>
    </button>
  );
};

export default ToggleWithText;
