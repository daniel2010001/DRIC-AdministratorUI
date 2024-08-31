import React from "react";
import clsx from "clsx";

type Detail = {
  label: string;
  value: number;
};

type CardProps = {
  icon: React.ReactNode;
  title: string;
  number: number;
  detalles?: Detail[];
};

const CardDetails = ({ detalles }: { detalles: Detail[] }) => (
  <div className="flex flex-col justify-center text-left mt-4 sm:mt-0">
    {detalles.map((data, index) => (
      <span key={index} className="text-sm text-gray-700">
        {data.label}: <span className="font-bold">{data.value}</span>
      </span>
    ))}
  </div>
);

export function Card({ icon, title, number, detalles }: CardProps) {
  return (
    <div
      className={clsx(
        "grid bg-gradient-to-b from-red-50 via-red-100 to-red-200 px-8 p-4 rounded-lg shadow-md w-full h-auto border-2 border-neutral-600",
        detalles && detalles.length > 0
          ? "grid-cols-1 sm:grid-cols-3"
          : "grid-cols-1 place-items-center"
      )}
    >
      <div className="flex col-span-1 sm:col-span-2 items-center mb-4 sm:mb-0">
        <div className="mr-6">{icon}</div>
        <div className="flex flex-col">
          <span className="text-2xl sm:text-3xl font-bold">{number}</span>
          <h2 className="text-md sm:text-lg font-medium">{title}</h2>
        </div>
      </div>

      {detalles && detalles.length > 0 && <CardDetails detalles={detalles} />}
    </div>
  );
}
