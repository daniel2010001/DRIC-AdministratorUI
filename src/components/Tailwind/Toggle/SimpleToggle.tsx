import React from 'react';

export interface SimpleToggleProps {
  isOn: boolean;
  toggleSwitch: () => void;
}

const SimpleToggle = ({isOn, toggleSwitch}: SimpleToggleProps) => {
  return (
    <button
      type="button"
      className={`bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 ${isOn ? 'bg-indigo-500' : 'bg-gray-200'}`}
      role="switch"
      aria-checked={isOn}
      onClick={toggleSwitch}
    >
      <span
        aria-hidden="true"
        className={`translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200 ${isOn ? 'translate-x-5' : 'translate-x-0'}`}
      />
    </button>
  );
};

export default SimpleToggle;
