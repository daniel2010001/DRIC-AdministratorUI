import React from "react";

type CardProps = {
  icon: React.ReactNode;
  title: string;
  number: number;
};

export function Card({ icon, title, number }: CardProps) {
  return (
      <div className="flex flex-col items-center bg-white p-9 rounded-lg shadow-md w-full h-31 border-2 border-gray-350">

      <div className="flex items-center justify-center mb-2">
        {icon}
        <span className="text-3xl font-bold ml-2">{number}</span>
      </div>
      <h2 className="text-lg font-medium text-center">{title}</h2>
    </div>
  );
}
