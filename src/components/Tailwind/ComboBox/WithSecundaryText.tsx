import React, { useState } from "react";

export const WithSecundaryText = ({ name, label, datalist }) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const filteredList = datalist.filter((item) =>
    item.nombre_solicitante.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="w-full">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="relative mt-1">
        <input
          type="text"
          id={name}
          name={name}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          aria-expanded={isOpen}
          aria-autocomplete="list"
          aria-labelledby={`label-${name}`}
        />
        <button
          type="button"
          className="absolute inset-y-0 right-0 px-2 flex items-center focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          <svg
            className="h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        {isOpen && (
          <ul className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
            {filteredList.map((item) => (
              <li
                key={item.id}
                className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9"
                onClick={() => {
                  setSelected(item);
                  setQuery(item.nombre_solicitante);
                  setIsOpen(false);
                }}
              >
                <div className="flex justify-between">
                  <div className="flex">
                    <span className="font-normal ml-3 block truncate">
                      {item.nombre_solicitante}
                    </span>
                    <span className="text-gray-500 ml-3 block truncate">
                      @{item.nombre_solicitante}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default WithSecundaryText;
